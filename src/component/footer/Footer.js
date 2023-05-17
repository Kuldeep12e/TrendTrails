import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const year = new Date().getFullYear();
    console.log(year);
  return (
	<footer>
            <div className="footer_container">
                <div className="footr_details_one">
                    <div className='foot-er'>
                    <h3>About</h3>
                    </div>
                   
                    <NavLink to ="/contact"><p>Contact Us</p></NavLink>
                    <NavLink to ="/about"><p>About Us</p></NavLink>
                    <NavLink to ="/contact"><p>Customer Care</p></NavLink>
                </div>
                <div className="footr_details_one">
                    <h3>Connect with Us</h3>
                    <NavLink to ="https://www.facebook.com/"><p>Facebook</p></NavLink>
                    <NavLink to ="https://www.instagram.com/"><p>Instagram</p></NavLink>
                    <NavLink to ="https://in.linkedin.com/"><p>LinkedIn</p></NavLink>
                </div>
                <div className="footr_details_one forres">
                    <h3>Registered Office</h3>
                    <p>TrendTrail Private Limited</p>
                    <p>Chandigarh Mohali Punjab</p>
                    <p> +91-8905979316</p>
                </div>
                <div className="footr_details_one forres">
                    <h3>Let Us Help You</h3>
                    <p>Account</p>
                    <p>Order</p>
                    <NavLink to = "/"><p>Home</p> </NavLink>
                </div>
            </div>
            <div className="lastdetails">
                <img src="./logo.jpg" alt="logo" />
                <p>Conditions of Use & Sale &nbsp; &nbsp;&nbsp;  Privacy Notice  &nbsp; &nbsp;&nbsp; Interest-Based Ads  &nbsp; &nbsp;&nbsp;  © 1996-{year}, TrendTrail.com, Inc. or its affiliates</p>
            </div>
        </footer>
    )
}

  


export default Footer
