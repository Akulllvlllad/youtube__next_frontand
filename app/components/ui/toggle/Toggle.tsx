import styles from './Toggle.module.scss';
import { IToggle } from './toggle.interface';
import { Switch } from '@headlessui/react';
import cn from 'classnames';
import React from 'react';


export const Toggle: React.FC<IToggle> = ({ isEnabled, setIsEnabled, label=''}) => {
	return (
		<label className={styles.root}>
			<Switch
				checked={isEnabled}
				onChange={setIsEnabled}
				className={cn(styles.switch, {
					'bg-blue-600': isEnabled,
					'bg-gray-200': !isEnabled,
				})}
			>
				<span
					className={cn(styles.point, {
						'translate-x-6': isEnabled,
						'translate-x-1': !isEnabled,
					})}
				/>
			</Switch>
			{label}
		</label>
	)
}