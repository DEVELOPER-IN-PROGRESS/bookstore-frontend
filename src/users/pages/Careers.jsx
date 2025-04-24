import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Careers() {
  return (
    <>
     <Header/>
      <div className="flex justfify-center items-center flex-col px-10 md:px-40">
            <h1 className="my-4 text-2xl font-medium">
                Careers
            </h1>
            <p className="text-dark text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, reprehenderit officia? Necessitatibus minus fugiat voluptate velit voluptatibus quidem dicta, distinctio deleniti quos, id deserunt enim. Aliquam doloribus labore molestiae veritatis!
            </p>
      </div>

      <div className="p-10">
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

         <div className="px-20 py-5">
            <div className="shadow p-4 border-grey-400">
                <div className="grid grid-cols-[8fr_1fr] py-5">
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
                        <button className="ms-2 bg-blue-900 border hover:border-blue-900 text-white hover:bg-white hover:text-blue-900 p-4">
                            Apply
                            <FontAwesomeIcon className="ms-2" icon={faArrowUpRightFromSquare} />
                        </button>
                    </div>
                </div>
            </div>
         </div>

      </div>
     <Footer/>
    </>
  )
}

export default Careers

