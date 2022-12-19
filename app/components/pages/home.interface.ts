import { IUser } from "../../types/user.interface";
import { IVideo } from "../../types/video.interface";


export interface IHome {
	weeklyVideos: IVideo[]
	randomVideo: IVideo
	topChannels: IUser[]
	newVideos: IVideo[]
	topVideo: IVideo
}