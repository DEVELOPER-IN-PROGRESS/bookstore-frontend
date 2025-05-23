import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { registerApi , loginApi, googleLoginApi } from '../../services/allApi';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Auth({register}) {
  const [userDetails, setUserDetails] = useState({
	username:"",
	email: "",
	password: "",
  });
 const navigate = useNavigate();

  const handleRegister = async() => {
	const {username , password , email } = userDetails
	if(!username || !password || !email){
		toast.error('please fill the complete details')
	}
	// API call
	else{
		const result = await registerApi({username , email , password})

		if (result.status == 200){
			toast.success('Registration successful');
			setUserDetails({username:"", email:"", password:"" })

			setTimeout(()=>{navigate('/login')},1000);

		}else if(result.status == 409){
			toast.error(result.response.data)
			setUserDetails({username:"", email:"", password:"" })
		}else{
			toast.warning('Something went wrong')
		}
	}
  }

  const handleLogin = async() => {
	const { email , password } = userDetails;
	if(!email || !password ){
		toast.error('please fill all the fields')
	}else{
		const result = await loginApi({password,email});
		console.log(result);

		if (result.status == 200){
			toast.success("login successful")
			sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
			sessionStorage.setItem("token",result.data.token)

			// setTimeout(()=>{},1500);
			if( result.data.existingUser.email == "admin123@gmail.com"){
				console.log('you are the admin')
				navigate('/admin-home')
			}else{
				navigate('/')
			}
		}
	}
  }

  const handleGoogleLogin = async(credentialResponse) => {
	const details = jwtDecode(credentialResponse.credential)
	console.log(details)

	//since we are logging to the website via the google account we set a dummy password and pass it via the common API
	// as the password is a required field as per our schema

	const result = await googleLoginApi({username:details.name, email:details.email ,
	password:'googlepassword', photo:details.picture})
	console.log(result);

	if(result.status ==200){
		toast.success("login succesful")
		sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
		sessionStorage.setItem("token",result.data.token)
	}

	setTimeout(()=>{
		if(result.data.existingUser.email == "bookstoreadmin@gmail.com"){
			navigate('/admin-home')
		}else{
			navigate('/')
		}
	},2000)
  }

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
					<input type="text" onChange={(e)=>{setUserDetails({ ...userDetails, username:e.target.value }) }} placeholder="username"  className="p-2  rounded placeholder-gray-600	bg-white w-full" />
				 </div>
	            }
	  			<div className="mb-3 w-full mt-4">
	  				<input type="text" onChange={(e)=>{setUserDetails({ ...userDetails, email:e.target.value }) }} placeholder="email id" className="p-2 rounded  placeholder-gray-600 bg-white w-full" />
				</div>
	  			<div className="mb-3 w-full mt-4">
	 				 <input type="text" onChange={(e)=>{setUserDetails({ ...userDetails, password :e.target.value }) }} placeholder="password" className="p-2 rounded placeholder-gray-600 bg-white w-full" />
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
					<button type="button" onClick={handleLogin} className="bg-green-500 text-white w-full p-3 rounded capitalize"> Login </button>
				</div>
				:
				<div className="mb-5 mt-3 w-full" >
					<button type="button" onClick={handleRegister} className="bg-green-500 text-white w-full p-3 rounded capitalize"> Register </button>
				</div>
				}

				{
				!register &&
				<>
				<p className="text-white"> -------------------------- or -------------------------</p>
				<div className="mb-5 mt-3 w-full" >
				<GoogleLogin
					onSuccess={credentialResponse => {
						console.log(credentialResponse);
						handleGoogleLogin(credentialResponse);
					}}
					onError={() => {
						toast.error('Something went Wrong')
						console.log('Login Failed');
					}}
				/>;
					{/* <button className="bg-white text-black w-full p-3 rounded capitalize">sign in with google </button> */}
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
	  <ToastContainer theme="colored" position="top-center" autoClose={2000} />

    </div>
  )
}

export default Auth
