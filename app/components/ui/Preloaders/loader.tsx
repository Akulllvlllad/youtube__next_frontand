import React from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const Loader: React.FC<SkeletonProps> = ({className, ...rest}) => {
	return (
		<Skeleton  className={className} {...rest}/>
	)
}