import React, {useState ,useEffect} from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { getAllAdminBookApi } from '../../../services/allApi';
import { approveBookApi ,getAllUsersApi } from '../../../services/allApi';
import { toast , ToastContainer} from 'react-toastify'

function AdminBooks() {
  const [bookListStatus, setBookListStatus] = useState(true);
    const [usersStatus, setUsersStatus] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [adminBookDetails,setAdminBookDetails] = useState([]);
    const [token, settoken] = useState("");
    const [approveStatus,setApproveStatus] = useState(false)

    useEffect(()=>{
      if(sessionStorage.getItem("token")){
        const token = sessionStorage.getItem("token");
        settoken(token);
        if(bookListStatus){
          adminBooks(token);
        }else if(usersStatus){
           getallusers(token)
        }else{
          console.log('something went wrong')
        }
      }
    },[approveStatus,usersStatus]);

  const adminBooks = async(token)=>{
      const reqHeader = {"Authorization":`Bearer ${token}`};
      const result = await getAllAdminBookApi(reqHeader);
      setAdminBookDetails(result.data);
  }

  const getallusers = async(token) => {
    const reqHeader = {"Authorization":`Bearer ${token}`};
    const result = await getAllUsersApi(reqHeader)
    setUserDetails(result.data)
  }

    //approve book
  const approveBook = async (data)=>{
      const reqHeader = {"Authorization":`Bearer ${token}`};
      const result = await approveBookApi(data,reqHeader);
      if(result.status == 200){
        setApproveStatus(!approveStatus);
      }
      else{
        toast.error('something went wrong')
      }

  }

  return (
    <>
    <AdminHeader />
       <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />

          <div>
          <div>
            <h1 className='text-center mt-5 text-2xl'>All Books</h1>
          </div>
          <div className='flex justify-center items-center my-5'>

            <p onClick={() => { setBookListStatus(true); setUsersStatus(false); }} className={ bookListStatus ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>Book List</p>

            <p onClick={() => { setBookListStatus(false); setUsersStatus(true); }} className={usersStatus ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} >Users</p>
          </div>

          {
           bookListStatus &&
           <div className="md:grid grid-cols-4">
            {
             adminBookDetails?.length>0?
             adminBookDetails?.map((item,index)=>
              <div className={`mt-2 p-5 md:px-10 shadow-2xl ${item.bookStatus && opacity-50}`} key={item._id}>
              <img src={item.imageurl} alt="no image" style={{ height: '300px', width: '100%' }} />
              <div className='flex justify-center items-center flex-col mt-3'>
                <p className='text-blue-500'>{item.author}</p>
                <h4>{item.title.slice(0,20)}</h4>
                <p className='text-blue-500'>{`$${item.dprice}`}</p>
                {item.status == 'pending' && <button type='button' className='px-5 py-1 mt-3 bg-blue-900 text-white border hover:border-blue-900 hover:text-blue-900 hover:bg-white w-full' onClick={()=>approveBook(item)}> Approve</button>}
                {item.status == "approved" && <img src='https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Tick_Mark_Circle-512.png' alt="no image" style={{ height: '50px', width: '50px' }} />}
              </div>
            </div>)
            :
              <p>no books</p>
            }

          </div>
          }

          {
            usersStatus &&
            <div className="flex flex-col gap-y-5 md:grid grid-cols-3 md:gap-x-5 md:gap-y-[50px]">
                  {
                    userDetails?.map( (user,idx) => (
                      <div className="detail bg-gray-200 p-2 md:p-5 rounded rounded-[10px]">
                        <p className="text-sm text-red-500 text-start uppercase">
                          id: {user._id}
                        </p>

                        <div className="flex gap-x-3 mt-5">

                        <img
                        src={`${user.profile || "https://i0.wp.com/passivesills.com/wp-content/uploads/2020/06/User-Icon-Grey.png"}`}
                        alt="user photo"
                        className="profile w-[50px] h-[50px] rounded-[50%]" />

                      <div className="ms-2 md:ms-5 flex flex-col">
                        <h3 className="text-blue-800 capitalize">
                           {user.username}
                        </h3>

                        <p className="useremail">
                          {user.email}
                        </p>
                      </div>

                  </div>
                      </div>
                    ))
                  }
            </div>
          }
          </div>
        </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    <Footer />
    </>
  )
}

export default AdminBooks