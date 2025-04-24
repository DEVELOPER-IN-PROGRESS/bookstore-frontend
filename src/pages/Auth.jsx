import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Auth({register}) {
  return (
    <div id="login" className="">
 	  <div className="md:grid grid-cols-3">
		<div></div>
	  	<div className="flex flex-col justify-center items-center flex-col">
	  		<h1 className="text-2xl text-white uppercase"> Book Store </h1>

	  		<form className="w-full  bg-gray-900 p-5  flex flex-col  justify-center items-center flex-end">
				<div style={{ width:'70px', height: '70px', borderRadius: '50%' }} className="flex items-center justify-center border-white flex-col">
		  			<FontAwesomeIcon icon={faUser} className="text-white fa-2x" />
	  			</div>

	  			{ !register?
				<h3 className="text-white mt-5 text-3xl"> Login </h3>
				:
				<h3 className="text-white mt-5 text-3xl"> Register </h3>
				}

	  		 	{ register &&
				 <div className="mb-5 w-full mt-8" >
					<input type="text" placeholder="username"  className="p-2  rounded placeholder-gray-600	bg-white w-full" />
				 </div>
	            }
	  			<div className="mb-3 w-full mt-4">
	  				<input type="text" placeholder="email id" className="p-2 rounded  placeholder-gray-600 bg-white w-full" />
				</div>
	  			<div className="mb-3 w-full mt-4">
	 				 <input type="text" placeholder="password" className="p-2 rounded placeholder-gray-600 bg-white w-full" />
	  			</div>

			       <div className="mb-5 mt-3 w-full flex justify-between " >
				  <p className="text-amber-300 " style={{ fontSize: '10px'}}>Never share your password with others </p>
				{
				 !register  &&  <p className="underline text-white" style={{ fontSize: '10px'}}> Forgot Password </p>
			    }
				</div>

				{
				!register?
				<div className="mb-5 mt-3 w-full" >
					<button className="bg-green-500 text-white w-full p-3 rounded capitalize"> Login </button>
				</div>
				:
				<div className="mb-5 mt-3 w-full" >
					<button className="bg-green-500 text-white w-full p-3 rounded capitalize"> Register </button>
				</div>
				}



				{
				!register &&
				<>
				<p className="text-white"> -------------------------- or -------------------------</p>
				<div className="mb-5 mt-3 w-full" >
					<button className="bg-white text-black w-full p-3 rounded capitalize">sign in with google </button>
				</div>
				</>
				}

				{
				 register?
				<p className="text-white" > Are you a Already a user ? <Link className="underline text-blue-400 ms-2" to="/login">Login</Link>
				 </p>
				:<p className="text-white" > Are you a new user ?  <Link className="underline text-blue-400 ms-2" to="/register">Register</Link> </p>
				}

	  		</form>
	  	</div>
	  	<div></div>
	  </div>
    </div>
  )
}

export default Auth
