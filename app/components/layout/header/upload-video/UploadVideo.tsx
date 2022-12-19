import { VideoService } from '../../../../services/video.service';
import styles from './UploadVideo.module.scss';
import { UploadVideoFrom } from './uploadVideoForm/UploadVideoFrom';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsPlusCircleFill } from 'react-icons/bs';
import { useMutation } from 'react-query';


export const UploadVideo = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const [videoId, setVideoId] = React.useState('')

	const { mutate } = useMutation(
		'create video',
		() => VideoService.createVideo(),
		{
			onSuccess: ({ data }) => {
				setVideoId(data)
				setIsOpen(true)
			},
		}
	)
	const handleCloseModal = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.root}>
			<button onClick={() => mutate()}>
				<BsPlusCircleFill fill={'#CD3A42'} />
			</button>
			<Transition show={isOpen} as={React.Fragment}>
				<Dialog onClose={() => null} className={styles.modalWrapper}>
					<Transition.Child
						enter='transition duration-100 ease-out'
						enterFrom='transform scale-95 opacity-0'
						enterTo='transform scale-100 opacity-100'
						leave='transition duration-75 ease-out'
						leaveFrom='transform scale-100 opacity-100'
						leaveTo='transform scale-95 opacity-0'
						as={React.Fragment}
					>
						<Dialog.Panel className={styles.modal}>
							<UploadVideoFrom
								videoId={videoId}
								handleCloseModal={handleCloseModal}
							/>

							<button onClick={handleCloseModal} className={styles.close}>
								<AiOutlineCloseCircle />
								
							</button>

						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</div>
	)
}