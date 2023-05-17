import React from 'react'
import { NavLink } from 'react-router-dom'
import "./address.css"

const Address = () => {
  return (
	<section>
	          
            <div className="sign_container">
			<div className="sign_header">
                    <img src="./logo.jpg" alt="signupimg" />
                </div>
                
                <div className="sign_form">
                    <form method="POST">
                        <h1>DELIVERY ADDRESS</h1>
						<div className="form_data">
                            <label htmlFor="fname">Your Name</label>
                            <input type="text" 
							
							
							name="fname"
                               
                                id="fname" />
                        </div>
						

                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
							
							name="mobile"
                               
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="address">Address</label>
                            <input type="text" 
							
							
							name="address"
                               
                                id="address" />
                        </div>
						<div className="form_data">
                            <label htmlFor="landmark">Landmark</label>
                            <input type="text" 
							
							
							name="landmark"
                               
                                id="landmark" />
                        </div>
						<div className="form_data">
                            <label htmlFor="number">Pincode</label>
                            <input type="text"
							
							name="pin"
                               
                                id="pin" />
                        </div>
						

                        <NavLink to ="https://pages.razorpay.com/pl_LqDJwyNOcbsMAR/view">
                             <button type="submit" className="signin_btn">Save and Deliver here</button>
                             </NavLink>
                       
						<div className='signin_info'>
							
						</div>
                    </form>
                    
                </div>
				</div>

</section>
  )
}

export default Address
