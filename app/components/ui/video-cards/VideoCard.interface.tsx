import { IVideo } from "../../../types/video.interface";


export interface IVideoCard {
	item: IVideo
	isLarge?: boolean
	isAvatar?: boolean
	tag?: string
}