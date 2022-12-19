import { useAuth } from '../../../../hooks/useAuth'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'
import { menuBottom, menuCenter, menuTop } from './menu.data'
import React from 'react'

export const Menu = () => {
	const { user, setData } = useAuth()
	return (
		<ul className={styles.root}>
			{menuTop.map(menuItem => (
				<MenuItem item={menuItem} key={menuItem.name} />
			))}

			<div className={styles.line} />

			{user && (
				<>
					{menuCenter.map(menuItem => (
						<MenuItem item={menuItem} key={menuItem.name} />
					))}
					<div className={styles.line} />{' '}
				</>
			)}

			{menuBottom.map(menuItem => (
				<MenuItem item={menuItem} key={menuItem.name} />
			))}
		</ul>
	)
}
