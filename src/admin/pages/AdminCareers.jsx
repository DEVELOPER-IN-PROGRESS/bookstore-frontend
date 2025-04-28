import React,{useState} from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function AdminCareers() {
  const [tab , setTab] = useState('job')

  const handleTab = (e,tab) => {
    setTab(tab)
  }
  return (
    <>
    <AdminHeader />
       <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />

            <div className="p-4  md:px-4">
                <h1 className="text-center text-dark text-3xl capitalize my-4">
                    careers
                </h1>

                <div className='flex justify-center items-center my-5'>
                      <p id="job" onClick={(e) => { handleTab(e,'job') }} className={ tab == 'job' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>
                           Job Post
                      </p>
                      <p id="applicant" onClick={(e) => { handleTab(e,'applicant') }} className={ tab == 'applicant' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} >
                        View Applicant
                      </p>
                </div>

                <div className="p-2 md:p-10">

                         <div className="mx-auto my-5 flex  justify-between">

                            <div className="flex items-stretch h-[50px] justify-center">
                                <input
                              type="text" placeholder='Job Title'
                              className="p-2 w-full placeholder-gray-600 w-[60%] md:w-full bg-white border-radius-0 border border-gray-300  search"
                              />
                              <button className="bg-green-500 px-2 w-[150px] md:w-[200px] text-white border hover:text-green-500 hover:bg-white">
                                  Search
                              </button>
                            </div>

                            <div className="addjob h-[50px]">
                              <button className="p-2 px-5 h-full capitalize bg-white border text-blue-900 hover:text-white border-blue-900 hover:bg-blue-900">
                                 add job
                              </button>
                            </div>

                         </div>

                         <div className="p-4 md:px-0 md:py-5">
                            <div className="shadow-2xl p-4 border-grey-400">
                                <div className="flex flex-col py-5">
                                    <div>

                                      <div className="flex justify-between gap-x-4 items-center">
                                        <h2 className=" text-underline">Job Title</h2>

                                        <button  className="bg-red-600 border hover:border-red-600 text-white hover:bg-white hover:text-red-500 p-4">
                                            delete
                                            <FontAwesomeIcon className="ms-2" icon={faTrashCan} />
                                        </button>

                                      </div>

                                        <p className="mt-3">
                                            <FontAwesomeIcon className='me-3 text-sky-500' icon={faLocationDot} />
                                            Location
                                        </p>
                                        <p className="mt-3">
                                            Job Type: System Admin
                                        </p>
                                        <p className="mt-3">Salary : 1156000 CTC</p>
                                        <p className="mt-3"> Qualification :</p>
                                        <p className="mt-3"> Experience </p>
                                        <p>Description:  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio debitis ut reprehenderit, ea assumenda ipsa nemo quibusdam. Commodi soluta repellendus fuga facilis laborum necessitatibus dolore eveniet sapiente quod! Delectus!</p>
                                    </div>

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
export default AdminCareers