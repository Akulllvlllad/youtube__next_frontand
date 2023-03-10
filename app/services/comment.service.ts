import axios, { axiosClassic } from "../api/interceptors"
import { IComment, ICommentDto } from "../types/comment.interface"




export const CommentService = {
	async getCommentByVideo(videoId: string) {
		return axiosClassic.get<IComment[]>(`/comment/by-video/${videoId}`)
	},

	async createComment(body: ICommentDto) {
		return axios.post<IComment>(`/comment`, body)
	},

	
}