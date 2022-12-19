import useDebounce from "../../../../hooks/useDebounce";
import { VideoService } from "../../../../services/video.service";
import { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";


export const useSearch = () => {
	const [searchValue, setSearchValue] = useState('')
	const debounceSearch = useDebounce(searchValue, 500)



	const {isSuccess, data} = useQuery(['search videos', debounceSearch], () =>
		VideoService.getVideosAll(debounceSearch), {
			select: ({data}) => data.slice(0,5),
			enabled: !!debounceSearch
		}
	)




	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) =>{
		setSearchValue(e.target.value)
	}



	return { 
		handlerSearch, isSuccess, data, searchValue
	}
}