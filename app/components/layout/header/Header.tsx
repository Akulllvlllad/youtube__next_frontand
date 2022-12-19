import styles from './Header.module.scss';
import { IconsRight } from './icons/IconsRight';
import { Search } from './search/Search';
import { FC, PropsWithChildren } from 'react'


const Header: FC<PropsWithChildren> = () => {

	return (
		<header className={styles.root}>

			<Search />

			<IconsRight />
			
		</header>
	)
}

export default Header