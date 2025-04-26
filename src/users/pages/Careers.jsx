import React, {useState} from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  const [modalStatus , setModalStatus] = useState(false)
  return (
    <>
     <Header/>
      <div className="flex justfify-center items-center flex-col  px-5 md:px-10">
            <h1 className="my-4 text-2xl font-medium">
                Careers
            </h1>
            <p className="text-dark text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit officia? Necessitatibus minus fugiat voluptate velit voluptatibus quidem dicta, distinctio deleniti quos, id deserunt enim. Aliquam doloribus labore molestiae veritatis!
            </p>
      </div>

      <div className="p-5 md:p-10">
         <h1 className="text-2xl">Current Openings </h1>
         <div className="mx-auto my-5 w-[50%] flex items-stretch h-[50px] justify-center">
                    <input
                     type="text" placeholder='Search By Title'
                     className="p-2 w-full placeholder-gray-600 w-full bg-white border-radius-0 border border-dark  search"
                    />
                    <button className="bg-green-500 px-2 w-[150px] md:w-[200px] text-white border hover:text-green-500 hover:bg-white">
                        Search
                    </button>
         </div>

         <div className="p-4 md:px-20 md:py-5">
            <div className="shadow p-4 border-grey-400">
                <div className="flex flex-col md:grid grid-cols-[8fr_1fr] py-5">
                    <div>
                        <h2 className="">Job Title</h2>
                        <hr />
                        <p className="mt-3">
                            <FontAwesomeIcon icon={faLocationDot} />
                            Kochi
                        </p>
                        <p className="mt-3">
                            Job Type:
                        </p>
                        <p className="mt-3">Salary :</p>
                        <p className="mt-3"> Qualification :</p>
                        <p className="mt-3"> Experience </p>
                        <p>Description:  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio debitis ut reprehenderit, ea assumenda ipsa nemo quibusdam. Commodi soluta repellendus fuga facilis laborum necessitatibus dolore eveniet sapiente quod! Delectus!</p>
                    </div>
                    <div>
                        <button onClick={()=>{setModalStatus(!modalStatus)}} className="ms-0 mt-4 md:ms-2 md:mt-0 bg-blue-900 border hover:border-blue-900 text-white hover:bg-white hover:text-blue-900 p-4">
                            Apply
                            <FontAwesomeIcon className="ms-2" icon={faArrowUpRightFromSquare} />
                        </button>
                    </div>
                </div>
            </div>
         </div>

      </div>

    {
      modalStatus &&

    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">


    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex md:min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

      { /* Title */ }
        <div className="bg-gray-900 px-4 py-3 flex flex-row items-center justify-between sm:px-6">
        <h4 className="text-white inline md:block md:text-2xl md:p-4 capitalize">application form </h4>
          <FontAwesomeIcon onClick={()=>{setModalStatus(!modalStatus)}} icon={faXmark} className="text-white fa-2x" />
        </div>

      { /* Body of the modal */}
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="grid grid-cols-2">
              <div className="p-3">
                <div className="mb-3">
                    <input type="text" placeholder="Full Name" className="p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />

                    <input type="text" placeholder="Email id" className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                </div>
              </div>
              <div className="p-3">
                <div className="mb-3">
                <input type="text" placeholder="Cover Letter" className="p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />

                <input type="text" placeholder="Qualification" className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                </div>
              </div>
          </div>
          <div className="p-3">
            <textarea name="" className="border border-gray-400 rounded rounded-3 w-full" row={6} id=""></textarea>
          </div>

          <div className="mb-3 px-3 w-full">
            <p className="text-gray-400">Resume</p>
            <input type="file" placeholder="Choose File" className="border border-gray-400 file:p-2 file:bg-gray-400 rounded placeholder-gray-500 w-full file:text-white" />
          </div>
      </div>
        { /* modal footer */ }
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border hover:border-green-500 hover:text-green-500 sm:ml-3 sm:w-auto">Submit</button>
        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    }

     <Footer/>
    </>
  )
}

export default Careers

