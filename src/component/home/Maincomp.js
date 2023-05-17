import React, { useEffect } from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide';
import "./slide.css"
import { getproducts } from '../redux/action/action';
import { useDispatch ,useSelector } from 'react-redux';

function Maincomp() {
	 const{products} = useSelector(state => state.getproductsdata);
	 
	 const dispatch = useDispatch();

	 useEffect(()=>{

		dispatch(getproducts());
	 
	},[dispatch]);



  return (
	<div className='home_section'>
	  <div className='banner_part'>
		<Banner />
		
	  </div>
	  <div className='slide_part'>
		<div className='left_slide'>
           <Slide title ="Deal of the day" products={products}/>
		</div>
		<div className='right_slide'>
			<h4>Festive Latest launches</h4>
			<img src='f1.jpg' alt='' />
			<a href='/view'>see more</a>
		</div>
	  </div>
	  <Slide title ="Today's Deal" products={products}/>
	  <Slide title ="Best Seller"products={products}/>
	  <div className='center_img'>
	  <img src="./banner200.png" alt=''/>
	  </div>
	    
	  <Slide title ="Upto 50% off" products={products}/>
	  <Slide title ="Upto 80% off" products={products}/>
	  
	  {/* <Slide /> */}
	</div>
  )
}

export default Maincomp
