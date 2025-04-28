import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function AdminSettings() {
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
                              <input id="fileupload" placeholder='Category' type="file" className="hidden" />
                              <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="no image" className="w-[100px] h-[100px] rounded-[50%]" />
                            <div className="bg-yellow-300 text-white p-2 rounded absolute right-[10px] bottom-[-5px]" style={{}}>
                                <FontAwesomeIcon icon={faPen} />
                            </div>
                            </label>
                          </div>

                          <div className="mb-3">
                            <input type="text" placeholder="Username" className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />

                            <input type="password" placeholder="password" className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />

                            <input type="password" placeholder="Confirm Password" className="mt-4 bg-white p-2 border border-0 rounded rounded-3 placeholder-gray-400 w-full" />
                          </div>

                          <div className="py-3 flex justify-between">
                                <button type="button" className="w-[48%] rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border border-transparent hover:border-yellow-600 hover:text-yellow-600 ">Reset</button>
                                <button type="button" className="w-[48%] rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-inset  border-transparenthover:bg-white hover:border-green-500 hover:text-green-500 ">Update
                                </button>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default AdminSettings