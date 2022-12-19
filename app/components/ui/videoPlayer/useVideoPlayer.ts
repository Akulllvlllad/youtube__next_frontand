import { IVideoElement } from './VideoPlayer.interface';
import { useCallback, useEffect, useRef, useState } from 'react';


export const usePlayer = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [videoTime, setVideoTime] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [progress, setProgress] = useState(0)
	const [volume, setVolume] = useState(0.3)
	const [isMuted, setMuted] = useState(false)
	const [isRepeat, setIsRepeat] = useState(false)
	const [buffered, setBuffered] = useState(0)

	const onProgressBuffered = () => {
		if (!videoRef.current?.buffered.length) return
		setBuffered(
			(videoRef.current?.buffered.end(videoRef.current.buffered.length - 1) /
				videoTime) *
				100
		)
	}


	useEffect(() => {
		onProgressBuffered()
	})
	
	
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.volume = volume
		}
	}, [volume])

	const setSoundVolume = useCallback(
		(e: any) => {
			if (videoRef.current) {
				setVolume(e.target.value)
			}
		},
		[volume]
	)

	useEffect(() => {
		const originalDuration = videoRef.current?.duration

		if (originalDuration) setVideoTime(originalDuration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef?.current?.play()
			setIsPlaying(true)
		} else {
			videoRef?.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const forward = () => {
		if (videoRef.current) {
			videoRef.current.currentTime += 15
		}
	}

	const revert = () => {
		if (videoRef.current) {
			videoRef.current.currentTime -= 15
		}
	}

	const setTime = (e: any) => {
		if (videoRef.current) {
			videoRef.current.currentTime = e.target.value
			setIsPlaying(true)
			videoRef.current.play()
		}
	}

	const fullScreen = () => {
		const video = videoRef.current
		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullscreen) {
			video.mozRequestFullscreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)

			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	})

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const hendleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break

				case 'ArrowLeft':
					revert()
					break

				case ' ':
					e.preventDefault()
					toggleVideo()
					break

				case 'f':
					e.preventDefault()
					fullScreen()
					break

				default:
					return
			}
		}

		document.addEventListener('keydown', hendleKeyDown)

		return () => {
			document.removeEventListener('keydown', hendleKeyDown)
		}
	}, [toggleVideo])

	return {
		videoRef,
		toggleVideo,
		fullScreen,
		setIsRepeat,
		status: {
			buffered,
			isRepeat,
			isPlaying,
			progress,
			currentTime,
			videoTime,
			setTime,
			volume,
			setSoundVolume,
		},
	}
}