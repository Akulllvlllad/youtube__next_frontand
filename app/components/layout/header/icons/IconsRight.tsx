import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'



import cn from 'classnames'
import styles from './IconsRight.module.scss'
import { AuthForm } from '../auth-form/AuthForm'
import { useAuth } from '../../../../hooks/useAuth'
import { UploadVideo } from '../upload-video/UploadVideo'

export const IconsRight: React.FC = () => {

	const {user} = useAuth()

	return (
		<div className={cn(styles.icons)}>
			

			
			{!user ? <AuthForm /> : <UploadVideo/>}
		</div>
	)
}
