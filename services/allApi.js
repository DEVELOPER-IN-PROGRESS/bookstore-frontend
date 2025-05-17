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

//get home books
export const homeBookApi = async() =>{
    return await commonApi('GET',`${serverUrl}/all-home-book`)
}

// -------------------------------- users  api ------------------------------------

// upload a  book
export const uploadBookApi = async(reqHeader,reqBody) => {
    return await commonApi('POST',`${serverUrl}/add-books`,reqBody,reqHeader)
}

export const getAllBookApi = async(reqHeader) =>{
    return await commonApi('GET',`${serverUrl}/all-books`,'',reqHeader)
}