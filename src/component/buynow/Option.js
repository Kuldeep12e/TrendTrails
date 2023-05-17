import{ React ,useContext} from 'react'
import {LoginContext} from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const option = ({deletedata, get}) => {

	const {account , setAccount} = useContext(LoginContext);


	const removedata = async (id) => {
        try {
            const res = await fetch(`remove/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
			const data = await res.json();
			console.log(data);

			if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
				console.log("remove time success");
				setAccount(data)
				get();
                 
				 toast.success("item removed from carts",{
					position: "top-center",
				})
				
                  
                // toast.success("Iteam remove from cart 😃!", {
                //     position: "top-center"
                // });
            }
        } catch (error) {
            console.log(error);
        }

	}

  return (
	<div className='add_remove_select'>
	  
	 
			<p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>Delete</p><span>|</span>
			
			
			<ToastContainer />
	</div>
  )
}

export default option 
