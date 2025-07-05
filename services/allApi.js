import { commonApi } from  './commonApi';

export const registerApi = async(reqBody) => {
 return await commonApi('POST' , `/register`, reqBody) ;
};

export const loginApi = async(reqBody) => {
    return await commonApi('POST', `/login`, reqBody)
}

//google login API
export const googleLoginApi = async(reqBody) => {
    return await commonApi('POST', `/google-login`, reqBody)
}

//get home books
export const homeBookApi = async() =>{
    return await commonApi('GET',`/all-home-book`)
}

// -------------------------------- users  api ------------------------------------

// upload a  book
export const uploadBookApi = async(reqHeader,reqBody) => {
    return await commonApi('POST',`/add-books`,reqBody,reqHeader)
}

export const getAllBookApi = async(searchKey, reqHeader) =>{
    // query Paremeters baseurl?key=value
    return await commonApi('GET',`/all-books?search=${searchKey}`, '' ,reqHeader)
}

export const ViewSingleBookApi = async(id) => {
    return await commonApi('GET',`/view-book/${id}`) ;
}

export const getAllAdminBookApi = async(reqHeader) => {
    return await commonApi('GET',`/admin-books`,'',reqHeader)
}

//api to approve a book from an admin

export const approveBookApi = async(reqBody,reqHeader) => {
    return await commonApi('PUT',`/approve-book`,reqBody, reqHeader)
}

export const getAllUsersApi = async(reqHeader) => {
    return await commonApi('GET', `/all-users`,'', reqHeader)
}

//api to add the jobs
export const addJobApi = async(reqBody) =>{
    return await commonApi("POST",`/add-job`,reqBody)
}

//api to get all the jobs list from backend
export const getAllJobsApi = async(search) =>{
    return await commonApi('GET',`/all-jobs?search=${search}`)
}

// api to delete a job by admin
export const deleteAJobApi = async(id) => {
    return await commonApi('DELETE',`/delete-job/${id}`)
}

//api to apply for a job
export const addApplicationApi  = async (reqHeader,reqBody) => {
    return await commonApi('POST',`/apply-job`,reqBody,reqHeader);
}

//api to get all the applications from the users

export const getAllApplicationsApi = async() => {
    return await commonApi('GET',`/all-application`)
}

//api to update the profile in the backend
export const updateProfileApi = async(reqBody , reqHeader , user ) => {
    if(user)
        return await commonApi('PUT',`/user-profile-update`,reqBody,reqHeader)
    return await commonApi('PUT', `/admin-profile-update`, reqBody, reqHeader )
}

export const getAllUserBroughtBookApi = async(reqHeader) => {
    return await commonApi('GET', `/user-brought-books`, '', reqHeader)
}

export const getAllUserBooksApi  = async(reqHeader) => {
    return await commonApi ('GET',`/user-books`, '', reqHeader)
}

export const deleteUserBookApi = async(id ) => {
    return await commonApi ('DELETE',`/delete-user-books/${id}`,'','')
}

export const makePaymentApi = async(reqHeader, reqBody) => {
    return await commonApi('PUT',`/make-payment`,reqBody,reqHeader)
}