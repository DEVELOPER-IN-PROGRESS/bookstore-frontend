import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminHeader() {

  const navigate = useNavigate()

  const handleLogout = () =>{
     sessionStorage.removeItem("existingUser")
     sessionStorage.removeItem("token")
     setTimeout(() => {
       navigate('/')
     }, 900);
  }
  return (
    <>
    <div className="flex justify-between p-3 md:px-20 ">
      <div className="logo flex items-center justify-center">
      <img src="./logo.png" className="w-[30px]" alt='logo' />
      <h1 className='text-2xl md:hidden ms-3 font-medium '>Book Store</h1>
      </div>

      <button type="button" onClick={handleLogout} className="px-4 py-2 border border-black text-black rounded hover:bg-white hover:text-black">
        Logout
      <FontAwesomeIcon className="ms-2" icon={faPowerOff} />
      </button>
    </div>

    <div className="bg-gray-900 mb-0 p-4 ">
      <p className="text-center text-white">Hello Admin you are all good to go </p>
    </div>
    </>
  )
}

export default AdminHeader