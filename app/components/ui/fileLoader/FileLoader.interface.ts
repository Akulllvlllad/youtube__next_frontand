

export interface IUploadFile {
	title?: string
	onChange: (...event: any) => void
	folder?: string
	setProgress?: (val: number) => void
}
