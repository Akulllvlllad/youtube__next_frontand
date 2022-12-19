import { Button } from '../../../../../ui/button/Button';
import styles from './FooterUploadVideoForm.module.scss';
import cn from 'classnames';
import React, { FC } from 'react';
import { MdUpload, MdCheckCircle } from 'react-icons/md';


export const FooterUploadVideoForm: React.FC<{ percent: number; isUploading: boolean; fileName: string}> = ({
	percent, isUploading, fileName
}) => {
	

	return (
		<div className={styles.root}>
			<div
				className={cn(styles['status-panel'], {
					[styles.processing]: isUploading || !fileName,
				})}
			>
				<MdUpload className={styles['upload-icon']} />
				<MdCheckCircle className={styles['check-icon']} />
				<span>
					{isUploading ? `Загрузка ${percent}%...` : !fileName ? 'Видео обрабатывыется' : 'Видео загружено' }
				</span>
			</div>

			<div >
				<Button type='submit'>Send</Button>
			</div>
		</div>
	)
}