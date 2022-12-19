import { IUser } from '../../../../types/user.interface';
import { ChannelsItem } from './ChannelsItem';
import React from 'react';
import styles from './Channels.module.scss'

export const TopChannels: React.FC<{ channels: IUser[] }> = ({ channels }) => {



	

	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<h2>Популярные каналы</h2>
				
			</div>

			<div className={styles.list}>


				{channels.map(channel => (
						<ChannelsItem channel={channel} key={channel._id}/>
				))}
				
			</div>
		</div>
	)
}