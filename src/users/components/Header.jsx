import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons/faCircleUser';
import { Link } from 'react-router-dom';


function Header(){
	const [ status , setStatus ] = useState(true)
 return(
 <>
  <div className="grid grid-cols-3 gap-2 text-center my-3">
	<div className="logo flex items-center justify-center">
	  	<img src="./logo.png" className="w-[30px]" alt='logo' />
	  	<h1 className='text-2xl md:hidden ms-2'>Book Store</h1>
	 </div>
	<div className="title uppercase">
	  <h1 className='hidden md:block'>Book Store</h1>
	</div>
	<div className="hidden social lg:flex items-center justify-end gap-x-3 text-2xl me-2">
	   <FontAwesomeIcon icon={faXTwitter} />
	   <FontAwesomeIcon icon={faFacebook} />
	   <FontAwesomeIcon icon={faInstagram} />

	   <Link to={'/login'}>
			<button className="">
				<FontAwesomeIcon  className="me-2" icon={faCircleUser} />
 				Login
	       	</button>
	 		{ /*
			 <img src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" alt="logged in"  className=""  />
			*/ }
	    </Link>
	</div>
 </div>
 <nav className="flex justify-center flex-col items-center mt-2 text-white bg-gray-900">
	 <div className="flex justify-between w-full my-2 px-3 md:hidden">
		<span onClick={()=>{setStatus(!status) }} className='text-2xl'>
		   <FontAwesomeIcon  className="me-2"  icon={faBars} />
	        </span>

		<Link to={'/login'}>
			<button className="">
				<FontAwesomeIcon icon={faCircleUser} />
 				Login
	       	</button>
	 		{ /*
			 <img src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" alt="logged in"  className=""  />
			*/ }
	    </Link>
	 </div>
	 <ul className={`md:flex justify-between  ${status? 'hidden': 'block'}  my-2`}>
		<Link to={"/"}>
			<li className="mx-4 text-light-300">Home</li>
		</Link >
		<Link to={"/allbooks"}>
			<li className="mx-4 text-light-300">Books</li>
		</Link >
		<Link to={"/careers"}>
		<li className="mx-4 text-light-300">Careers</li>
		</Link>
		<Link to={"/contact"}>
		<li className="mx-4 text-light-300">Contact</li>
		</Link>
	 </ul>
 </nav>
</>
 );
}

export default Header;
