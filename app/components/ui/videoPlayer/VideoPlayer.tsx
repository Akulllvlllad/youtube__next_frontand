import styles from './VideoPlayer.module.scss';
import { usePlayer } from './useVideoPlayer';
import cn from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import { BiFullscreen } from 'react-icons/bi';
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { BsArrowRepeat } from 'react-icons/bs';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdPause, MdPlayArrow } from 'react-icons/md';


export const VideoPlayer: React.FC<{
	videoPath: string
	thumbnailPath: string
}> = ({ videoPath, thumbnailPath }) => {
	const { videoRef, toggleVideo, fullScreen, setIsRepeat, status } = usePlayer()
	
	
	
	return (
		<div className={styles.root}>
			{!status.isPlaying && status.currentTime < 1 && (
				<Image
					src={`http://localhost:3333${thumbnailPath}`}
					layout='fill'
					alt='thumbnailPath'
					objectFit='cover'
					onClick={toggleVideo}
				/>
			)}

			{!status.isPlaying ? (
				<div className={styles.togglePlay} onClick={toggleVideo}>
					<FaPlay />
				</div>
			) : (
				<div className={styles.togglePlay} onClick={toggleVideo}>
					<FaPause className={styles.pause} />
				</div>
			)}

			<video
				loop={status.isRepeat}
				onClick={toggleVideo}
				className={styles.player}
				ref={videoRef}
				src={`http://localhost:3333${videoPath}`}
				preload='metadata'
			/>

			<div className={styles.Bar}>
				<div className={styles.range_wrapper}>
					<div
						style={{ width: `${status.buffered}%` }}
						className={cn(styles.buffered)}
					></div>
					<div
						style={{
							width: `${status.currentTime / (status.videoTime || 1) * 100}%`,
						}}
						className={cn(styles.progress)}
					></div>

					<input
						type='range'
						onChange={status.setTime}
						className={cn(styles.range, styles.time)}
						value={status.currentTime}
						min={0}
						max={status.videoTime}
						step={1}
					/>
				</div>

				<div className={styles.Bar__bottom}>
					<div className={styles.controls}>
						<div className={styles.Bar__button}>
							<button className={styles.button} onClick={toggleVideo}>
								{status.isPlaying ? <MdPause /> : <MdPlayArrow />}
							</button>
						</div>

						<div className={styles.Bar__button}>
							<button className={styles.button}>
								{status.volume >= 0.1 ? (
									<BsFillVolumeDownFill />
								) : (
									<BsFillVolumeMuteFill />
								)}
							</button>
						</div>

						<input
							type='range'
							onChange={status.setSoundVolume}
							className={cn(styles.range, styles.volume)}
							value={status.volume}
							min={0}
							max={1}
							step={0.1}
						/>
					</div>

					<div className={styles.Bar__button}>
						<button
							className={cn(styles.button, {
								[styles.repeatOn]: status.isRepeat,
							})}
							onClick={() => setIsRepeat(prev => !prev)}
						>
							{' '}
							<BsArrowRepeat />
						</button>
						<button className={styles.button} onClick={fullScreen}>
							{<BiFullscreen />}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}