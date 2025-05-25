import React, {useState , useEffect } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationApi, getAllJobsApi } from '../../../services/allApi'
import {toast , ToastContainer } from 'react-toastify'
function Careers() {
  const [modalStatus , setModalStatus] = useState(false)
  const [allJobs, setAllJobs] = useState([])
  const [search,setSearch] = useState("")
  const [jobTitle,setJobTitle] = useState("");
  const [token ,setToken] = useState("")
  const [applicantDetails,setApplicantDetails] = useState({
    fullname:"" ,coverletter : "" , qualification:"", phone: "" , email : "",resume:''
  })

  const openModal = (jobTitle) => {
     setModalStatus(!modalStatus)
     setJobTitle(jobTitle)
  }

  const getAllJobs = async(search) => {
     const result  = await getAllJobsApi(search)
     console.log(result)
     if(result.status ==200){
        setAllJobs(result.data)
     }
  }


  console.log(applicantDetails)

  const handleReset = () => {
     setApplicantDetails({
    fullname:"" ,
    coverletter : "",
    qualification:"",
    phone: "" ,
    email : "",
    resume:''})
  document.getElementById('resumefile').value = ""
  }

  const handleSubmit = async() => {
     console.log(jobTitle)
     for(let key in applicantDetails){
        if (!applicantDetails[key]){
          toast.error('fill all the fields')
          return
        }
     }
          // toast.info("Form complete")
          const reqBody = new FormData();
          for(let key in applicantDetails){
              reqBody.append(key, applicantDetails[key])
          }
          // debugger;
          reqBody.append("jobtitle",jobTitle)

          const reqHeader = {
            "Authorization" : `Bearer ${token}`
          }

          const result = await addApplicationApi(reqHeader,reqBody)
          if(result.status == 200){
            toast.success('Your Application has been submitted')
            setModalStatus(false)
            handleReset()
          }else if(result.status == 400){
            toast.warning(result.response.data)
            handleReset()
          }else{
            toast.error("Something went wrong")
            setModalStatus(false)
          }
  }


  useEffect(()=>{
    getAllJobs(search);
    const tok = sessionStorage.getItem("token")
    if(tok){
      setToken(tok)
    }
  },[search])


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
                     value={search}
                     onChange={(e)=>{setSearch(e.target.value)}}
                     type="text" placeholder='Search By Title'
                     className="p-2 w-full placeholder-gray-600 w-full bg-white border-radius-0 border border-dark  search"
                    />
                    <button  className="bg-green-500 px-2 w-[150px] md:w-[200px] text-white border hover:text-green-500 hover:bg-white">
                        Search
                    </button>
         </div>

         {
          allJobs?.length >0?

          allJobs?.map( job => (
                  <div className="p-4 md:px-20 md:py-5" key={job._id}>
                    <div className="shadow p-4 border-grey-400">
                        <div className="flex flex-col md:grid grid-cols-[8fr_1fr] py-5">
                            <div>
                                <h2 className="">{job.title}</h2>
                                <hr />
                                <p className="mt-3">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    {job.location}
                                </p>
                                <p className="mt-3">
                                    Job Type: {job.jobType}
                                </p>
                                <p className="mt-3">Salary : {job.salary}</p>
                                <p className="mt-3"> Qualification : {job.qualification}</p>
                                <p className="mt-3"> Experience: {job.experience} </p>
                                <p>Description:  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam odio debitis ut reprehenderit, ea assumenda ipsa nemo quibusdam. Commodi soluta repellendus fuga facilis laborum necessitatibus dolore eveniet sapiente quod! Delectus!</p>
                            </div>
                            <div>
                                <button onClick={()=>{openModal(job.title,job._id)}} className="ms-0 mt-4 md:ms-2 md:mt-0 bg-blue-900 border hover:border-blue-900 text-white hover:bg-white hover:text-blue-900 p-4">
                                    Apply
                                    <FontAwesomeIcon className="ms-2" icon={faArrowUpRightFromSquare} />
                                </button>
                            </div>
                        </div>
                    </div>
                  </div>
          ))
         :
         <p>No Jobs Available at the moment</p>
         }

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
                    <input type="text" value={applicantDetails.fullname} onChange={(e)=>{setApplicantDetails({...applicantDetails,fullname :e.target.value})}} placeholder="Full Name" className="p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />

                    <input type="text" value={applicantDetails.email} onChange={(e)=>{setApplicantDetails({...applicantDetails, email:e.target.value})}} placeholder="Email id" className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                </div>
              </div>
              <div className="p-3">
                <div className="mb-3">
                <input type="text" value={applicantDetails.phone} onChange={(e)=>{setApplicantDetails({...applicantDetails, phone:e.target.value})}} placeholder="Phone Number" className="p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />

                <input type="text" value={applicantDetails.qualification} onChange={(e)=>{setApplicantDetails({...applicantDetails, qualification:e.target.value})}} placeholder="Qualification" className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                </div>
              </div>
          </div>
          <div className="p-3">
            <textarea name="" value={applicantDetails.coverletter} onChange={(e)=>{setApplicantDetails({...applicantDetails, coverletter:e.target.value})}} className="border border-gray-400 rounded rounded-3 w-full" row={6} id=""></textarea>
          </div>

          <div className="mb-3 px-3 w-full">
            <p className="text-gray-400">Resume</p>
            <input type="file" id="resumefile"  onChange={(e)=>{setApplicantDetails({...applicantDetails, resume:e.target.files[0]})}} placeholder="Choose File" className="border border-gray-400 file:p-2 file:bg-gray-400 rounded placeholder-gray-500 w-full file:text-white" />
          </div>
      </div>
        { /* modal footer */ }
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" onClick={()=>{handleSubmit()}} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border hover:border-green-500 hover:text-green-500 sm:ml-3 sm:w-auto">Submit</button>
              <button type="button" onClick={()=>{handleReset()}} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    }
    <ToastContainer theme="colored" position="top-center" autoClose={2000} />
     <Footer/>
    </>
  )
}

export default Careers

