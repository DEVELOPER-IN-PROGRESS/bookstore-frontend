import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){
	const [ status , setStatus ] = useState(true);
	const [ dropdown , setDropdown ] = useState(true);

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
		 {/*	<button className="">
				<FontAwesomeIcon  className="me-2" icon={faCircleUser} />
 				Login
	       	</button>
	 		*/
		}
	    </Link>

		<div className="relative inline-block text-left">
			<div>
				<button onClick={()=>{ setDropdown(!dropdown) }} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
					<img className="h-[32] w-[32px]" src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" alt="logged in" />
				</button>
			</div>

	 		{
				/*
			!dropdown &&
			<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
				<div className="py-1" role="none">
				<Link to={"/profile"}>
				<p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">License</p>
				</Link>
				<button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
				</div>
			</div>
			*/
			}
	 	</div>

	</div>
  </div>
 <nav className="flex justify-center flex-col items-center mt-2 text-white bg-gray-900">
	 <div className="flex justify-between w-full my-2 px-3 md:hidden">
		<span onClick={()=>{setStatus(!status) }} className='text-2xl'>
		   <FontAwesomeIcon  className="me-2"  icon={faBars} />
	        </span>

		<Link to={'/login'}>
			 {/* <button className="">
				<FontAwesomeIcon icon={faCircleUser} />
 				Login
	       	</button>
	 		*/ }


	    </Link>
	  	<div className="relative inline-block text-left">
			<div>
				<button onClick={()=>{ setDropdown(!dropdown) }} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
					<img src="https://static.vecteezy.com/system/resources/previews/007/407/996/non_2x/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg" alt="logged in"  className="h-[32] w-[32px]"  />
				</button>
			</div>

	 		{
			!dropdown &&
			<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
				<div className="py-1" role="none">
				<p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">License</p>
				<button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
				</div>
			</div>
			}
	 	</div>
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
