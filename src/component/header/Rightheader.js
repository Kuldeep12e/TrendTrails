import React ,{useContext} from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../context/ContextProvider';
import {NavLink} from "react-router-dom";
import { Divider } from '@mui/material';
import "./rightheader.css";

const Rightheader = ({Logclose}) => {

	const { account, setAccount } = useContext(LoginContext);
  return (
	<>
	 <div className="right-header">
		<div className='right_nav'>
		{
                    account ?
                        <Avatar className="avtar2"
                             title={account.fname.toUpperCase()}>{account.fname[0].toUpperCase()}</Avatar> :
                        <Avatar className="avtar"
                     />
                }
				{account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""}

		</div>
		<div className='nav_btn' onClick={()=>Logclose()}>
		<NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop </NavLink>
                <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                <NavLink to="/" style={{ marginTop: 10 }}>Today's Deal</NavLink>
				{
                    account ? <NavLink to="/buynow">Your Order</NavLink> : <NavLink to="/login">Your Order</NavLink>
                }

				<Divider style={{ width: "100%", marginLeft: "-20px" }} />
                <div className="flag">
                    <NavLink to="/" style={{ marginTop: 14 }}>Settings</NavLink>
					<img src="" alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                </div>

		</div>
	
	</div>
	
	</>
  )
}

export default Rightheader
