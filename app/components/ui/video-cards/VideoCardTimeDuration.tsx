import React from 'react';


export const VideoCardTimeDuration: React.FC<{ videoPath: string }> = ({
	videoPath,
}) => {
	const ref = React.useRef<HTMLVideoElement>(null)

	
		const duration = ref.current?.duration || 0



	return (
		<>
			<time>
				{Math.floor(duration / 60) +
					':' +
					('0' + Math.floor(duration % 60)).slice(-2)}
			</time>

			<video className='hidden' ref={ref}>
				<source src={`http://localhost:3333${videoPath}`} type='video/mp4' />
			</video>
		</>
	)
}