import axios, { axiosClassic } from '../api/interceptors';


export interface IMediaResponse {
	name: string
	url: string
	setProgress?: (val: number) => void
}

export const MediaService = {
	async upload(
		media: FormData,
		folder?: string,
		setProgress?: (val: number) => void
	) {
		return axios.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: progressEvent => {
				if (setProgress) {
					const progress =
						(progressEvent.loaded / (progressEvent?.total || 1)) * 100
					setProgress(Math.ceil(progress))
				}
			},
		})
	},
}