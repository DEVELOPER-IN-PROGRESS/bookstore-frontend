import axios from 'axios'
import { serverUrl } from './serverurl'

export const commonApi = async  (httpMethod, endpoint , reqBody , reqHeader ) => {
	const reqConfig = {
		method: httpMethod ,
		url: `${serverUrl}${endpoint}` ,
		data: reqBody ,
		headers: reqHeader
	}
	return  await axios(reqConfig)
		.then( (res) => { return res })
		.catch( (err) =>  { return err })
}

