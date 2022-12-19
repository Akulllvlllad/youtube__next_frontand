import { MediaService } from '../services/media.service';
import { ChangeEvent } from 'react';
import { useMutation } from 'react-query';


export const useUploadFile = (
	onChange: (...event: any) => void,
	folder?: string,
	setProgress?: (val: number) => void

) => {
	const { mutateAsync } = useMutation(
		'upload file',
		(data: FormData) => MediaService.upload(data, folder, setProgress),
		{
			onSuccess: ({ data }) => {
				onChange(data)
			},
			onError: (error: any) => {
				alert(
					error.response && error.response.data
						? typeof error.response.data.message === 'object'
							? error.response.data.message[0]
							: error.response.data.message
						: error.message
				)
			},
		}
	)
	const uploadFile = async (file: File[]) => {
		if (!file?.length) return

		const formData = new FormData()
		formData.append('media', file[0])

		await mutateAsync(formData)
	}

	return {
		uploadFile
	}
}