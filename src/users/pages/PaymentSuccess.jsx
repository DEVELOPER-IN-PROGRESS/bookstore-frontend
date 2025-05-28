import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
  return (
    <div className="container my-10" >
        <div className="md:grid grid-cols-2 px-20 justify-center items-center flex-col">
            <div className="">
                <h1>Congragulations</h1>
                <p className='text-3xl'>Thank You for Shopping with BookStore<br/> Hope you have a good time with Us</p>
                <Link to='/allbooks'>
                <button type="button" className="bg-blue-500 px-4 py-3 text-white my-5">
                    <FontAwesomeIcon icon={faBackward} className="me-2 "/>
                    Explore more books
                </button>
                </Link>
            </div>
            <div className="flex justify-center items-center">
                <img  src="https://i.pinimg.com/originals/32/b6/f2/32b6f2aeeb2d21c5a29382721cdc67f7.gif" alt="no image" className="success" />
            </div>

        </div>
    </div>
  )
}

export default PaymentSuccess