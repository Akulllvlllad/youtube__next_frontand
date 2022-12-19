import { UserService } from '../../../../services/user.service'
import { nFormatter } from '../../../../utils/formatNumber'
import Line from '../../../ui/Line'
import { Loader } from '../../../ui/Preloaders/loader'
import styles from './ProfileInfo.module.scss'
import Image from 'next/image'
import React from 'react'
import { useQuery } from 'react-query'

export const ProfileInfo: React.FC = () => {
	const { data, isLoading } = useQuery(
		'get profile',
		() => UserService.getProfile(),
		{ select: ({ data }) => data }
	)

	return isLoading ? (
		<Loader count={5} />
	) : (
		<>
			<div className={styles.root}>
				<div className={styles.img}>
					<Image
						src={`http://localhost:3333${data?.avatarPath}` || ''}
						alt='avatar'
						layout='fill'
						objectFit='cover'
					/>
				</div>

				<div className={styles.name}>{data?.name}</div>
				<div className={styles.location}>{data?.location}</div>
			</div>
			<div className={styles.information}>
				<div className={styles.item}>
					<div className={styles.bottom}>Видео:</div>
					<div className={styles.top}>{data?.videosCount}</div>
				</div>
				<div className={styles.item}>
					<div className={styles.bottom}>Подписчиков:</div>
					<div className={styles.top}>
						{nFormatter(data?.subscribersCount || 0)}
					</div>
				</div>
			</div>

			<Line />
		</>
	)
}
