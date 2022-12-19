import { IAuthData } from '../services/auth/auth.helper';
import { AuthService } from '../services/auth/auth.service';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { createContext, PropsWithChildren, useEffect } from 'react';


interface IContext extends IAuthData {
	setData: React.Dispatch<React.SetStateAction<IAuthData>> | null
}

export const AuthContext = createContext<IContext>({} as IContext)


export const defaultValueAuthState = {
	user: null,
	accessToken: '',
}



export const AuthProvider: React.FC<PropsWithChildren<unknown>> = ({
	children,
}) => {



	

	const [data, setData] = React.useState<IAuthData>(defaultValueAuthState)

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')

		if (accessToken) {
			const user = JSON.parse(localStorage.getItem('user') || '')

			setData({
				user,
				accessToken,
			})
		}
	}, [])

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (!accessToken && !data.user) {
			AuthService.logout()
			setData(defaultValueAuthState)
		}
	}, [pathname])

	return (
		<AuthContext.Provider value={{ ...data, setData }}>
			{children}
		</AuthContext.Provider>
	)
}