import { IUser } from '../../../types/user.interface'
import { IVideo } from '../../../types/video.interface'
import Line from '../../ui/Line'
import styles from './RightSide.module.scss'
import { MostPopularVideo } from './most-popular-video/MostPopularVideo'
import { TopChannels } from './top-channels/TopChannels'
import { FC, PropsWithChildren } from 'react'

const RightSide: FC<{ topVideo: IVideo; topChannels: IUser[] }> = ({
	topVideo,
	topChannels,
}) => {
	return (
		<div className={styles.root}>
			{topVideo && <MostPopularVideo video={topVideo} />}

			<Line />

			<TopChannels channels={topChannels} />

			<Line />

			
		</div>
	)
}

export default RightSide


