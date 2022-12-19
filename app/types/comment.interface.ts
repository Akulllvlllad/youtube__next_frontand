import { IUser } from './user.interface';


export interface IComment {
	_id: string
	user: IUser
	createdAt: string
	updatedAt: string
	video: string
	massage: string
}

export interface ICommentDto extends Pick<IComment, 'massage'> {
	videoId: string
}