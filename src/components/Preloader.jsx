import React from 'react'

function Preloader(){

 return(
	 <>
	  <div className="w-full min-h-screen flex justify-center items-center">
        <div className="wrapper w-[90%] lg:w-[500px] text-center">
            <div className="flex justify-center">
                <img className="w-[300px]" src="https://i.pinimg.com/originals/e1/59/25/e15925c931a81678a3c2e0c0a40db781.gif" alt="preloader" />
            </div>
        </div>
    </div>
	 </>
	);
}

export default Preloader;
