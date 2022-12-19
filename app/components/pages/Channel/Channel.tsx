import Layout from '../../layout/Layout'
import Line from '../../ui/Line'
import { IChannel } from './Channel.interface'
import React from 'react'

export const Channel: React.FC<IChannel> = ({ channel, videos }) => {
	

	return (
		<Layout title={channel.name}>
			<div id='wrapper_content'>

				

			</div>
		</Layout>
	)
}
 