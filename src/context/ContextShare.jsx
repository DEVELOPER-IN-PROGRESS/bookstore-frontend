import React, {createContext, useState , useEffect} from 'react'

export const searchKeyContext = createContext("")
export const adminProfileContext = createContext("")

function ContextShare({children}) {
  const [searchKey, setSearchKey] = useState('')
  const [adminPicUpdateStatus, setAdminPicUpdateStatus] = useState({})
  const [token,setToken]  = useState("")

  useEffect(()=>{
    const tok = sessionStorage.getItem('token')
    if(tok){
      setToken(tok)
    }
  },[])


  return (
   <adminProfileContext.Provider value={{adminPicUpdateStatus, token, setAdminPicUpdateStatus}}>
      <searchKeyContext.Provider
      value={ {searchKey , setSearchKey}}
      >
        {
          children
        }
      </searchKeyContext.Provider>
    </adminProfileContext.Provider>
  )
}

export default ContextShare