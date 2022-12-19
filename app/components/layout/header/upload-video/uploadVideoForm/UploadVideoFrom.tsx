import Dropzone from '../../../../../../src/dropzone/dropzone'
import { IMediaResponse } from '../../../../../services/media.service'
import { FileLoader } from '../../../../ui/fileLoader/FileLoader'
import { Input } from '../../../../ui/input/Input'
import { Textarea } from '../../../../ui/textarea/textarea'
import { Toggle } from '../../../../ui/toggle/Toggle'
import styles from './UploadVideoForm.module.scss'
import { FooterUploadVideoForm } from './footer-uploadVideoForm/FooterUploadVideoForm'
import { useUploadVideoForm } from './useUploadVideoForm'
import { VideoInformation } from './video-information/VideoInformation'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

export const UploadVideoFrom: React.FC<{
	videoId: string
	handleCloseModal: () => void
}> = ({ videoId, handleCloseModal }) => {
	const {
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
		thumbnailPath,
	} = useUploadVideoForm(videoId, handleCloseModal)

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
				{isChosen ? (
					<>
						<div className={styles.fields}>
							<Input
								{...register('name', {
									required: 'Name is required',
								})}
								// @ts-ignore
								placeholder='Название'
								error={errors.name}
							/>

							<Textarea
								{...register('description', {
									required: 'Description is required',
								})}
								// @ts-ignore
								placeholder='Описание'
								error={errors.description}
							/>

							<Controller
								control={control}
								name='isPublic'
								render={({ field: { value, onChange } }) => (
									<Toggle
										label={'Публичное видео'}
										isEnabled={!!value}
										setIsEnabled={() => {
											onChange(!value)
										}}
									/>
								)}
							/>
						</div>
						<Controller
							control={control}
							name='thumbnailPath'
							render={({ field: { onChange } }) => (
								<VideoInformation
									onChange={(value: IMediaResponse) => {
										onChange(value.url)
									}}
									folder='thumbnails'
									videoId={videoId}
									fileName={videoFileName}
									thumbnailPath={thumbnailPath}
								/>
							)}
						/>

						<FooterUploadVideoForm
							percent={percent}
							fileName={videoFileName}
							isUploading={isUploading}
						/>
					</>
				) : (
					<>
						<Controller
							control={control}
							name='videoPath'
							render={() => (
								<Dropzone
									isPhotos={false}
									folder='videos'
									onChange={handleUploadVideo}
									setProgress={setProgressPercentage}
								/>
							)}
						/>
					</>
				)}
			</form>
		</>
	)
}
