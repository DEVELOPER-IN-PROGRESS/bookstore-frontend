import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PaymentError() {
  return (
    <div className="container my-10" >
            <div className="md:grid grid-cols-2 px-20 justify-center items-center flex-col">
                <div className="">
                    <h1>Sorry! Your Payment is UnSucessful</h1>
                    <p className='text-3xl'>We apologize for the inconvenience caused. Kindly Visit the bookstore for further
                        actions
                    </p>
                    <Link to='/allbooks'>
                    <button type="button" className="bg-blue-500 px-4 py-3 text-white my-5">
                        <FontAwesomeIcon icon={faBackward} className="me-2 "/>
                        Explore more books
                    </button>
                    </Link>
                </div>
                <div className="flex justify-center items-center">
                    <img  src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" alt="no image" className="success" />
                </div>

            </div>
    </div>
  )
}

export default PaymentError