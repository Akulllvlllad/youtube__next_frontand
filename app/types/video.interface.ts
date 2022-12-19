import { IUser } from './user.interface'

export interface IVideo {
	_id: string
	name: string
	description: string
	videoPath: string
	thumbnailPath: string
	createdAt: string
	updatedAt: string
	views: number
	like: number
	user?: IUser
	isPublic?: boolean
}

export interface IVideoDto
	extends Pick<
		IVideo,
		'thumbnailPath' | 'description' | 'name' | 'videoPath' | 'isPublic'
	> {}
