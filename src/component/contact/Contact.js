import React from 'react'
import "./contact.css"
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

	


		
	
  return (
	<section>
	<div id="page-header" className="about-header">
	  <h2>#let's_talk</h2>
	  <p>LEAVE A MESSAGE , We love to here from you</p>
	</div>
	<div id='contact-details' className='section-p1'>
       <div className='details'>
		<span>GET IN TOUCH</span>
		<h2>Visit one of our agency location or contact us today</h2>
		<h3>Head office</h3>
		<div>
			<li>
				<MapIcon className='li'/>
				<p>56 Kharar Landran Road Mohali Chandigarh</p>
			</li>
			<li>
				<EmailIcon className='li'/>
				<p>TrendTrails@email.com</p>
			</li>
			<li>
				<CallIcon className='li'/>
				<p>8905979316</p>
			</li>
			<li>
				<AccessTimeIcon className='li'/>
				<p>Monday to Saturday : 9.00pm  to 16:00pm</p>
			</li>
		</div>
	   </div>
	   <div className='map'>
	   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27431.92533101414!2d76.63255306398601!3d30.746763672922086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe555e7bf2e91%3A0xffb409b433075d3!2sKharar%2C%20Punjab%20140301!5e0!3m2!1sen!2sin!4v1684148805265!5m2!1sen!2sin" style={{width :600, height:450, border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
	</div>
	</div>

       

	<div id='form-details'>
		<form action=''>
			<span>LEAVE A MESSAGE</span>
			<h2>We love to here from you</h2>
			<input type='text' placeholder='Your Name' />
			<input type='text' placeholder='Email' />
			<input type='text' placeholder='Subject' />
			<textarea name='' id='' style={{cols:30 ,rows:10 }}placeholder='Your Message'></textarea>
			

			<button className='normal'  >Submit</button>
			<ToastContainer/>
		</form>
		<div className='people'>
			<div>
				<img src='' alt='' />
				<p><span>Kuldeep Yadav</span> Senior Marketing Manager <br/> Phone :+91 -8905979316  <br/> Email : kuldeep@email.com</p>
			</div>
			<div>
				<img src='' alt='' />
				<p><span>Kuldeep Yadav</span> Senior Marketing Manager <br/> Phone :+91 -8905979316  <br/> Email : kuldeep@email.com</p>
			</div>
			<div>
				<img src='' alt='' />
				<p><span>Kuldeep Yadav</span> Senior Marketing Manager <br/> Phone :+91 -8905979316  <br/> Email : kuldeep@email.com</p>
			</div>
		</div>
	</div>
	<div id="newsletter"className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal" >Sign Up</button>
        </div>
		</div>
	
	</section>
  )
}

export default Contact
