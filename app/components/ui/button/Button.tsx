import React, { PropsWithChildren } from 'react'

import styles from './Button.module.scss'
import cn from 'classnames'
import { IButton } from './Button.interface'



export const Button: React.FC<PropsWithChildren<IButton>> = ({children, className,  ...rest}) => {
	return <button className={cn(styles.button, className)} {...rest} > {children} </button>
}
