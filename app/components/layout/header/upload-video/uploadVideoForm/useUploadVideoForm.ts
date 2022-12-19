import { IMediaResponse } from '../../../../../services/media.service';
import { VideoService } from '../../../../../services/video.service';
import { IVideoDto } from '../../../../../types/video.interface';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';


export const useUploadVideoForm = (
	videoId: string,
	handleCloseModal: () => void
) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue,
	} = useForm<IVideoDto>({
		mode: 'onSubmit',
	})

	const { mutateAsync } = useMutation(
		'update video',
		(body: IVideoDto) => VideoService.updateVideo(videoId, body),
		{
			onSuccess() {
				handleCloseModal()
				alert('видео добавленно')
			},
		}
	)

	const onSubmit: SubmitHandler<IVideoDto> = async data => {
		mutateAsync(data)
	}

	const [videoFileName, setVideoFileName] = React.useState('')

	const handleUploadVideo = (value: IMediaResponse) => {
		setValue('videoPath', value.url)
		setValue('name', value.name)
		setVideoFileName(value.name)
	}

	const [isChosen, setIsChosen] = React.useState(false)

	const [percent, setPercent] = React.useState(0)

	const [isUploading, setIsUploading] = React.useState(true)

	const setProgressPercentage = (val: number) => {
		setIsChosen(true)

		setPercent(val)

		if (val === 100) {
			setIsUploading(false)
		}
	}


	const thumbnailPath = watch('thumbnailPath')


	return {
		isChosen,
		percent,
		isUploading,
		videoFileName,
		register,
		control,
		errors,
		handleUploadVideo,
		setProgressPercentage,
		onSubmit,
		handleSubmit,
		thumbnailPath
	}
}