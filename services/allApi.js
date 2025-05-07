import  { serverUrl } from './serverurl';
import { commonApi } from  './commonApi';

export const registerApi = async(reqBody) => {
 return await commonApi('POST' , `${serverUrl}/register`, reqBody) ;
};

export const loginApi = async(reqBody) => {
    return await commonApi('POST', `${serverUrl}/login`, reqBody)
}

//google login API
export const googleLoginApi = async(reqBody) => {
    return await commonApi('POST', `${serverUrl}/google-login`, reqBody)
}