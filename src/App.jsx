import './App.css'
import { Route , Routes  } from 'react-router-dom'
import Home from './users/pages/Home';
import PageNotFound from './pages/PageNotFound';
import Auth from './pages/Auth';
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'
import AllBooks from './users/pages/AllBooks';
import Careers from './users/pages/Careers';
import Contact from './users/pages/Contact'
import Profile from './users/pages/Profile';
import AdminHome from './admin/pages/AdminHome';
import AdminBooks from './admin/pages/AdminBooks'
import AdminCareers from './admin/pages/AdminCareers'
import AdminSettings from './admin/pages/AdminSettings'
import ViewBooks from './users/pages/ViewBooks';

function App() {
  const [ isLoading,setIsLoading] = useState(false)

  useEffect( () => {
     setTimeout(()=>{
	setIsLoading(true)
     },100);
  },[])
  return (
    <>
	  <Routes >
	   <Route path='/' element={ isLoading? <Home/>:<Preloader />} />
      <Route path='/login' element={<Auth/>} />
      <Route path='/register' element={<Auth register />} />
      <Route path='/allbooks' element={<AllBooks />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/view-books/:id" element={<ViewBooks />}/>
      <Route path='/profile' element={<Profile />} />
      <Route path="/admin-home" element={  isLoading? <AdminHome/> :<Preloader /> } />
      <Route path='/admin-books' element={<AdminBooks />} />
      <Route path='/admin-careers' element={<AdminCareers />} />
      <Route path='/admin-settings' element={<AdminSettings />} />
       <Route path='*' element={<PageNotFound/>} />
	  </Routes>
    </>
  )
}

export default App
