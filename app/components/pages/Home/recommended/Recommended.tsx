import { IVideo } from '../../../../types/video.interface';
import { VideoItem } from '../../../Video-item/VideoItem';
import { FC, PropsWithChildren } from 'react';
import { VideoCard } from '../../../ui/video-cards/VideoCard';
import styles from './Recomended.module.scss'

const Recommended: FC<{ newVideos: IVideo[] }> = ({ newVideos }) => {
	return (
		<div id='recommended'>
			<div className='top_block'>
				<div className='left_title title_gray'>
					<h2>Recommended</h2>
					<div className='showmore'>Show More</div>
				</div>
				<div className='sort'>By View Trending</div>
			</div>

			<div className={styles.catalog}>



				{newVideos.map(newVideo => (
				
					<VideoCard item={newVideo} key={newVideo._id}/>
				
			))}
				
			</div>
		</div>
	)
}

export default Recommended