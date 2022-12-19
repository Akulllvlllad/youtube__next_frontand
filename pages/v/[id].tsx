import { Video } from '../../app/components/pages/Video/Video';
import { IVideoPage } from '../../app/components/pages/Video/Video.interface';
import { VideoService } from '../../app/services/video.service';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';


const VideoPage: NextPage<IVideoPage> = props => {
	console.log(props)
	
	return <Video {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {

	try {
		const videos = await VideoService.getVideosAll().then(({ data }) => data)
		const paths = videos.map(video => ({
			params: {
				id: video._id,
			},
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const videoId = String(params?.id)
		const { data: video } = await VideoService.getVideoById(videoId)

		return {
			props: {
				video
			} as IVideoPage,
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				video: {
					name: 'Видео нет'
				},
			} as IVideoPage,
		}
	}
}

export default VideoPage