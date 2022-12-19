import { ITextarea } from './textarea.interface'
import styles from './textarea.module.scss'
import React, { forwardRef } from 'react'

export const Textarea: React.FC = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ placeholder, error, style, ...rest }, ref) => {
		return (
			<div className={styles.root} style={style}>
				<label>
					<textarea ref={ref} {...rest} placeholder={placeholder} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Textarea.displayName = 'Textarea'
