import { Home } from '../app/components/pages/Home/Home';
import { IHome } from '../app/components/pages/home.interface';
import { UserService } from '../app/services/user.service';
import { VideoService } from '../app/services/video.service';
import { shuffle } from 'lodash';
import { GetStaticProps, NextPage } from 'next';


// export const BACK_API = 'http://localhost:3333'
// export const FRONT_API = 'http://localhost:3000'


const HomePage: NextPage<IHome> = (props) => {
	
	
	return <Home {...props}/>
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		
		const { data: newVideos } = await VideoService.getVideosAll()
		const topChannels = await UserService.getMostPopular().then(
			({ data }) => data )
		
		const topVideo = await VideoService.getMostPopular().then(
			({ data }) => data[0] || null
		)
		
		
		return {
			props: {
				weeklyVideos: shuffle(newVideos).slice(0, 5),
				randomVideo: shuffle(newVideos)[0],
				topChannels,
				newVideos,
				topVideo,
			},
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				weeklyVideos: [],
				randomVideo: {},
				topChannels: [],
				newVideos: [],
				topVideo: {},
			},
		}
	}
}



export default HomePage