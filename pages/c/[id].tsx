import { Channel } from '../../app/components/pages/Channel/Channel';
import { IChannel } from '../../app/components/pages/Channel/Channel.interface';
import { UserService } from '../../app/services/user.service';
import { VideoService } from '../../app/services/video.service';
import { IUser } from '../../app/types/user.interface';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';


const ChannelPage: NextPage<IChannel> = props => {
	
	return <Channel {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const users = await UserService.getAll().then(({ data }) => data)
		const paths = users.map(user => ({
			params: {
				id: user._id,
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
		const userId = String(params?.id)
		const { data: videos } = await VideoService.getVideoByUser(userId)
		const channel = await UserService.getUser(userId).then(
			({ data }) => data || ({} as IUser)
		)

		return {
			props: {
				channel,
				videos,
			} as IChannel,
			revalidate: 60,
		}
	} catch (e) {
		return {
			props: {
				channel: {} as IUser,
				videos: [],
			} as IChannel,
		}
	}
}

export default ChannelPage