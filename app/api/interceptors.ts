import axios from "axios";
import Cookies from 'js-cookie';


export const getContentType = () => ({
	'Content-Type': 'application/json'
})


export const axiosClassic = axios.create({
	baseURL: process.env.APP_SERVER_URL,
	headers: getContentType(),
})


const instance = axios.create({
	baseURL: process.env.APP_SERVER_URL,
	headers: getContentType(),
})

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')

	if(config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`


	return config
	
})


instance.interceptors.response.use(config => config)


export default instance