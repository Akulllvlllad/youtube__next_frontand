import { IUser } from '../../../../types/user.interface'
import { nFormatter } from '../../../../utils/formatNumber'
import styles from './Channels.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ChannelsItem: React.FC<{ channel: IUser }> = ({ channel }) => {
	return (
		<article className={styles.channel}>
			<div className={styles.img}>
			{channel.avatarPath ? (
				<Image
					src={`http://localhost:3333${channel?.avatarPath}` || ''}
					alt={channel?.name}
					layout='fill'
					objectFit='cover'
				/>
			) : (
				<p className={styles.bg}></p>
			)}
			</div>
			<div className={styles.info}>
				<div className={styles.name}>{channel.name}</div>
				<div className={styles.subs}>
					{nFormatter(channel.subscribersCount)} Подписчиков
				</div>
			</div>
		</article>
	)
}
