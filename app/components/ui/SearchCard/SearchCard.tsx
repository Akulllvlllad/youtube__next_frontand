import { IVideo } from '../../../types/video.interface'
import styles from './SearchCard.module.scss'
import Link from 'next/link'
import React, { FC } from 'react'

const SearchCard: FC<IVideo> = props => {
	return (
		<Link href={`http://localhost:3000/v/${props._id}`} className={styles.root}>
			{props.name}
		</Link>
	)
}

export default SearchCard
