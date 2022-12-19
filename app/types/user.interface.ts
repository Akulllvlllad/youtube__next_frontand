export interface IUser {
	_id: string

	email: string
	password: string
	createdAt: string
	updatedAt: string
	__v: number
	avatarPath: string
	bannerPath: string
	description: string
	location: string
	name: string
	subscribersCount: number
	videosCount?: number
}


export interface IUserDto
	extends Pick<
		IUser,
		'email' | 'description' | 'name' | 'location' | 'avatarPath'
	> {
	
}
