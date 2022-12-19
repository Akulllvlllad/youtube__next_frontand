import adjust from '../../../../assets/img/common/adjust.svg'
import calendar from '../../../../assets/img/common/calendar.svg'
import gift from '../../../../assets/img/common/gift.svg'
import like from '../../../../assets/img/common/like.svg'
import liveNews from '../../../../assets/img/common/live-news.svg'
import multimedia from '../../../../assets/img/common/multimedia.svg'
import smartphone from '../../../../assets/img/common/smartphone.svg'
import support from '../../../../assets/img/common/support.svg'
import time from '../../../../assets/img/common/time.svg'
import videoCamera from '../../../../assets/img/common/video-camera.svg'
import { IMenuItem } from './menu.interface'

export const menuTop: IMenuItem[] = [
	{
		link: '#',
		image: multimedia,
		name: 'Videos',
	},
	{
		link: '#',
		image: videoCamera,
		name: 'Movies & Shows',
	},
	
]

export const menuCenter: IMenuItem[] = [
	

	{
		link: '#',
		image: smartphone,
		name: 'Library',
	},
	{
		link: '#',
		image: like,
		name: 'Liked Videos',
	},
	{
		link: '#',
		image: time,
		name: 'Watch Later',
	},
]

export const menuBottom: IMenuItem[] = [
	{
		link: '#',
		image: adjust,
		name: 'Settings',
	},

	{
		link: '#',
		image: support,
		name: 'Help & Report',
	},
]
