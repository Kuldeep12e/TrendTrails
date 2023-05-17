import React, { useEffect, useState } from 'react'
import "./buynow.css"
import Option from './Option';
import Right from './Right';
import Subtotal from './Subtotal';
import Empty from './Empty';
import { Divider } from '@mui/material'
import { NavLink } from 'react-router-dom';

const Buynow = () => {

	
	

	const [cartdata , setCartdata] = useState("");
	console.log(cartdata)
	
	console.log("ya bati");

	const getdatabuy = async()=>{
		const res = await fetch("/cartdetails",{
			method:"GET",
			headers:{
				Accept:"application/json" ,
				"Content-Type":"application/json"
			},
			credentials : "include"
		});
		const data = await res.json();
		console.log("yaha dtak sahi ba ho")

		if(res.status !== 201){
			console.log("error");
		}else{
			setCartdata(data.carts);
			
		}
	};
	useEffect(()=>{
		getdatabuy();
	},[]);

  return (
		<>{
			cartdata.length ? <div className='buynow_section'>
			<div className='buynow_container'>
			<div className='left_buy'>
			  <h1>Shopping Cart</h1>
			  <p>Select all items</p>
			  <span className='leftbuyprice'>Price</span>
			  <Divider />
			  {
				cartdata.map((e,k)=>{
					return(
						<>
						<div className='item_containert'>
				  <img src={e.detailUrl} alt='' />
				  <div className='item_details'>
					  <h3> {e.title.longTitle}</h3>
					  <h3>{e.title.shortTitle}</h3>
					  <h3 className='differentprice'></h3>
					  <p className='unusuall'>Usually dispatch in 8 days</p>
					  <p>Eligible for Free Shipping</p>
					  <Option deletedata={e.id} get={getdatabuy} />
				  </div>
				  <h3 className='item_price'>₹{e.price.cost}</h3>
			  </div>
			  <Divider />
			
						
						</>
					)
					})
				}
			  
	  
			 
			  <Subtotal iteam={cartdata}/>
			 </div>
			 <Right iteam={cartdata}/>
	  
			</div>
			 
		  </div>:<Empty/>
			  
		}
		
		
		</>

  )
	
}

export default Buynow
