import Dropzone from '../../../../../../../src/dropzone/dropzone'
import { IUploadFile } from '../../../../../ui/fileLoader/FileLoader.interface'
import styles from './VideoInformation.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IVideoInformation extends IUploadFile {
	thumbnailPath?: string
	videoId: string
	fileName: string
}

export const VideoInformation: React.FC<IVideoInformation> = ({
	onChange,
	folder,
	thumbnailPath,
	videoId,
	fileName,
}) => {


	return (
		<div className={styles.root}>
			{!thumbnailPath ? (
				<>
					<div className={styles.thumbnail}>
						<Dropzone onChange={onChange} folder={folder} isPhotos />
						{thumbnailPath && (
							<Image
								src={`http://localhost:3333${thumbnailPath}`}
								width={344}
								height={200}
								alt=''
							/>
						)}
					</div>
				</>
			) : (
				<Image
					src={`http://localhost:3333${thumbnailPath}`}
					width={344}
					height={200}
					alt=''
				/>
			)}

			<div className={styles.details}>
				<div className={styles.detailsItem}>
					<span>Video link:</span>
					<span>
						<Link href={'/'}>http://localhost:3000/{videoId}</Link>
					</span>
				</div>

				<div className={styles.detailsItem}>
					<span>File name</span>
					<span className={styles.fileName}>{fileName}</span>
				</div>
			</div>
		</div>
	)
}
