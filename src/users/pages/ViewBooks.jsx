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

function Viewbook() {
    const { id } = useParams()
    const [bookphoto, setBookPhoto]= useState(false)
    const [viewbookDetails , setViewBookDetails] = useState({})

    const viewABook = async(id) => {
       const result  = await ViewSingleBookApi(id);
       console.log(result)
       setViewBookDetails(result.data)
    }

 useEffect(()=>{
   viewABook(id)
 },[])
console.log(viewbookDetails)
  return (
    <>
    <Header/>
    <div className=' mb-8 p-5 md:p-10 m-3 md:m-5 border border-gray-300 shadow-2xl rounded'>
        <div className='md:grid grid-cols-[1fr_3fr] '>

                <div className='mb-8 md:mb-0 cursor-pointer'>
                    <img src={ viewbookDetails?.imageUrl || "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"} alt={viewbookDetails?.title} className='w-full h-full' />
                </div>


            <div className='md:px-8 relative'>
                <h1 className='font-bold text-md md:text-2xl text-center mb-2 md:mb-3'>{viewbookDetails?.title}</h1>
                <p className='text-blue-500 text-center'>Lorem ipsum dolor </p>

                <div className='md:flex space-y-3 md:space-y-0 justify-between items-center gap-5 mt-13'>
                    <div className='flex flex-col  space-y-3'>
                        <p className='font-bold '>Publisher : Penguin Life</p>
                         <p className='font-bold '>Seller Mail : max@gmail.com</p>

                    </div>

                     <div className='flex flex-col space-y-3'>
                        <p className='font-bold '> Language : English</p>
                         <p className='font-bold '>Real Price : $15</p>

                    </div>

                     <div className='flex flex-col space-y-3'>
                        <p className='font-bold '>No. of pages : 208</p>
                         <p className='font-bold '>ISBN : 978-0143130727</p>

                    </div>
                </div>

                <div className='mt-8 md:mt-15 font-bold  text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem velit dolore veniam et fuga eius unde aspernatur facilis assumenda ratione! Deserunt doloremque voluptates hic minima adipisci cupiditate atque necessitatibus repudiandae Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos quia officia exercitationem incidunt maiores assumenda excepturi? Dignissimos, voluptatem itaque sapiente dolorum saepe cupiditate dolorem recusandae tenetur, nemo enim dolore! Ratione..</div>

                <div className='flex justify-between md:justify-end gap-5 mt-8 md:mt-35 items-center'>

                <Link to="/all-books">
                <button type="button" className='px-8 md:px-5 py-3 text-white bg-blue-500 rounded'>
                    <FontAwesomeIcon icon={faBackward} className='me-3' />
                    Back
                </button>
                </Link>

                <button className=' px-8 md:px-5 py-3 text-white bg-green-600 rounded'>Buy ₹399</button>
            </div>
            <div  onClick={()=>setBookPhoto(!bookphoto)} className='absolute top-0 text-gray-300 text-xl right-2'><FontAwesomeIcon icon={faEye} /></div>

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

    <Footer/>

    </>
  )
}

export default Viewbook