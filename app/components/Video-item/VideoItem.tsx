import React from 'react'
import styles from './VideoItem.module.scss'




export const VideoItem: React.FC = () => {
	return (
		<div className={styles.video_item}>
					<div className={styles.thumbnail}>
						<img src='../../../assets/img/main/4.jpg' alt='' />
						<time>28:32</time>
						<div className='avatar'>
							<img src='../../../assets/img/main/avatar.jpg' alt='' />
						</div>
					</div>
					<div className={styles.author}>Warren Munoz</div>
					<div className={styles.name}>
						Lake House Vacation! Boating, Tubing & More!
					</div>
					<div className={styles.number_info}>
						<div className={styles.views}>VIEWS 29.2K</div>
						<div className={styles.date}>3DS AGO</div>
					</div>
				</div>
	)
}
