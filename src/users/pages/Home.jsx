import React,{useEffect, useState} from 'react';
import Header from '../components/Header';
import Footer from '../../components/Footer';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { homeBookApi} from '../../../services/allApi';

function Home() {

 const [homeBook, setHomeBook] = useState([])
 const getAllHomeBooks = async() => {
	const result = await homeBookApi()
	if(result.status == 200){
		setHomeBook(result.data)
	}
 }

 console.log(homeBook)
 useEffect(()=> {
	getAllHomeBooks()
 },[])

  return (
    <>
	  <Header />
	    <header className="flex justify-center items-center">
		<div id="main" className="flex justify-center items-center w-full" >
	  	<div className="md:grid grid-cols-3 w-full">
	  		<div></div>
	  		<div className="text-white flex justify-center items-center flex-col" >
			  	<h1 className="text-5xl" > Wonderful Gifts</h1>
			  	<p className="text-2xl" > Give your family and friends a book </p>
	  		<div className="flex items-center justify-center w-full">
	  			<input type="text" placeholder="search  books" className="p-2 mt-4 bg-white border-radius rounded-3xl placeholder-gray-400 w-[90vw] md:w-full"/>
	  			<FontAwesomeIcon className="text-blue-800" icon={faMagnifyingGlass} style={{ marginTop: '14px' , marginLeft: '-30px' }}/>
	  		</div>
	  		</div>
	  		<div></div>
	  	</div>
	  	</div>
	   </header>

	  {/* New Arrivals */}
	  <section  className="w-full bg-white flex justify-center items-center flex-col md:p-10 p-5">
	  	<h2 className="text-center text-3xl text-black-500 uppercase"> New Arrivals </h2>
	  	<p className="capitalize text-center text-2xl"> Explore our latest collection </p>

	  <div className="md:grid grid-cols-4 w-full gap-x-2 gap-y-5 mt-3">

		{
			homeBook?.length > 0?
			homeBook.map( (item) => (
				<div className="p-3 shadow-xl" key={item._id}>
					<img src={item.imageUrl} alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
					<div className="flex flex-col justify-center items-center mt-3">
						<h2 className="text-2xl capitalize"> {item.title} </h2>
						<p className="text-blue-800">{item.author}</p>
						<p> {item.dprice} </p>
					</div>
				</div>
			))
			:
			<>
			<p>Loading</p>
			</>
		}

	  	{/* <div className="p-3 shadow-xl ">
	  	  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
	              <div className="flex flex-col justify-center items-center mt-3">
	   		<h2 className="text-2xl capitalize"> the lord of the rings </h2>
	  		<p className="text-blue-800"> J.R.R Tolkien</p>
	  		<p> $18 </p>
	  	      </div>
	  	</div>

	  	<div className="p-3 shadow-xl ">
	  	  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
	              <div className="flex flex-col justify-center items-center mt-3">
	   		<h2 className="text-2xl capitalize"> the lord of the rings </h2>
	  		<p className="text-blue-800"> J.R.R Tolkien</p>
	  		<p> $18 </p>
	  	      </div>
	  	</div>

	    <div className="p-3 shadow-xl ">
	  	  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
	              <div className="flex flex-col justify-center items-center mt-3">
	   		<h2 className="text-2xl capitalize"> the lord of the rings </h2>
	  		<p className="text-blue-800"> J.R.R Tolkien</p>
	  		<p> $18 </p>
	  	      </div>
	  	</div>

	    <div className="p-3 shadow-xl ">
	  	  <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/book/z/l/s/the-lord-of-the-rings-original-imaggtnpdjzb8qhg.jpeg?q=90&crop=false" alt="no image" style={{ width:'100%' ,height:'300px' }} className=""/>
	              <div className="flex flex-col justify-center items-center mt-3">
	   		<h2 className="text-2xl capitalize"> the lord of the rings </h2>
	  		<p className="text-blue-800"> J.R.R Tolkien</p>
	  		<p> $18 </p>
	  	      </div>
	  	</div> */}

	 </div>

	  <div className="text-center mt-5">
	  	<Link to={'/allbooks'}>
			<button className="px-3 py-2 border text-white hover:text-blue-500 bg-blue-800 hover:border hover:border-blue-800 hover:text-blue-500 hover:bg-white">
			Explore More
			</button>
		</Link>
	  </div>

	  </section >

	  {  /*  author */ }

	  <section className="flex justify-center items-center flex-col md:p-10 mx:px-40 p-5">
	        <div className="md:grid grid-cols-2">
			<div>
	  		    <div className=" flex justify-center items-center flex-col">
	  			<h3 className="uppercase"> featured authors </h3>
	  			<h3 className="" > Captivates with every word </h3>
	  		    </div>
	  		    <p className="mt-6 text-justify">
	  				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis eius fuga nemo iusto natus officia suscipit rerum. Reiciendis aliquid enim blanditiis totam rerum maxime et perspiciatis, quibusdam recusandae. Magnam.
	    		</p>

	  		<p className="mt-6 text-justify">
	  				Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis eius fuga nemo iusto natus officia suscipit rerum. Reiciendis aliquid enim blanditiis totam rerum maxime et perspiciatis, quibusdam recusandae. Magnam.
	    		</p>

	  		</div>

	  		<div className="px-10 pt-8">
	  			<img src="https://c4.wallpaperflare.com/wallpaper/895/90/420/movie-the-film-matt-bomer-neal-caffrey-wallpaper-preview.jpg" className="w-full" alt="no image" />

	  		</div>
	  	</div>
	  </section>

	  { /* Testimonial Section  */ }

	  <section className="md:p-10">
	  	<h3 className="uppercase text-center">  testimonials </h3>
	  	<h3 className=" text-2xl text-center capitalize"> see what others are saying </h3>

	  	<div className='mt-4  flex justify-center items-center flex-col'>
			<img src="https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=" className="w-[150px] h-[150px] rounded-[50%]" alt="no image" />
			<h6 className="text-2xl mt-3">Sasha Braus </h6>
			<p className="mt-3 p-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates quia voluptatum molestiae enim sunt perferendis in nostrum atque, odit excepturi, nam ex libero dolorem laborum cumque quisquam repudiandae velit. </p>
		</div>

	  </section>

	<Footer />
    </>
  )
}

export default Home
