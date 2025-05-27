import {useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import EditProfile from '../components/EditProfile'
import { deleteUserBookApi, getAllUserBooksApi, getAllUserBroughtBookApi, uploadBookApi } from '../../../services/allApi'
import {toast , ToastContainer } from 'react-toastify'
import { serverUrl } from '../../../services/serverurl'


function Profile() {
  const [sellstatus , setSellstatus] = useState(true);
  const [bookstatus , setBookstatus] = useState(false);
  const [purchasestatus , setPurchasestatus] = useState(false);
  const [bookDetails , setBookDetails] = useState({
    title:"",
    author:"",
    noofpages:"",
    imageUrl:"",
    price :"",
    dprice:"",
    abstract:"",
    publisher:"",
    language:"",
    isbn:"",
    category:"",
    uploadedImg: [],
  });

  const [imagePreview, setImagePreview] = useState('')
  const [previewList  , setPreviewList] = useState([]);
  const [token,setToken] = useState("")
  const [userData, setUserData] = useState({
    username:"",
    profile:"",
    bio:""
  })
  const [profileUpdateStatus,setProfileUpdateStatus] = useState(false)
  // console.log(bookDetails)
  const [isOpen , setIsOpen]  = useState(false);
  const [userbooks, setUserBooks] = useState([])
  const [ userBrought, setUserBrought] = useState([])

  const handleUpload = (e) => {
    console.log(e)
    console.log(e.target.files[0])

    const fileArray = bookDetails.uploadedImg
    fileArray.push(e.target.files[0])

    const url  = URL.createObjectURL(e.target.files[0])
    console.log(url)
    setImagePreview(url)

    setBookDetails({...bookDetails,uploadedImg:fileArray})

    const previewArray = previewList
    previewArray.push(url)
    setPreviewList(previewArray)
  }

  const handleReset = () => {
    setPreviewList([])
    setBookDetails({
      title:"",
      author:"",
      noofpages:"",
      imageUrl:"",
      price :"",
      dprice:"",
      abstract:"",
      publisher:"",
      language:"",
      isbn:"",
      category:"",
      uploadedImg: [],
    })
  }

  const handleSubmit = async() => {
    const { title,  author,noofpages, imageUrl, price , dprice, abstract,
      publisher, language, isbn, category, uploadedImg } = bookDetails;

    if ( !title ||  !author || !noofpages || !imageUrl || !price  || !dprice || !abstract ||
      !publisher || !language || !isbn || !category || !uploadedImg.length ){
       toast.info('Please fill the fields completely')
    }else{
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      const reqBody = new FormData()

      for (let key in bookDetails) {
         if(key != 'uploadedImg'){
            reqBody.append(key,bookDetails[key])
         }else{
          // the "uploadedImages" key should exactly match what the multer middleware is expecting
          bookDetails.uploadedImg.forEach( item => reqBody.append("uploadedImages",item) )
         }
      }
      console.log(reqBody)
      const result = await uploadBookApi(reqHeader,reqBody)
      console.log(result)

      if(result.status ==401){

      }
    }
  }

  const getAllUserBroughtBook = async() => {
      const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

     const result = await getAllUserBroughtBookApi(reqHeader)
     console.log(result);
     if(result.status ==200){
       setUserBrought(result.data)
     }
  }

  const getallUserBook = async ()=>{
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }

     const result = await getAllUserBooksApi(reqHeader)
     console.log(result);
     if(result.status == 200){
        setUserBooks(result.data)
     }
  }

  const deleteBook = async(id) =>{
    const result = await deleteUserBookApi(id)
    console.log(result)
  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    // console.log(token)
    const user = JSON.parse(sessionStorage.getItem('existingUser'))
    if(user){
      //uploads folder
      const profilePic = user.profile? `${serverUrl}/uploads/${user.profile}`: user.profile
      setUserData({
        profile:  profilePic,
        username: user.username,
        bio: user.bio
      })
    }

  },[profileUpdateStatus])

  useEffect(()=>{
    if(bookstatus){
      getallUserBook()
    }
    else if(purchasestatus){
      getAllUserBroughtBook()
    }else{
      console.log('something went wrong')
      // toast.warning('something went wrong')
    }

  },[bookstatus])


  return (
    <>
      <Header />
      <div className=' w-full bg-gray-900' style={{ height: '200px' }}></div>
            <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3 flex justify-center items-center'>
                <img src={
                  userData.profile? userData.profile
                  :
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                   alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
            </div>
        <div>

        <div className='flex justify-between px-25 mt-5'>
            <p className='flex justify-center items-center'>
                <span className='text-3xl '> { userData.username } </span>
                <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-3'/>
            </p>
            <EditProfile profileUpdateStatus={profileUpdateStatus} setProfileUpdateStatus={setProfileUpdateStatus} />
        </div>

        <p className="px-2 lg:px-10 xl:px-20 text-justify text-2xl">
           { userData.bio } Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus fugit ullam officiis itaque delectus ducimus, quam ipsum esse fuga voluptas, dolore, quidem quibusdam asperiores sunt eligendi labore odio earum.
        </p>

        <div className="flex justify-center items-center my-10 md:px-40">
            <p onClick={()=>{setBookstatus(false); setSellstatus(true); setPurchasestatus(false)}} className={ `${sellstatus? 'p-4 text-blue-600 border-l border-t border-r border-gray-200 rounded ' : 'p-4 text-black border-b border-gray-200' }  cursor-pointer `} >sell book  </p>


            <p onClick={()=>{setBookstatus(true); setSellstatus(false); setPurchasestatus(false)}} className={ `${bookstatus? 'p-4 text-black border-b border-gray-200 '
            :'p-4 text-black border-b border-gray-200 '
            } cursor-pointer` }> book status </p>

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
                            <input placeholder='title' type="text" value={bookDetails.title} onChange={(e)=>setBookDetails({...bookDetails, title:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Author' type="text" value={bookDetails.author} onChange={(e)=>setBookDetails({...bookDetails, author:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='No of Pages' type="text" value={bookDetails.noofpages} onChange={(e)=>setBookDetails({...bookDetails,noofpages :e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Image Url' type="text" value={bookDetails.imageUrl} onChange={(e)=>setBookDetails({...bookDetails, imageUrl:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Price' type="text" value={bookDetails.price} onChange={(e)=>setBookDetails({...bookDetails, price:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Discount Price' type="text" value={bookDetails.dprice} onChange={(e)=>setBookDetails({...bookDetails, dprice:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <textarea placeholder='Abstract' rows={5} type="text" value={bookDetails.abstract} onChange={(e)=>setBookDetails({...bookDetails, abstract:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded"></textarea>
                        </div>

                      </div>

                      <div className="ps-3">
                        <div className="mb-3">
                            <input placeholder='Publisher' type="text" value={bookDetails.publisher} onChange={(e)=>setBookDetails({...bookDetails, publisher:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Language' type="text" value={bookDetails.language} onChange={(e)=>setBookDetails({...bookDetails, language:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='ISBN' type="text" value={bookDetails.isbn} onChange={(e)=>setBookDetails({...bookDetails, isbn:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3">
                            <input placeholder='Category' type="text" value={bookDetails.category} onChange={(e)=>setBookDetails({...bookDetails, category:e.target.value})} className="p-2 bg-white rounded placeholder-gray-500 w-full rounded" />
                        </div>

                        <div className="mb-3 flex justify-center items-center w-full mt-10">
                          {
                            !imagePreview?
                            <label htmlFor="fileupload">
                            <input id="fileupload" onChange={(e)=>{handleUpload(e)}} placeholder='Category' type="file" className="hidden" />
                            <img src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg" alt="no image" className="w-[200px] h-[200px] rounded-[50%]" />
                            </label>
                            :
                            <img src={imagePreview} alt="no image" className="w-[200px] h-[200px]" />
                            }
                        </div>

                        {
                          imagePreview
                           &&
                          <div className="flex justify-center items-center w-full">
                            {/* <div className='overflow-x-auto w-9/12 flex justify-center items-center'> */}
                              {
                                previewList?.map(  (url,idx) => (
                                  <img src={url} key={`previewimage-${idx}`} alt="no image" className="w-[70px] h-[70px] mx-2"/>
                                ))
                              }
                            {/* </div > */}



                            {
                            (imagePreview.length > 3)
                            &&
                            <label htmlFor="fileupload">
                            <input id="fileupload" onChange={(e)=>{handleUpload(e)}} placeholder='Category' type="file" className="hidden" />
                             <FontAwesomeIcon icon={faSquarePlus} className="fa-2x shadow ms-3 text-gray-400 "/>
                            {/* <img src="https://img.freepik.com/premium-vector/file-upload-vector-icon-design-illustration_1174953-75051.jpg" alt="no image" className="w-[70px] h-[70px] " /> */}
                            </label>

                            }

                          </div>
                        }

                      </div>
                </div>

                <div className=" px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6">
                  <button type="button" onClick={handleReset} className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 hover:text-red-400 sm:mt-0 sm:w-auto">Reset
                  </button>

                    <button type="button" onClick={handleSubmit} className="mt-3 md:mt-0 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border hover:border-green-500 hover:text-green-500 sm:ml-3 sm:w-auto">Submit</button>

            </div>
            </div>
          </div>
        }
        {
          bookstatus &&
            <div className="p-10 my-5 shadow rounded">
                {
                  userbooks?.length >0 ?
                  userbooks.map( item => (
                    <div key={item._id} className="bg-gray-200 p-4 rounded  mx-auto lg:w-[1000px] mb-4">
                      <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr]">

                          <div className="px-4">
                            <h1 className="text-2xl capitalize">{item?.title}</h1>
                            <h2 className="title text-1xl capitalize">{item?.author}</h2>
                            <h3 className="text-black">
                              {item?.abstract}
                            </h3>
                          </div>

                          <div>
                            <img src={item?.imageUrl} alt="no image" className="" />
                          </div>
                      </div>

                      <div className="flex items-center w-full justify-between mt-5">
                        <div className="flex">
                          {
                            item.status =="pending"?
                            <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="book status" className="w-[100px] " />
                            :item.status == 'approved'?
                            <img src="https://i.pinimg.com/736x/06/19/87/06198767cf5f2b1f6ab40fb66cea9737.jpg" alt="book status" className="w-[100px] " />
                            :
                            <img src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="book status" className="w-[100px] " />
                          }
                        </div>
                        <button type="button" onClick={()=>{deleteBook(item?._id)}} className='p-2 bg-red-600 rounded rounded-5 text-white hover:bg-white hover:text-red-600 border hover:border-red-600'>Delete</button>
                      </div>
                    </div>
                  ))
                  :
                  <div className="flex justify-center items-center flex-col">
                     <img src="https://img.freepik.com/premium-vector/vector-warning-sign-prohibited-from-carrying-books-stacking-books_550971-597.jpg"
                      alt="no books image" className="w-[120px]" />
                     <p className="text-red-600 text-2xl">
                       No Books Added
                     </p>
                  </div>
                }
            </div>
        }
        {
          purchasestatus &&
           <div className="p-10 my-20 shadow rounded">
                {
                  userBrought?.length?
                    userBrought?.map( item => (
                     <div key={item._id} className="bg-gray-200 p-4 rounded  mx-auto lg:w-[1000px] mb-4">
                      <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr]">

                          <div className="px-4">
                            <h1 className="text-2xl capitalize">{item?.title}</h1>
                            <h2 className="title text-1xl capitalize">{item?.author}</h2>
                            <h3 className="text-black">
                              {item?.abstract}
                            </h3>
                          </div>

                          <div>
                            <img src={item?.imageUrl} alt="no image" className="" />
                          </div>
                      </div>

                      <div className="flex items-center w-full justify-between mt-5">
                        <div className="flex">
                          {
                            item?.status =="pending"?
                            <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="book status" className="w-[100px] " />
                            :item?.status == 'approved'?
                            <img src="https://i.pinimg.com/736x/06/19/87/06198767cf5f2b1f6ab40fb66cea9737.jpg" alt="book status" className="w-[100px] " />
                            :
                            <img src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="book status" className="w-[100px] " />
                          }
                        </div>
                        <button type="button" onClick={()=>{deleteBook(item?._id)}} className='p-2 bg-red-600 rounded rounded-5 text-white hover:bg-white hover:text-red-600 border hover:border-red-600'>Delete</button>
                      </div>
                    </div>
                    ))
                  :
                  <div className="flex justify-center items-center flex-col">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj7SJDQ5Ih5QY_T68ZIWG6pBQXC2_egNPJ-A&s"
                      alt="no books image" className="w-[120px]" />
                     <p>no brought books</p>
                  </div>
                }
          </div>
        }
        </div>
      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
      <Footer />
    </>
  )
}

export default Profile
