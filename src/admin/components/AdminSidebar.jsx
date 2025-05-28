import React,{useState , useEffect , useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping, faBook, faHome } from '@fortawesome/free-solid-svg-icons'
import {useNavigate , useLocation } from 'react-router-dom'
import { serverUrl } from '../../../services/serverurl';
import { adminProfileContext } from '../../context/ContextShare';

function AdminSidebar() {
const [adminDetails,setAdminDetails] = useState({
    username:"", profile: ""
})

const { adminPicUpdateStatus }  = useContext(adminProfileContext)


useEffect(()=> {
    //set sidebar state to true on md devices and above
    if(window.innerWidth >= 768){
        setSidebar(true)
    }
    const { username ,profile } = JSON.parse(sessionStorage.getItem('existingUser'))
    setAdminDetails({username, profile})
},[adminPicUpdateStatus])

const path = useLocation().pathname
const [sidebar , setSidebar] = useState(false)
const navigate = useNavigate();
const filter = (path) => {
    switch(path){
        case 'home':
            navigate('/admin-home')
            break;
        case 'books':
            navigate('/admin-books')
            break;
        case 'settings':
            navigate('/admin-settings')
            break;
        case 'careers':
            navigate('/admin-careers')
            break;
        default:
            navigate('*')
    }
}
return (
    <>
        <div className="bg-sky-100 py-2  sidebar-wrap">
            <div className="admin-image flex flex-col items-center">
                <img src={
                    adminDetails.profile == ""?
                    "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    :
                    `${serverUrl}/uploads/${adminDetails.profile}`
                }  alt="no image" className="w-[150px] h-[150px] rounded-[50%]" />
                <h4 className="text-center mt-3">Username</h4>
            </div>

            <div  className='text-2xl mt-3 text-center md:hidden'>
                <FontAwesomeIcon onClick={()=>{setSidebar(!sidebar) }}  className="me-2 text-blue-600"  icon={faBars} />
            </div>

            {
            sidebar
            &&
            <div className="my-5 mx-auto w-fit md:w-full md:block md:ms-3">
                <div className="mb-3">
                    <input onClick={()=>{filter('home')}} type="radio" id="home" name="filter" className="radio" readOnly checked={path.includes('home')}/>
                    <label htmlFor="home" className="ms-3">
                        <FontAwesomeIcon className="me-2" icon={faHome}/>
                        Home
                    </label>
                </div>
                <div className="mb-3">
                    <input onClick={()=>{filter('books')}} type="radio" id="allbooks" name="filter" className="radio" readOnly checked={path.includes('books')}/>
                    <label htmlFor="allbooks" className="ms-3 capitalize">
                        <FontAwesomeIcon className="me-2" icon={faBook}/>
                        all books
                    </label>
                </div>
                <div className="mb-3">
                    <input onClick={()=>{filter('careers')}} type="radio" id="careers" name="filter" className="radio" readOnly checked={path.includes('careers')}/>
                    <label htmlFor="careers" className="ms-3">
                        <FontAwesomeIcon className="me-2" icon={faBagShopping}/>
                        Careers
                    </label>
                </div>
                <div className="mb-3">
                    <input onClick={()=>{filter('settings')}} type="radio" id="settings" name="filter" className="radio" readOnly checked={path.includes('settings')}/>
                    <label htmlFor="settings" className="ms-3">
                        <FontAwesomeIcon className="me-2" icon={faHome}/>
                        Settings
                    </label>
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default AdminSidebar