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

export const getAllBookApi = async(searchKey, reqHeader) =>{
    // query Paremeters baseurl?key=value
    return await commonApi('GET',`${serverUrl}/all-books?search=${searchKey}`, '' ,reqHeader)
}

export const ViewSingleBookApi = async(id) => {
    return await commonApi('GET',`${serverUrl}/view-book/${id}`) ;
}

export const getAllAdminBookApi = async(reqHeader) => {
    return await commonApi('GET',`${serverUrl}/admin-books`,'',reqHeader)
}

//api to approve a book from an admin

export const approveBookApi = async(reqBody,reqHeader) => {
    return await commonApi('PUT',`${serverUrl}/approve-book`,reqBody, reqHeader)
}

export const getAllUsersApi = async(reqHeader) => {
    return await commonApi('GET', `${serverUrl}/all-users`,'', reqHeader)

}

//api to add the jobs
export const addJobApi = async(reqBody) =>{
    return await commonApi("POST",`${serverUrl}/add-job`,reqBody)
}

//api to get all the jobs list from backend
export const getAllJobsApi = async(search) =>{
    return await commonApi('GET',`${serverUrl}/all-jobs?search=${search}`)
}

// api to delete a job by admin
export const deleteAJobApi = async(id) => {
    return await commonApi('DELETE',`${serverUrl}/delete-job/${id}`)
}

//api to apply for a job
export const addApplicationApi  = async (reqHeader,reqBody) => {
    return await commonApi('POST',`${serverUrl}/apply-job`,reqBody,reqHeader);
}

//api to get all the applications from the users

export const getAllApplicationsApi = async() => {
    return await commonApi('GET',`${serverUrl}/all-application`)
}

//api to update the profile in the backend

export const updateProfileApi = async(reqBody , reqHeader) => {
    return await commonApi('PUT', `${serverUrl}/admin-profile-update`, reqBody, reqHeader )
}