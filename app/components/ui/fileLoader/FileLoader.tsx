import { useUploadFile } from '../../../hooks/useUploadFile';
import styles from './FileLoader.module.scss';
import { IUploadFile } from './FileLoader.interface';
import React from 'react';


export const FileLoader: React.FC<IUploadFile> = ({
	title,
	onChange,
	folder,
	setProgress
}) => {



	const { uploadFile } = useUploadFile(onChange, folder, setProgress)

	return (
		<div className={styles.root}>
			<label className={styles.file}>
				<span className={styles.text}>Choose File</span>

				{/* <input type='file' className={styles.input} onChange={uploadFile} /> */}
			</label>
		</div>
	)
}