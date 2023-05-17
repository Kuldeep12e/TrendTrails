import React, { useEffect } from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide';
import "./slide.css"
import { getproducts } from '../redux/action/action';
import { useDispatch ,useSelector } from 'react-redux';

const view = () => {

	const{products} = useSelector(state => state.getproductsdata);
	 
	const dispatch = useDispatch();

	useEffect(()=>{

	   dispatch(getproducts());
	
   },[dispatch]);
  return (
	<section>

	
      <Slide title ="Featured Products"products={products}/>
	  <Slide title ="Today's Deal" products={products}/>
	  <Slide title ="Best Seller"products={products}/>
	  <Slide title ="New Collection"products={products}/>
	  <Slide title ="Upto 50% off" products={products}/>
	  <Slide title ="Upto 80% off" products={products}/>
	  
	  {/* <Slide /> */}
	
	</section>
  )
}

export default view
