import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className="wrapper w-[90%] lg:w-[500px] text-center">
            <div className="flex justify-center">
                <img className="w-[300px]" src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif" alt="404 page image" />
            </div>

            <p className="text-2xl">Oh no! </p>
            <h2 className="font-bold text-3xl my-2"> Looks Like You're Lost </h2>
            <p className="text-2xl my-2"> This page you're looking for is not available </p>

            <Link to={'/'} >
                <button className="rounded border rounded-3 bg-blue-500 my-3 text-white px-5 py-3 hover:border-blue-800 hover:bg-white hover:text-blue-500">
                    Back Home
                </button>
            </Link>
        </div>
    </div>
  )
}

export default PageNotFound
