import { IVideo } from '../../../types/video.interface'
import { nFormatter } from '../../../utils/formatNumber'
import { Loader } from '../Preloaders/loader'
import { IVideoCard } from './VideoCard.interface'
import styles from './VideoCard.module.scss'
import { VideoCardTimeDuration } from './VideoCardTimeDuration'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

dayjs.extend(relativeTime)

const BACK_API = 'http://localhost:3333'
const FRONT_API = 'http://localhost:3000'

export const VideoCard: React.FC<IVideoCard> = ({
	item,
	isAvatar,
	isLarge,
	tag,
}) => {
	return (
		<Link href={`${FRONT_API}/v/${item?._id}` || '#'}>
			<div className={styles.root}>
				<div className={styles.thumbnail}>
					<Image
						src={`${BACK_API}${item.thumbnailPath}` || ''}
						alt={item?.name}
						layout='fill'
						objectFit='cover'
						className={styles.img}
					/>
					{tag && <div className={styles.hot}>🔥{tag}🔥</div>}
					<VideoCardTimeDuration videoPath={item?.videoPath} />
					{isAvatar && (
						<div className={styles.avatar}>
							<Image
								src={`${BACK_API}${item?.user?.avatarPath}` || ''}
								alt={item?.user?.name || ''}
								layout='fill'
								objectFit='cover'
							/>
						</div>
					)}
				</div>

				<div className={styles.author}>{item?.user?.name}</div>

				
					<div className={styles.name}>{item?.name}</div>
					{isLarge && (
						<div className={styles.description}>{item.description}</div>
					)}
				

				<div className={styles.number_info}>
					<div className={styles.views}>Просмотров {nFormatter(item?.views)}</div>

					{isLarge && <div className={styles.likes}>👍 {item?.like}</div>}

					<div className={styles.date}>
						{dayjs(new Date(item?.createdAt)).fromNow()}
					</div>
				</div>
			</div>
		</Link>
	)
}
