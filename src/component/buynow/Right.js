import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Right = ({iteam}) => {

	const [price, setPrice] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {
        let price = 0
        iteam.map((item) => {
            price += item.price.cost
        });
        setPrice(price)
    }
	

  return (
	<div className='right_buy'>
	  <div className='cost_right'>
		<p>Your Order is eligible for FREE Delivery</p> <br/>
		<span style={{color:"#565659"}}>Select this option at checkout.Details</span>
		<h3>Subtotal({iteam.length} items):<span style={{fontWeight:700}}>₹{price}.00</span></h3>
		<NavLink to = "https://rzp.io/l/Gr0ZqfzN">
		<button className='rightbuy_btn'>Proceed to Buy</button>

		</NavLink>
		
		
	  </div>
	</div>
  )
}

export default Right
