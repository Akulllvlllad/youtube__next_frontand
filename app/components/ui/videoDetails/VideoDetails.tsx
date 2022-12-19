import { IUser } from '../../../types/user.interface'
import { IVideo } from '../../../types/video.interface'
import { nFormatter } from '../../../utils/formatNumber'
import styles from './VideoDetails.module.scss'
import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'
import { BiLike } from 'react-icons/bi'
import { useMutation } from 'react-query'
import { VideoService } from '../../../services/video.service'

export const VideoDetails: React.FC<{ video: IVideo }> = ({ video }) => {

	
	const { mutateAsync, data} = useMutation( 'set like',
		() => VideoService.updateLikes(video._id),
		)


	return (
		<div className={styles.root}>
			<div className={styles.statistic_wrapper}>
				<h1 className={styles.title}>{video.name || 'Без имени'}</h1>
				<UserStatistics user={video.user as IUser} />
				<VideoStatistics views={video?.views} createAt={video?.createdAt} />
			</div>
			<div>
				<button onClick={() => mutateAsync()}>
					<BiLike />
					<span>{nFormatter(data?.data?.like || video.like)}</span>
				</button>
			</div>
			<span>Описание</span>
			<p>{video.description}</p>
		</div>
	)
}

//================================================

interface IVideoStatistics {
	views: number
	createAt: string
}

const VideoStatistics: React.FC<IVideoStatistics> = ({ views, createAt }) => {
	return (
		<div className={styles.videoStatistics}>
			<div className={styles.views}>Просмотров:  <span>{nFormatter(views)}</span></div>
		</div>
	)
}

interface UserStatistics {
	user: IUser
}

export const UserStatistics: React.FC<UserStatistics> = ({ user }) => {
	

	if (!user) return null

	return (
		<div className={styles.userStatistics}>
			<div className={styles.body}>
				<div className={styles.img}>
					<Image
						src={`http://localhost:3333${user.avatarPath}`}
						alt={user.name}
						layout='fill'
						objectFit='cover'
					/>
				</div>

				<div className={styles.info}>
					<h3>{user.name}</h3>
					<p> Подписчиков: {nFormatter(user.subscribersCount)}</p>
				</div>
			</div>


			<button className={styles.subscribe}>Подписаться</button>
		</div>
	)
}
