import { useAuth } from '../../../../hooks/useAuth'
import { useOutside } from '../../../../hooks/useOutside'
import { AuthService } from '../../../../services/auth/auth.service'
import { Button } from '../../../ui/button/Button'
import { Input } from '../../../ui/input/Input'
import { validEmail } from './AuthForm.constants'
import { IAuthFields } from './AuthForm.interface'
import styles from './AuthForm.module.scss'
import cn from 'classnames'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'
import { useMutation } from 'react-query'

export const AuthForm: React.FC = () => {
	const [isLoginIn, setIsLoginIn] = React.useState<boolean>(true)

	const { ref, setIsShow, isShow } = useOutside(false)

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFields>({
		mode: 'onSubmit',
	})

	const { setData } = useAuth()

	const { mutate: loginSync } = useMutation(
		'login',
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data)
			},
		}
	)

	const { mutate: registerSync } = useMutation(
		'register',
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setData) setData(data)
			},
		}
	)

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (isLoginIn) loginSync(data)

		if (!isLoginIn) registerSync(data)
	}

	return (
		<div ref={ref} className={styles.root}>
			<button
				className={styles.button}
				onClick={() => {
					setIsShow(prev => !prev)
				}}
			>
				<FaUserCircle fill={'#A4A4A4'} />
			</button>

			{isShow && (
				<form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
					<Input
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Please enter a valid email address',
							},
						})}
						// @ts-ignore
						placeholder='Email'
						error={errors.email}
					/>

					<Input
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Min length should more 6 symbols',
							},
						})}
						// @ts-ignore
						placeholder='Password'
						error={errors.password}
					/>
					<div className={styles.buttonGroup}>
						<Button type='submit'>GO</Button>
						<button
							className={styles.register}
							onClick={() => setIsLoginIn(prev => !prev)}
						>
							{isLoginIn ? 'Sign Up' : 'Sign In'}
						</button>
					</div>
				</form>
			)}
		</div>
	)
}
