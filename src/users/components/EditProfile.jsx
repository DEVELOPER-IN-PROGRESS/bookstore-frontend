import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState ,useContext , useEffect} from 'react'
import { adminProfileContext } from '../../context/contextShare'
import {updateProfileApi} from '../../../services/allApi'
import { ToastContainer , toast} from 'react-toastify'
import { serverUrl } from '../../../services/serverurl'

function EditProfile({profileUpdateStatus, setProfileUpdateStatus}) {
  /*
   TODO
   1) get user details from the session  ✅
   2) store details into state  ✅
   3) reset should reset values of last state from session ✅
   4) create api to update  ✅
   5) complete handleSubmit Function ✅
   6) create controller to check ✅
   7) add controller to route ✅
   8) update , useEffect on successful update (200 status) ✅
   9) update the session storage on 200 status ✅
   9) set the update states on fields after updating ✅
  */

  const [offcanvasStatus , setOffcanvasStatus] = useState(false)
  const [userDetails, setUserDetails] = useState({
      username:"", password:"",cpassword:"",bio:"", profile:""
    })
  ;
  const { token } = useContext(adminProfileContext)
  const [existingUserDetails , setExistingUserDetails] = useState({
    username:"", password:"",cpassword:"",bio:"", profile:""
  })
  const [imgPreview , setImgPreview] = useState("")
  const [updateStatus , setUpdateStatus] = useState(false)

  console.log(userDetails)

  useEffect(()=>{

      const user = JSON.parse(sessionStorage.getItem('existingUser'))
      console.log(sessionStorage.getItem('token'))
      console.log({user})
      if(user){
        const profilePic = user.profile? `${serverUrl}/uploads/${user.profile}`: user.profile

        setUserDetails({ username: user.username, password: user.password ,
        cpassword: user.password , bio : user.bio , profile: profilePic })
        setExistingUserDetails({ username: user.username, password: user.password ,
        cpassword: user.password , bio : user.bio , profile: profilePic })
      }
    // debugger
  },[updateStatus])

  const handleImage = (e) => {

    const newImage = e.target.files[0]
    console.log(newImage)

    setUserDetails({...userDetails,profile:newImage})

    const url = URL.createObjectURL(newImage)
    console.log(url)
    setImgPreview(url)
  }

  const handleReset = () => {
    setUserDetails({
        username: existingUserDetails.username,
        password: existingUserDetails.password ,
        cpassword: existingUserDetails.password ,
        bio : existingUserDetails.bio ,
        profile: existingUserDetails.profile
    })
  }

  const handleSubmit = async () => {
      const { username , password ,cpassword, profile ,bio } = userDetails
      console.log({ username , password ,cpassword, profile ,bio })

      if(!password || !username || !cpassword){
        toast.info('username and passwords cannot be blank')
      }
      else if(password != cpassword){
        toast.warning('passwords should match')
      }else{
        const reqHeader = {
          "Authorization": `Bearer ${token}`,
        }

        const reqBody = new FormData()
        for(let key in userDetails){
          reqBody.append(key , userDetails[key])
        }
        console.log(reqBody)
        const result = await updateProfileApi(reqBody, reqHeader,'user')
        console.log(result)

        if(result.status == 200 ){
            const user = result.data
            setExistingUserDetails({
              profile: `${serverUrl}/uploads/${user.profile}`,
              bio: user.bio,
              cpassword:user.password,
              username:user.username,
              password:user.password
            })

            const sessionUser = JSON.parse(sessionStorage.getItem('existingUser'))
            console.log(sessionUser)
            sessionStorage.setItem("existingUser",JSON.stringify({...sessionUser,
            username:user.username,bio:user.bio, profile:user.profile, password:user.password}))
            setUpdateStatus(!updateStatus)
            setProfileUpdateStatus(!profileUpdateStatus)
        }else{
          toast.error('something went wrong')
          handleReset();
        }
      }
  }

  return (
    <>
      <div>
          <button onClick={()=>{setOffcanvasStatus(!offcanvasStatus)}} className="text-white border border-white p-2 bg-blue-600
          hover:bg-white hover:text-blue-600 hover:bg-text-blue hover:border-blue-600">Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
      </div>
      {
      offcanvasStatus &&
      <div className="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full z-1" >
          <div className="h-full w-4/12 bg-white z-[100] top-0 left-0 overflow-y-auto" >

              <div className="bg-gray-900 p-3 flex justify-between">
                 <h3 className="bg-dark text-2xl capitalize text-white">Edit Profile</h3>
                  <FontAwesomeIcon onClick={()=>{setOffcanvasStatus(!offcanvasStatus)}}  icon={faXmark} className="fa-2x text-white" />
              </div>
              <div className="mb-3 flex justify-center items-center w-full mt-10">
                <label htmlFor="fileupload" className='relative'>
                  <input id="fileupload" onChange={(e)=>{handleImage(e)}} placeholder='Category' type="file" className="hidden" />
                  <img src={ imgPreview? `${imgPreview}`
                    :
                    existingUserDetails.profile? `${existingUserDetails.profile}`
                    // :
                    // imgPreview? `${imgPreview}`
                    : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  //   userDetails.profile? `${imgPreview}` :
                  //  existingUserDetails.profile? `${existingUserDetails.profile}`
                  //  :
                  // "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                }
                  alt="no image" className="w-[200px] h-[200px] rounded-[50%]" />
                <div className="bg-yellow-300 text-white p-2 rounded absolute right-[10px] bottom-0" style={{}}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                </label>
              </div>
              <div className="mb-3 mt-5 w-full px-5 flex flex-col gap-y-5 justify-center">
                <input type="text"
                 value={userDetails.username}
                placeholder='username' onChange={(e)=>{setUserDetails({...userDetails, username:e.target.value})}} className=' border border-gray-500 placeholder-gray-300 p-3' />

                <input type="password"
                 value={userDetails.password}
                placeholder='password' onChange={(e)=>{setUserDetails({...userDetails, password:e.target.value})}} className=' border border-gray-500 placeholder-gray-300 p-3' />

                <input type="password"
                 value={userDetails.cpassword}
                placeholder='confirm password' onChange={(e)=>{setUserDetails({...userDetails, cpassword:e.target.value})}} className=' border border-gray-500 placeholder-gray-300 p-3' />

                <textarea name="" row={3}
                 value={userDetails.bio}
                placeholder="bio" onChange={(e)=>{setUserDetails({...userDetails, bio:e.target.value})}} className="p-3 border border-gray-500 placeholder-gray-300"  id=""></textarea>

                <div className="flex justify-end">
                  <button onClick={handleReset} className='bg-yellow-600 border border-white hover:border-yellow-600 text-white hover:bg-white hover:text-yellow-600 uppercase p-3'>reset</button>
                  <button onClick={handleSubmit} className='ms-4 bg-green-600 border border-white hover:border-green-600 text-white hover:bg-white hover:text-green-600  uppercase p-3'>submit</button>
                </div>
              </div>
          </div>
          <ToastContainer theme="colored" position="top-center" autoClose={2000} />
      </div>
      }
    </>
  )
}

export default EditProfile
