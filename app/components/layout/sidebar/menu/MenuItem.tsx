import { IMenuItem } from './menu.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Menu.module.scss'
export const MenuItem: React.FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link href={item.link} className={styles.link}>
				
					<Image src={item.image} alt={item.name} width={20} height={20} />

					<b>{item.name}</b>
				
			</Link>
		</li>
	)
}
