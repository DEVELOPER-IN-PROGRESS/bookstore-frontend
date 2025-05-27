import React, { useState , useEffect  } from 'react'
import Header from '../components/Header'
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link , useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import { ViewSingleBookApi } from '../../../services/allApi'
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'
import { serverUrl } from '../../../services/serverurl'
import { makePaymentApi } from '../../../services/allApi'
import { loadStripe } from '@stripe/stripe-js'
import {toast, ToastContainer} from 'react-toastify'

function Viewbook() {
    const { id } = useParams()
    const [bookphoto, setBookPhoto]= useState(false)
    const [viewbookDetails , setViewBookDetails] = useState({})
    const [token ,setToken] = useState('')

    const str_pk = '' 

    const viewABook = async(id) => {
       const result  = await ViewSingleBookApi(id);
      //  console.log(result)
       setViewBookDetails(result.data)
    }

    const makePayment = async()=>{
      console.log(viewbookDetails)

      const stripe = await loadStripe(str_pk)
      // console.log(viewbookDetails)

      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const reqBody = {
        bookDetails: viewbookDetails
      }

      const result = await makePaymentApi(reqHeader,reqBody)
      console.log(result)

      const { sessionId, existingBook } = result.data;
      console.log(sessionId)
      console.log(existingBook)

      const response = stripe.redirectToCheckout({
         sessionId: sessionId,
      });
      if(response.error){
          toast.error('something went wrong with the payment')
      }

    }

 useEffect(()=>{
   viewABook(id)
   if(sessionStorage.getItem('token')){
      const token = sessionStorage.getItem('token')
      setToken(token)
   }
 },[])

  return (
    <>
    <Header/>
    <div className=' mb-8 p-5 md:p-10 m-3 md:m-5 border border-gray-300 shadow-2xl rounded'>
        <div className='md:grid grid-cols-[1fr_3fr] '>

                <div className='mb-8 md:mb-0 cursor-pointer'>
                    <img src={ viewbookDetails?.imageUrl || "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg" } alt={viewbookDetails?.title} className='w-full h-full' />
                </div>


            <div className='md:px-8 relative'>
                <h1 className='font-bold text-md md:text-2xl text-center mb-2 md:mb-3'>{viewbookDetails?.title}</h1>
                <p className='text-blue-500 text-center'> { viewbookDetails?.author } </p>

                <div className='md:flex space-y-3 md:space-y-0 justify-between items-center gap-5 mt-13'>
                    <div className='flex flex-col  space-y-3'>
                        <p className='font-bold '>Publisher : { viewbookDetails?.publisher } </p>
                         <p className='font-bold '>Seller Mail : { viewbookDetails?.userMail }</p>

                    </div>

                     <div className='flex flex-col space-y-3'>
                        <p className='font-bold '> Language : { viewbookDetails?.language }</p>
                         <p className='font-bold '>Real Price : ${ viewbookDetails?.dprice } </p>

                    </div>

                     <div className='flex flex-col space-y-3'>
                        <p className='font-bold '>No. of pages : { viewbookDetails?.noofpages }</p>
                         <p className='font-bold '>ISBN : { viewbookDetails?.isbn }</p>

                    </div>
                </div>

                <div className='mt-8 md:mt-15 font-bold  text-justify'>{ viewbookDetails?.abstract }</div>

                <div className='flex justify-between md:justify-end gap-5 mt-8 md:mt-35 items-center'>

                <Link to="/all-books">
                <button type="button" className='px-8 md:px-5 py-3 text-white bg-blue-500 rounded'>
                    <FontAwesomeIcon icon={faBackward} className='me-3' />
                    Back
                </button>
                </Link>

                <button type="button" onClick={makePayment} className=' px-8 md:px-5 py-3 text-white bg-green-600 rounded'>Buy { viewbookDetails?.dprice }</button>
            </div>
            <div  onClick={()=>setBookPhoto(!bookphoto)} className='absolute top-0 text-gray-300 text-xl right-2'>
              <FontAwesomeIcon icon={faEye} />
            </div>

            </div>


        </div>

    </div>

    {/* book  */}

    {bookphoto && (
  <div className="fixed top-25 left-0 w-full  flex items-center justify-center ">
    <div className="bg-white w-110 rounded shadow-lg relative">
      <div className="flex justify-between px-4 py-5 bg-gray-900 text-white rounded">
        <h1>Book Photo</h1>
        <button onClick={() => setBookPhoto(!bookphoto)} className="text-gray-900 bg-white px-3 rounded">X</button>
      </div>
      <div className="py-5 px-8">
        <div className="text-blue-500 flex gap-4 items-start justify-center mb-4">
          <FontAwesomeIcon icon={faCamera} />
          <p>Camera click of the book in the hand of seller</p>
        </div>
        <div className='w-65 mx-auto p-8'>
          {
            viewbookDetails?.uploadedImg.map( image => (
                <img key={image}
                src={`${serverUrl}/uploads/${image}`}
                alt="Book "
                className=" w-full  "
              />
            ))
          }
        </div>
      </div>
    </div>
  </div>
)}
    <ToastContainer theme='colored' position='top-center' autoClose={1400} />
    <Footer/>

    </>
  )
}

export default Viewbook