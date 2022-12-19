import { IVideo } from '../../../../types/video.interface'
import { VideoCard } from '../../../ui/video-cards/VideoCard'
import React from 'react'
import styles from './MostPopularVideo.module.scss'




export const MostPopularVideo: React.FC<{ video: IVideo }> = ({ video }) => {
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<h2>Популярное видео</h2>
				
			</div>

			<VideoCard item={video} tag={'hot'} isAvatar />
		</div>
	)
}
