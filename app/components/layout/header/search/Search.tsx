import search from '../../../../assets/img/common/search.svg'
import { VideoCard } from '../../../ui/video-cards/VideoCard'
import styles from '../Header.module.scss'
import { useSearch } from './useSearch'
import Image from 'next/image'
import React from 'react'
import SearchCard from '../../../ui/SearchCard/SearchCard'

export const Search = () => {
	const { handlerSearch, isSuccess, data, searchValue } = useSearch()

	return (
		<div className={styles.search_wrapper}>
			<label className={styles.search}>
				<input
					value={searchValue}
					onChange={handlerSearch}
					className={styles.input}
					type='text'
					placeholder='Search videos, stars or authors...'
				/>
				<Image
					className={styles.img}
					src={search.src}
					alt='YouTube'
					width={15}
					height={15}
				/>
			</label>

			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(obj => <SearchCard {...obj} key={obj._id} />)
					) : (
						<div>Видео нету</div>
					)}
					
				</div>
			)}
		</div>
	)
}
