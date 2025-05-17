import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { getAllBookApi  } from '../../../services/allApi'

function AllBooks() {
    const [status , setStatus] = useState(true)
    const [token,setToken] = useState("")
    const [allBooks, setAllBooks] = useState([])

    const getAllBooks = async(TOKEN) => {
        const reqHeader = {
            "Authorization": `Bearer ${TOKEN}`
        }

        const result = await getAllBookApi(reqHeader)
        // console.log(result)

        if(result.status == 200){
            setAllBooks(result.data)
        }
    }

    // console.log(allBooks)

    useEffect(()=>{
        const TOKEN = sessionStorage.getItem("token")
        if(TOKEN){
          setToken(TOKEN)
          getAllBooks(TOKEN)
        }
      },[])


  return (
    <>
    <Header/>
        <h1 className="text-center my-4 text-3xl"> Collections</h1>

        {/* When user logged in  */}
        {
        token
          &&
        <div className="">
            <div className="">
                <div className="mx-auto my-5 w-[50%] flex items-stretch h-[50px] justify-center">
                    <input
                     type="text" placeholder='Search By Title'
                     className="p-2 w-full placeholder-gray-600 w-full bg-white border-radius-0 border border-dark  search"
                    />
                    <button className="bg-blue-500 px-2 w-[150px] md:w-[200px] text-white border hover:text-blue-500 hover:bg-white">
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-col  md:grid grid-cols-[1fr_4fr] px-5 md:px-10">
                <div>
                    <div className="flex items-center">
                        <h6 className="text-2xl capitalize"> Filters </h6>
                        <span className="md:hidden" onClick={()=> { setStatus(!status)}} >
                                <FontAwesomeIcon icon={faBars}/>
                        </span>
                    </div>

                    <div className={`radio-filter  ${status? 'hidden': 'block'} `}>
                        <div className="mt-3">
                            <input type="radio" id="Literary" name="filter" />
                            <label htmlFor="Literary" className="mt-3"> Literary Fiction </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="Philosphy" name="filter" />
                            <label htmlFor="Philosophy" className="mt-3"> Philosophy </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="Romance" name="filter" />
                            <label htmlFor="Romance" className="mt-3"> Romance </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="Mystery" name="filter" />
                            <label htmlFor="Mystery" className="mt-3"> Mystery/Thriller </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="Politics" name="filter" />
                            <label htmlFor="Politics" className="mt-3"> Politics </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="selfhelp" name="filter" />
                            <label htmlFor="selfhelp" className="mt-3"> self-help </label>
                        </div>

                        <div className="mt-3">
                            <input type="radio" id="Autobiography" name="filter" />
                            <label htmlFor="Autobiography" className="mt-3"> Auto/biography </label>
                        </div>


                        <div className="mt-3">
                            <input type="radio" id="Autobiography" name="filter" />
                            <label htmlFor="Autobiography" className="mt-3"> Autobiography </label>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white flex justify-center items-center flex-col md:p-10 p-5">

                    <div className="md:grid grid-cols-4 w-full gap-x-2 gap-y-5 mt-3">
                        {
                            allBooks?.length>0?
                            allBooks?.map( item => (
                                <div key={item._id} className="p-3 shadow-xl ">
                                    <Link to="">
                                    <img src={item.imageUrl} alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
                                    </Link>
                                    <div className="flex flex-col justify-center items-center mt-3">
                                    <h2 className="text-2xl capitalize text-center"> {item?.title.slice(0,20)} </h2>
                                    <p className="text-blue-800"> { item?.author.slice(0,20) } </p>
                                    <button className="bg-blue-600 py-2 text-white hover:bg-white hover:text-blue-500 px-2 border hover:border-blue-600 w-full mt-2">
                                        ${item.dprice}
                                    </button>
                                    </div>
                                </div>
                            ))
                            :
                            <p>No Books</p>
                        }



                        {/* <div className="p-3 shadow-xl ">
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
                                <div className="flex flex-col justify-center items-center mt-3">
                            <h2 className="text-2xl capitalize text-center"> the lord of the rings </h2>
                            <p className="text-blue-800"> J.R.R Tolkien</p>
                            <button className="bg-blue-600 py-2 text-white hover:bg-white hover:text-blue-500 px-2 border hover:border-blue-600 w-full mt-2">$18</button>
                            </div>
                        </div>

                        <div className="p-3 shadow-xl ">
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
                                <div className="flex flex-col justify-center items-center mt-3">
                            <h2 className="text-2xl capitalize text-center"> the lord of the rings </h2>
                            <p className="text-blue-800"> J.R.R Tolkien</p>
                            <button className="bg-blue-600 py-2 text-white hover:bg-white hover:text-blue-500 px-2 border hover:border-blue-600 w-full mt-2">$18</button>
                            </div>
                        </div>

                        <div className="p-3 shadow-xl ">
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
                                <div className="flex flex-col justify-center items-center mt-3">
                            <h2 className="text-2xl capitalize text-center"> the lord of the rings </h2>
                            <p className="text-blue-800"> J.R.R Tolkien</p>
                            <button className="bg-blue-600 py-2 text-white hover:bg-white hover:text-blue-500 px-2 border hover:border-blue-600 w-full mt-2">$18</button>
                            </div>
                        </div> */}

                    </div>

                    <div className="text-center mt-5">
                        <Link to={'/allbooks'}>
                            <button className="px-3 py-2 border text-white hover:text-blue-500 bg-blue-800 hover:border hover:border-blue-800 hover:text-blue-500 hover:bg-white">
                            Explore More
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        }

        {/* Not Logged in  */}
        {
        !token &&
        <div className="grid grid-cols-3">
            <div></div>
            <div>
                <img src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif" className="w-1/2" alt="no image" />
                <p className="">Please
                    <Link to={'/login'}>Login</Link>
                    To Explore More
                </p>
            </div>
            <div></div>
        </div>
        }

    <Footer/>
    </>
  )
}

export default AllBooks
