import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone'

function Contact() {
  return (
    <>
     <Header/>
        <div className="page-container lg:w-[960px] xl:w-[1100px] mx-auto">
            <h1 className="text-center text-4xl capitalize my-5">Contact Us</h1>
            <p className="text-center text-2xl text-black-400 my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem expedita asperiores ducimus natus magnam ratione ipsum amet sit tempore facere dignissimos neque velit maxime reiciendis quia, atque non? Non, adipisci.</p>

            <div className="my-4 flex flex-col md:grid grid-cols-3 md:gap-x-[30px]  text-left">
                <div className="inline-flex items-center grid-item">
                    <span className="icon-cover h-[40px] w-[40px] rounded-[50%] bg-gray-300 flex items-center justify-center me-2">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <p className="text-black-400 m-0">
                        123 Main Street, Apt 4B,<br/>
                        Anytown, CA 91234
                    </p>
                </div>
                <div className="inline-flex items-center grid-item">
                <span className="icon-cover h-[40px] w-[40px] rounded-[50%] bg-gray-300 flex items-center justify-center me-2">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <p className="text-black-400 m-0">
                        +91 9847561230
                    </p>
                </div>
                <div className="inline-flex items-center grid-item">
                <span className="icon-cover h-[40px] w-[40px] rounded-[50%] bg-gray-300 flex items-center justify-center me-2">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </span>
                    <p className="text-black-400 m-0">
                        BookStore@gmail.com
                    </p>
                </div>
            </div>


            <div className="contactform-container my-10">
                <div className="flex flex-col md:grid grid-cols-2 md:gap-x-[50px]">
                    <div className="form1 flex flex-col bg-gray-300 w-full rounded-3 p-5">
                            <h4 className="text-center my-5">
                                Send the Message
                            </h4>
                            <input type="text" placeholder='name'
                            className="p-3 bg-white rounded rounded-3 placeholder-gray-600 my-3" />

                            <input type="text" placeholder='email id'
                            className="p-3 bg-white rounded rounded-3 placeholder-gray-600 my-3" />

                            <textarea name="" className='p-3 bg-white rounded rounded-3 my-3 w-full placeholder-gray-600' rows={5} placeholder='message' id=""></textarea>
                    </div>

                    <div className="iframe-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.984108429167!2d76.3400965732524!3d10.018169672725467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v1745472392727!5m2!1sen!2sin" width="100%" height="100%" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </div>
     <Footer/>
    </>
  )
}

export default Contact