import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'

function EditProfile() {
  const [offcanvasStatus , setOffcanvasStatus] = useState(false)
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
                  <input id="fileupload" placeholder='Category' type="file" className="hidden" />
                  <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="no image" className="w-[200px] h-[200px] rounded-[50%]" />
                <div className="bg-yellow-300 text-white p-2 rounded absolute right-[10px] bottom-0" style={{}}>
                    <FontAwesomeIcon icon={faPen} />
                </div>
                </label>
              </div>
              <div className="mb-3 mt-5 w-full px-5 flex flex-col gap-y-5 justify-center">
                <input type="text" placeholder='username' className=' border border-gray-500 placeholder-gray-300 p-3' />

                <input type="password" placeholder='password' className=' border border-gray-500 placeholder-gray-300 p-3' />

                <input type="password" placeholder='confirm password' className=' border border-gray-500 placeholder-gray-300 p-3' />

                <textarea name="" row={3} placeholder="bio" className="p-3 border border-gray-500 placeholder-gray-300"  id=""></textarea>

                <div className="flex justify-end">
                  <button className='bg-yellow-600 border border-white hover:border-yellow-600 text-white hover:bg-white hover:text-yellow-600 uppercase p-3'>edit</button>
                  <button className='ms-4 bg-green-600 border border-white hover:border-green-600 text-white hover:bg-white hover:text-green-600  uppercase p-3'>submit</button>
                </div>
              </div>
          </div>
      </div>
      }
    </>
  )
}

export default EditProfile
