import './App.css'
import { Route , Routes , Link } from 'react-router-dom'
import Home from './users/pages/Home';
import PageNotFound from './pages/PageNotFound';
import Auth from './pages/auth';
import Preloader from './components/Preloader'
import { useState, useEffect } from 'react'
import AllBooks from './users/pages/AllBooks';
import Careers from './users/pages/Careers';
import Contact from './users/pages/Contact'

function App() {
  const [ isLoading,setIsLoading] = useState(false)

  useEffect( () => {
     setTimeout(()=>{
	setIsLoading(true)
     },4000);
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
       <Route path='*' element={<PageNotFound/>} />
	  </Routes>
    </>
  )
}

export default App
