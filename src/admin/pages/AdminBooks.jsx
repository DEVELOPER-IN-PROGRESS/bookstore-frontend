import React, {useState} from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
function AdminBooks() {
   const [tab , setTab] = useState('book')

   const handleTab = (tab) => {
      setTab(tab)
    }
  return (
    <>
    <AdminHeader />
       <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />

            <div className="p-4  md:px-4">
                <h1 className="text-center text-dark text-3xl capitalize my-4">
                    All books
                </h1>

                <div className='flex justify-center items-center my-5'>
                      <p id="book" onClick={(e) => { handleTab('book') }} className={ tab == 'book' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>
                           book list
                      </p>
                      <p id="users" onClick={(e) => { handleTab('users') }} className={ tab == 'users' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} >
                        users
                      </p>
                </div>

                {/* cards */}
                <div className="flex flex-col gap-y-5 md:grid grid-cols-3 md:gap-x-5 md:gap-y-[50px]">

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfwege3252g25m242m235
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            Shuri
                          </h3>

                          <p className="useremail">
                            shuri@wakanda.com
                          </p>
                        </div>

                    </div>
                  </div>

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfweg2535njfe32ji234h
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            baba Yaga
                          </h3>

                          <p className="useremail">
                            byaga@osaka.ja
                          </p>
                        </div>

                    </div>
                  </div>

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfweg2535njfe32ji234h
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            John wick
                          </h3>

                          <p className="useremail">
                            johnw@continental-osaka.ja
                          </p>
                        </div>

                    </div>
                  </div>

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfwege3252g25m242m235
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            Shuri
                          </h3>

                          <p className="useremail">
                            shuri@wakanda.com
                          </p>
                        </div>

                    </div>
                  </div>

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfweg2535njfe32ji234h
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            baba Yaga
                          </h3>

                          <p className="useremail">
                            byaga@osaka.ja
                          </p>
                        </div>

                    </div>
                  </div>

                  <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: 67db01gfweg2535njfe32ji234h
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src="https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                        <div className="ms-2 md:ms-5 flex flex-col">
                          <h3 className="text-blue-800 capitalize">
                            John wick
                          </h3>

                          <p className="useremail">
                            johnw@continental-osaka.ja
                          </p>
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

export default AdminBooks