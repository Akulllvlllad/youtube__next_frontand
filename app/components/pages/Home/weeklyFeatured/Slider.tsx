import { IVideo } from '../../../../types/video.interface';
import { VideoCard } from '../../../ui/video-cards/VideoCard';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';


export const Slider: React.FC<{ weeklyVideos: IVideo[] }> = ({ weeklyVideos }) => {
	return (
		<Swiper
			modules={[Navigation, Autoplay]}
			slidesPerView={2}
			className='slider_wf'
			autoplay={{
				delay: 1000,
				pauseOnMouseEnter: true,
			}}
		>
			{weeklyVideos.map(weeklyVideo => (
				<SwiperSlide key={weeklyVideo._id}>
					<VideoCard item={weeklyVideo} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}