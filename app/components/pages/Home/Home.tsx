import Layout from '../../layout/Layout'
import RightSide from '../../layout/rigth-side/RightSide'
import Line from '../../ui/Line'
import { IHome } from '../home.interface'
import Recommended from './recommended/Recommended'
import WeeklyFeatured from './weeklyFeatured/WeeklyFeatured'
import React, { FC, PropsWithChildren } from 'react'

export const Home: FC<IHome> = ({
	topVideo,
	weeklyVideos,
	randomVideo,
	newVideos,
	topChannels,
}) => {
	return (
		<Layout title='YouTube'>
			<div className='home'>
				<div className='home__container'>
					<div className='home__inner'>
						<div className='home__main'>
							<WeeklyFeatured
								weeklyVideos={weeklyVideos}
								randomVideo={randomVideo}
							/>

							<Line />

							<Recommended newVideos={newVideos} />
						</div>

						<div className='home__bar'>
							<RightSide topVideo={topVideo} topChannels={topChannels} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
