import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from  '../components/AdminHeader';
import AdminSidebar from '../components/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
function AdminHome() {
  return (
    <>
    <AdminHeader />
        <div className="md:grid grid-cols-[1fr_4fr]">
            <AdminSidebar />
            <div className="p-10">
              <div className="flex flex-col gap-y-5 md:grid grid-cols-3">
                <div className="md:px-10 px-5">
                   <div className="bg-blue-900 p-3 flex rounded text-white">
                      <FontAwesomeIcon icon={faBook} className="fa-3x me-2"/>
                      <div className="flex flex-col">
                        <h4 className="text-lg">Total Number of books </h4>
                        <h4 className="text-3xl">100+</h4>
                      </div>
                   </div>
                </div>
                <div className="md:px-10 px-5">
                    <div className="bg-yellow-500 p-3 flex rounded text-white">
                        <FontAwesomeIcon icon={faPeopleGroup} className="fa-3x me-2"/>
                        <div className="flex flex-col">
                          <h4 className="text-lg">Total Number of Users </h4>
                          <h4 className="text-3xl">100+</h4>
                        </div>
                    </div>
                  </div>
                <div className="md:px-10 px-5">
                    <div className="bg-green-900 p-3 flex rounded text-white">
                        <FontAwesomeIcon icon={faPeopleCarry} className="fa-3x me-2"/>
                        <div className="flex flex-col">
                          <h4 className="text-lg">Total Number of Employees </h4>
                          <h4 className="text-3xl">100+</h4>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    <Footer />
    </>
  )
}

export default AdminHome