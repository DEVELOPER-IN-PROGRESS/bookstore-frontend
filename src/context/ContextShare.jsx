import React, {createContext, useState} from 'react'

export const searchKeyContext = createContext("")
export const adminProfileContext = createContext("")

function ContextShare({children}) {
  const [searchKey, setSearchKey] = useState('')
  const [adminPicUpdateStatus, setAdminPicUpdateStatus] = useState({})
  return (
   <adminProfileContext.Provider value={{adminPicUpdateStatus, setAdminPicUpdateStatus}}>
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