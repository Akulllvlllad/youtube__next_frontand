import { IVideo } from '../../../../types/video.interface'
import { VideoCard } from '../../../ui/video-cards/VideoCard'
import { Slider } from './Slider'
import styles from './WeeklyFeatured.module.scss'
import { FC } from 'react'


type TWeeklyFeatured = {
	weeklyVideos: IVideo[]
	randomVideo: IVideo
}

const WeeklyFeatured: FC<TWeeklyFeatured> = ({ weeklyVideos, randomVideo }) => {
	return (
		<div className={styles.root}>
			<div className={styles.slider}>
				<div className={styles.weekly_text}>
					<h2 >Weekly Featured</h2>
					<h3>Hello, Summer Vacation!</h3>
					<p >
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						harum placeat ullam vel non, quisquam totam, doloremque expedita
						odit consectetur minima vitae. Facilis nostrum cumque illum fugit
						rem, nam consectetur!
					</p>
				</div>
				
				<Slider weeklyVideos={weeklyVideos} />
			</div>
			<div className={styles.random}>
				<VideoCard item={randomVideo} isAvatar isLarge />
			</div>
		</div>
	)
}

export default WeeklyFeatured
