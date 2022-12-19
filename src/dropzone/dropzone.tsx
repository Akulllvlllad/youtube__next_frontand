import { IUploadFile } from '../../app/components/ui/fileLoader/FileLoader.interface'
import { useUploadFile } from '../../app/hooks/useUploadFile'
import styles from './dropzone.module.scss'
import cn from 'classnames'
import React, { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { RiDragDropFill } from 'react-icons/ri'

interface Dropzone extends IUploadFile {
	isPhotos: boolean
}

const Dropzone: FC<Dropzone> = ({
	onChange,
	folder,
	setProgress,
	isPhotos,
}) => {
	const onDrop = useCallback((acceptedFiles: any) => {
		uploadFile(acceptedFiles)
	}, [])
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
	})

	const { uploadFile } = useUploadFile(onChange, folder, setProgress)

	return (
		<div className={cn(styles.root, { [styles.photos]: isPhotos })}>
			<div {...getRootProps()} className={styles.dropzone}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p className={cn(styles.massage, styles.active)}>
						<RiDragDropFill className={styles.icon} />
					</p>
				) : (
					<p className={styles.massage}>
						<RiDragDropFill className={styles.icon} />
					</p>
				)}
			</div>
		</div>
	)
}

export default Dropzone
