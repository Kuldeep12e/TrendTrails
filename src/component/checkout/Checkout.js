import React ,{ useState }from 'react'
import "./checkout.css"
import { NavLink } from 'react-router-dom'
import { useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const history = useNavigate("");

	const[Addata , setAdData] = useState({
		fname:"",
		number:"" ,
		address:"",
		landmark:"",
		pin:""


	})
	console.log(Addata)
	const adddata = (e) =>{
		const{name,value} = e.target;
		setAdData (()=>{
			return{
				...Addata,
				[name]:value
			}
		})
	};

	const senddata = async(e) =>{
		e.preventDefault();
		const {fname , number , address, landmark ,pin} =Addata;

		const res = await fetch("address" ,{
			method:"POST",
			headers:{
				"Content-Type" : "application/json"
			},
			body:JSON.stringify({
				fname , number , address, landmark ,pin
			})
		});
		const data = await res.json();
		// console.log(data);
		if(res.status === 422 || !data){
			// alert("no data")
			toast.warn("Invalid details",{
				position: "top-center",
			})
		}else{
			// alert("data sucessfully added");
			toast.success("Address added Sucessfull",{
				position: "top-center",
			})
			history("/paymentsuccess");
			setAdData({ ...Addata,fname:"",number:"",address:"",landmark:"",pin:""});
		}
	}





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
							onChange={adddata}
							value = {Addata.fname}
							
							name="fname"
                               
                                id="fname" />
                        </div>
						

                        <div className="form_data">
                            <label htmlFor="number">Mobile</label>
                            <input type="text"
                            onChange={adddata}
							value = {Addata.number}
							
							name="number"
                               
                                id="number" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="address">Address</label>
                            <input type="text" 
							onChange={adddata}
							value = {Addata.address}
							
							name="address"
                               
                                id="address" />
                        </div>
						<div className="form_data">
                            <label htmlFor="landmark">Landmark</label>
                            <input type="text" 
							onChange={adddata}
							value = {Addata.landmark}
							
							name="landmark"
                               
                                id="landmark" />
                        </div>
						<div className="form_data">
                            <label htmlFor="number">Pincode</label>
                            <input type="text"
							onChange={adddata}
							value = {Addata.pin}
							name="pin"
                               
                                id="pin" />
                        </div>
						

                        <NavLink to ="/paymentsuccess">
                             <button type="submit" className="signin_btn"onClick={senddata}>Save and Deliver here</button>
                             </NavLink>
                       
						<div className='signin_info'>
							
						</div>
                        <ToastContainer/>
                    </form>
                    
                </div>
				</div>

</section>
  )
}

export default Checkout
