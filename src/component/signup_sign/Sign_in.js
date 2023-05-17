import React, { useState ,useContext } from 'react'
import "./signup.css"
import { NavLink } from 'react-router-dom'
import { useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';


const Sign_in = () => {
    const history = useNavigate("");

	const[logdata , setData] = useState({
		email:"" ,
		password:""

	});

    const {account , setAccount} = useContext(LoginContext);
	
	const adddata = (e) =>{
		const{name,value} = e.target;
		setData (()=>{
			return{
				...logdata,
				[name]:value
			}
		})
	};
	const senddata = async (e) => {
        e.preventDefault();

		const { email, password } = logdata;
        // console.log(email);
        
            const res = await fetch("login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();
            console.log(data);

            if (res.status === 400 || !data) {
                console.log("invalid details");
				toast.warn("Invalid details",{
					position: "top-center",
				})
               
            } else {
                setData({ ...logdata, email:"",password:""});
				console.log("data valid");
                setAccount(data)
               
               
				toast.success("Login Sucessfull",{
					position: "top-center",
				})
                history("/");
                // setAccount(data);
               
            }
       
    };

  return (
	
	  <section>
	          
            <div className="sign_container">
			<div className="sign_header">
                    <img src="./logo.jpg" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
							onChange={adddata}
							value={adddata.email}
							
							name="email" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                               onChange={adddata}
							   value={adddata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={senddata} >Continue</button>
                    </form>
					
                    
                </div>
				<div className='create_accountinfo'>
					<p>New to TrendTrails</p>
					<NavLink to="/register"><button>Create Your Account</button></NavLink>

				</div>
				
               
            </div>
			<ToastContainer />

        </section>
	
	
	
  )
}

export default Sign_in
