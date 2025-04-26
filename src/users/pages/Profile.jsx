import React,{useState} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'

function Profile() {
  const [sellstatus , setSellstatus] = useState(true);
  const [bookstatus , setBookstatus] = useState(false);
  const [purchasestatus , setPurchasestatus] = useState(false);

  return (
    <>
      <Header />
      <div className=' w-full bg-gray-900' style={{ height: '200px' }}></div>
            <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3 flex justify-center items-center'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
            </div>
        <div>

        <div className='flex justify-between px-25 mt-5'>
            <p className='flex justify-center items-center'>
                <span className='text-3xl '>Johns Joseph </span>
                <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-3'/>
            </p>
            <EditProfile/>
        </div>

        <p className="text-center text-2xl"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae reiciendis modi beatae odio aperiam, sapiente fugit reprehenderit illum culpa, quaerat, nostrum accusantium. Libero harum, officia odit saepe in autem!
        </p>

        <div className="flex justify-center items-center my-10 md:px-40">
            <p onClick={()=>{setBookstatus(true); setSellstatus(false); setPurchasestatus(false)}} className={ `${sellstatus? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded ' : 'p-4 text-black border-b border-gray-200' }  cursor-pointer `} >sell book  </p>


            <p onClick={()=>{setBookstatus(false); setSellstatus(true); setPurchasestatus(false)}} className={ `${bookstatus? 'p-4 text-black border-b border-gray-200 '
            :'p-4 text-black border-b border-gray-200 '
            } cursor-pointer` }> sold hisory </p>

            <p onClick={()=>{setBookstatus(false); setSellstatus(false); setPurchasestatus(true)}} className={ `${purchasestatus}? 'p-4 text-black border-b border-gray-200 ':'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded' cursor-pointer`} >
              Purchase  history
              </p>

        </div>

        {
          sellstatus &&
          <div>
            <div className="common-container mx-auto lg:w-[1000px] bg-gray-200 p-5">
                  Book Details
                <div className="grid grid-cols-2 mt-5 w-full">
                      <div className="pe-3">
                        <div className="mb-3">
                            <input placeholder='title' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Author' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='No of Pages' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Image Url' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Price' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Discount Price' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <textarea placeholder='Abstract' rows={5} type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded"></textarea>
                        </div>

                      </div>

                      <div className="ps-3">
                        <div className="mb-3">
                            <input placeholder='Publisher' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Language' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='ISBN' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Category' type="text" className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3 flex justify-center items-center w-full mt-10">
                          <label htmlFor="fileupload">
                            <input id="fileupload" placeholder='Category' type="file" className="hidden" />
                            <img src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg" alt="no image" className="w-[200px] h-[200px] rounded-[50%]" />
                            </label>
                        </div>
                        <div className="flex justify-center items-center w-full">
                          <img src="https://m.media-amazon.com/images/I/51071nF0pTL._SY522_.jpg" alt="" className="w-[70px]"/>
                            <FontAwesomeIcon icon={faSquarePlus} className="fa-2x shadow ms-3 text-gray-400 "/>
                        </div>

                      </div>
                </div>

                <div className=" px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6">
                  <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-red-400 sm:mt-0 sm:w-auto">Reset
                  </button>

                    <button type="button" className="mt-3 md:mt-0 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border hover:border-green-500 hover:text-green-500 sm:ml-3 sm:w-auto">Submit</button>

            </div>
            </div>
          </div>
        }
        {
          bookstatus &&

          <div className="bg-gray-200 p-4 rounded  mx-auto lg:w-[1000px]">
              <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr]">

                  <div className="px-4">
                    <h1 className="text-2xl capitalize">The book thief</h1>
                    <h2 className="title text-1xl capitalize">marcus zusak</h2>
                    <h3 className="text-black">
                    The Book Thief is a historical fiction novel by the Australian author Markus Zusak, set in Nazi Germany during World War II. Published in 2005, The Book Thief became an international bestseller and was translated into 63 languages and sold 17 million copies. It was adapted into the 2013 feature film, The Book Thief
                    </h3>
                  </div>

                  <div>
                    <img src="https://m.media-amazon.com/images/I/91ndEtx1uWL._AC_UF894,1000_QL80_.jpg" alt="no image" className="" />
                  </div>
              </div>

              <div className="flex items-center w-full justify-between mt-5">
                <div className="flex">
                   <img src="https://i.pinimg.com/736x/06/19/87/06198767cf5f2b1f6ab40fb66cea9737.jpg" alt="book status" className="w-[40px] " />
                   <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="book status" className="w-[40px] " />
                   <img src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="book status" className="w-[40px] " />
                </div>
                <button className='p-2 bg-red-600 rounded rounded-5 text-white hover:bg-white hover:text-red-600 border hover:border-red-600'>Delete</button>
              </div>
          </div>
        }
        {
          purchasestatus &&  <div>purchase status</div>
        }

        </div>
      <Footer />
    </>
  )
}

export default Profile
