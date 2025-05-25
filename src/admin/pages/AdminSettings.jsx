import React,{useEffect, useState , useContext} from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { toast , ToastContainer } from 'react-toastify' ;
import { updateProfileApi } from '../../../services/allApi';
import {serverUrl} from '../../../services/serverurl'
import { adminProfileContext } from '../../context/contextShare';


function AdminSettings() {
  const [token,setToken] = useState("")
  const [preview,setPreview ] = useState("")
  const [existingProfileImage , setExistingProfileImage] = useState("")
  const [updateStatus,setUpdateStatus ] = useState(false);
  const [adminDetails,setAdminDetails] = useState({
    username:"",
    password: "",
    cpassword: "",
    profile:"",
  })
  const { setAdminPicUpdateStatus } = useContext(adminProfileContext)
  // console.log(adminDetails)

  const handleReset = () => {
    if(sessionStorage.getItem("token")){
      const user = JSON.parse(sessionStorage.getItem('existingUser'))
      // as user contains the username and password key
      setAdminDetails({ ...user , cpassword: user.password })
      setExistingProfileImage(user.profile)
    }
    setPreview("")
  }

  const handleFileAdd = (e) =>{
    console.log(e.target.files[0])
    setAdminDetails({...adminDetails, profile:e.target.files[0]})

    if (e.target.files[0] != ""){
      const url = URL.createObjectURL(e.target.files[0])
      console.log(url)
      setPreview(url)
    }
  }

  const handleUpdate = async() => {
     const {username ,password , cpassword , profile } = adminDetails ;
     console.log(username ,password , cpassword , profile)
    // we are skipping the profile key down because the image may or maynot exist
     if(!username || !password || !cpassword ){
       toast.info('please add complete details')
     }
     else{

        const reqHeader = {
            "Authorization" : `Bearer ${token}`
        }

        if(password != cpassword){
          toast.warning('passwords must match')
        }else{
            if(preview){
              const reqBody = new FormData();

              for(let key in adminDetails){
                reqBody.append(key, adminDetails[key])
              }

              const result = await updateProfileApi(reqBody, reqHeader)
              console.log(result)

              if(result.status == 200){
                toast.success("profile updation sucessful")
                  sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                setUpdateStatus(!updateStatus)
                setAdminPicUpdateStatus(!updateStatus)
              }else{
                toast.error('something went wrong')
                // handleReset();
                setUpdateStatus(!updateStatus)
                setAdminPicUpdateStatus(!updateStatus)
              }

            }else{
              const result = await updateProfileApi({
                username, password , profile: existingProfileImage
              },reqHeader)
              console.log(result)
              if(result.status == 200){
                toast.success("profile updation sucessful")
                  sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                setUpdateStatus(!updateStatus)
              }else{
                toast.error('something went wrong')
                // handleReset();
                setUpdateStatus(!updateStatus)
              }
            }
        }
     }
  }

  useEffect(()=>{
    const tok = sessionStorage.getItem("token")
    if(tok){
      setToken(tok)
      const user = JSON.parse(sessionStorage.getItem('existingUser'))
      // as user contains the username and password key
      setAdminDetails({ ...user , cpassword: user.password })
      setExistingProfileImage(user.profile)
    }
  },[updateStatus])

  return (
    <>
    <AdminHeader />
        <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />

            <div className="p-2">
               <h1 className="text-center text-dark text-3xl capitalize my-4">Admin Settings</h1>

               <div className="flex flex-col gap-y-4 md:grid grid-cols-2 p-2">
                  <div className="p-2 block1 text-center md:text-start">
                      <p className="text-justify">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere excepturi alias quibusdam voluptas consequatur dignissimos architecto, magni eaque ipsum doloremque libero, fugiat ea cumque, totam labore quod atque quae.
                      </p>

                      <p className="text-center text-justify mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum laboriosam officia provident culpa aut pariatur, vero necessitatibus amet quia numquam, dolorum quasi vel minus enim quibusdam doloremque illum ab.
                      </p>
                  </div>
                  <div className="p-2 block2 text-center md:text-start">
                      <div className="p-2 md:px-5 bg-blue-100 rounded rounded-4 flex flex-col">
                          <div className="mb-3 flex justify-center items-center w-full mt-10">
                            <label htmlFor="fileupload" className='relative'>
                              <input id="fileupload" onChange={(e)=>{handleFileAdd(e)}} placeholder='Category' type="file" className="hidden" />

                              {
                                existingProfileImage == ""?
                                  <img src={ preview?preview:"https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" } alt="no image" className="w-[100px] h-[100px] rounded-[50%]" />
                                  :
                                  <img src={ preview?preview:`${serverUrl}/uploads/${existingProfileImage}` } alt="no image" className="w-[100px] h-[100px] rounded-[50%]" />
                              }
                              <div className="bg-yellow-300 text-white p-2 rounded absolute right-[10px] bottom-[-5px]" style={{}}>
                                  <FontAwesomeIcon icon={faPen} />
                              </div>
                            </label>
                          </div>

                          <div className="mb-3">
                            <input type="text" value={adminDetails.username} placeholder="Username"  onChange={(e)=>{setAdminDetails({...adminDetails, username:e.target.value})}} className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />

                            <input type="password" value={adminDetails.password} placeholder="password"  onChange={(e)=>{setAdminDetails({...adminDetails, password:e.target.value})}} className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />

                            <input type="password" value={adminDetails.cpassword} placeholder="Confirm Password"  onChange={(e)=>{setAdminDetails({...adminDetails, cpassword:e.target.value})}} className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />
                          </div>

                          <div className="py-3 flex justify-between">
                                <button type="button" onClick={handleReset} className="w-[48%] rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border border-transparent hover:border-yellow-600 hover:text-yellow-600 ">Reset</button>
                                <button type="button" onClick={handleUpdate} className="w-[48%] rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-inset  border-transparenthover:bg-white hover:border-green-500 hover:text-green-500 ">Update
                                </button>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    <Footer />
    </>
  )
}

export default AdminSettings