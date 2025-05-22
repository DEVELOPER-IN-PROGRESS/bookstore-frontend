import React,{useState, useEffect} from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import {toast , ToastContainer } from 'react-toastify'
import { addJobApi , deleteAJobApi, getAllJobsApi } from '../../../services/allApi';

function AdminCareers() {
  const [modalStatus ,setModalStatus ] = useState(false)
  const [tab , setTab] = useState('job')
  const [token ,setToken] = useState("")
  const [allJobs, setAllJobs] = useState([])
  const [addStatus , setAddStatus] = useState(true)
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [searchKey,setSearchKey] = useState("");
  const [jobDetails, setJobDetails] = useState({
    title:"",
    location:"",
    jobType:"",
    salary:"",
    qualification:"",
    experience:"",
    description:"",
  })
  const handleTab = (e,tab) => {
    setTab(tab)
  }

  const handleReset = () => {
      setJobDetails({
      title:"",
      location:"",
      jobType:"",
      salary:"",
      qualification:"",
      experience:"",
      description:"",
    })
  }

  const adminAddJob = async() => {
      const reqHeader = {
      "Authotization": `Bearer ${token}`
    }
    const result = await addJobApi(jobDetails,reqHeader)
    // console.log(result)
    if(result.status == 200){
      const newList = [ ...allJobs,result.data]
      setAllJobs(newList)
      setAddStatus(!addStatus)
    }
  }

  const fetchAllJobs = async(search) => {
    const result = await getAllJobsApi(search);
    if(result.status == 200){
      setAllJobs(result.data)
    }
  }

  const handleSubmit = () => {
     for(let key in jobDetails){
      console.log(jobDetails[key])
      if(!jobDetails[key]){
          toast.error('please fill all the details ')
          return
      }
     }
     adminAddJob();
  }

  const handleDelete = async(id) => {
     console.log(id)
     const result =  await deleteAJobApi(id)
     console.log(result)
    if (result.data == 200){
       setDeleteStatus(!deleteStatus)
    }
  }

  useEffect(()=>{
    const tok = sessionStorage.getItem("token")
    if(tok){
      setToken(tok)
    }
    fetchAllJobs(searchKey)
  },[addStatus,searchKey,deleteStatus]) //allJobs, searchKey

  console.log(allJobs)

  // console.log(jobDetails)

  return (
    <>
    <AdminHeader />
       <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />

            <div className="p-4  md:px-4">
                <h1 className="text-center text-dark text-3xl capitalize my-4">
                    careers
                </h1>

                <div className='flex justify-center items-center my-5'>
                      <p id="job" onClick={(e) => { handleTab(e,'job') }} className={ tab == 'job' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'}>
                           Job Post
                      </p>
                      <p id="applicant" onClick={(e) => { handleTab(e,'applicant') }} className={ tab == 'applicant' ? ' p-4 text-blue-600 border-l border-r border-t border-gray-200 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-200 cursor-pointer'} >
                        View Applicant
                      </p>
                </div>

                <div className="p-2 md:p-10">

                         <div className="mx-auto my-5 flex  justify-between">

                            <div className="flex items-stretch h-[50px] justify-center">
                                <input
                                value={searchKey}
                              onChange={(e)=>{setSearchKey(e.target.value)}}
                              type="text" placeholder='Job Title'
                              className="p-2 w-full placeholder-gray-600 w-[60%] md:w-full bg-white border-radius-0 border border-gray-300  search"
                              />
                              <button className="bg-green-500 px-2 w-[150px] md:w-[200px] text-white border hover:text-green-500 hover:bg-white">
                                  Search
                              </button>
                            </div>

                            <div className="addjob h-[50px]">
                              <button onClick={()=>{setModalStatus(!modalStatus)}} className="p-2 px-5 h-full capitalize bg-white border text-blue-900 hover:text-white border-blue-900 hover:bg-blue-900">
                                 add job
                              </button>
                            </div>

                         </div>

                        {
                         allJobs?.map( job => (
                            <div className="p-4 md:px-0 md:py-5" key={job._id}>
                            <div className="shadow-2xl p-4 border-grey-400">
                                <div className="flex flex-col py-5">
                                    <div>
                                      <div className="flex justify-between gap-x-4 items-center">
                                        <h2 className=" text-underline">{job?.title}</h2>

                                        <button onClick={()=>{handleDelete(job._id)}} className="bg-red-600 border hover:border-red-600 text-white hover:bg-white hover:text-red-500 p-4">
                                            delete
                                            <FontAwesomeIcon className="ms-2" icon={faTrashCan} />
                                        </button>

                                      </div>

                                        <p className="mt-3">
                                            <FontAwesomeIcon className='me-3 text-sky-500' icon={faLocationDot} />
                                           {job?.location}
                                        </p>
                                        <p className="mt-3">
                                            Job Type: {job?.jobType}
                                        </p>
                                        <p className="mt-3">Salary : {job?.salary}</p>
                                        <p className="mt-3"> Qualification : {job?.qualification}</p>
                                        <p className="mt-3"> Experience: {job?.experience}</p>
                                        <p>Description: {job?.description}</p>
                                    </div>

                                </div>
                            </div>
                         </div>
                         ))
                        }

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
             <div className="mb-3">
                <input type="text" value={jobDetails.title} placeholder="Title"  onChange={(e)=>{setJobDetails({...jobDetails, title:e.target.value})}} className="p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.location} placeholder="Location"  onChange={(e)=>{setJobDetails({...jobDetails, location:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.jobType} placeholder="Jobtype"  onChange={(e)=>{setJobDetails({...jobDetails, jobType:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.salary} placeholder="Salary"  onChange={(e)=>{setJobDetails({...jobDetails, salary:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.qualification} placeholder="Qualification"  onChange={(e)=>{setJobDetails({...jobDetails, qualification:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.description} placeholder="description"  onChange={(e)=>{setJobDetails({...jobDetails, description:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
                <input type="text" value={jobDetails.experience} placeholder="Experience"  onChange={(e)=>{setJobDetails({...jobDetails, experience:e.target.value})}} className="mt-2 p-2 border border-gray-400 rounded rounded-3 placeholder-gray-400 w-full" />
              </div>
          </div>
            { /* modal footer */ }
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-end sm:px-6">
                  <button type="button" onClick={()=>{handleSubmit()}} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-white border hover:border-green-500 hover:text-green-500 sm:ml-3 sm:w-auto">Submit</button>
                  <button type="button" onClick={()=>{handleReset()}} className="mt-3 ms-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        }
    <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    <Footer />
    </>
  )
}
export default AdminCareers