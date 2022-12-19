import React, { forwardRef } from 'react'
import { IInput } from './Input.interface'
import styles from './Input.module.scss'




export const Input: React.FC = forwardRef<HTMLInputElement, IInput>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {




		return (
			<div className={styles.input} style={style}>
				<label>
					
					<input ref={ref} type={type} {...rest} placeholder={placeholder}/>
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)


Input.displayName = 'Input'
