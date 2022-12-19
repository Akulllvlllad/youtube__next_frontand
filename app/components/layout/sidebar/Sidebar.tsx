import logoImg from '../../../assets/img/common/logo.png'
import { useAuth } from '../../../hooks/useAuth'
import { defaultValueAuthState } from '../../../providers/AuthProvider'
import { AuthService } from '../../../services/auth/auth.service'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'
import { Menu } from './menu/Menu'
import Image from 'next/image'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import styles from './Sidebar.module.scss'



const Sidebar: FC<PropsWithChildren> = () => {
	const { user } = useAuth()

	return (
		<section className={styles.root}>
			<Link href='/'  className={styles.logo} rel='noreferrer'>
				<Image src={logoImg.src} alt='YouTube' width={130} height={42} />
			</Link>


			{!!user && <ProfileInfo />}
			
			<Menu />


			{/* <div className='switch_wrapper'>
				<label className='switch'>
					<input type='checkbox' defaultChecked />
					<span className='slider round'></span>
				</label>
				<p>Light On</p>
			</div>

			<button
				id='logout_btn'
				onClick={() => {
					AuthService.logout()
					setData && setData(defaultValueAuthState)
				}}
			>
				Logout
			</button>
			<div className='copy'>© 2020 Youtube, LLC</div> */}
		</section>
	)
}

export default Sidebar

