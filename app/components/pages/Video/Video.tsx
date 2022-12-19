import { VideoService } from '../../../services/video.service';
import Layout from '../../layout/Layout';
import { Comments } from '../../ui/comments/Comments';
import { VideoDetails } from '../../ui/videoDetails/VideoDetails';
import { VideoPlayer } from '../../ui/videoPlayer/VideoPlayer';
import { IVideoPage } from './Video.interface';
import React from 'react';
import { useMutation } from 'react-query';


export const Video: React.FC<IVideoPage> = ({ video }) => {


	const {mutateAsync} = useMutation('update view', () =>
		VideoService.updateViews(video._id)
	)



		React.useEffect(() => {
			console.log(video)
			
			mutateAsync()
			
		}, [])

	
	return (
		<Layout title={video?.name || ''}>
			<main className='videoPage'>
				<div className="videoPage__container">
				<VideoPlayer videoPath={video.videoPath} thumbnailPath={video.thumbnailPath}/>
				<VideoDetails video={video}/>
				{/* <Comments /> */}
				</div>
			</main>
		</Layout>
	)
}