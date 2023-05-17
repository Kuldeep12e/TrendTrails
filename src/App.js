
import './App.css';
import Navbar from './component/header/Navbar';
import Newnav from './component/newnavbar/Newnav';
import Maincomp from './component/home/Maincomp';
import Footer from './component/footer/Footer';
import Sign_in from './component/signup_sign/Sign_in';
import SignUp from './component/signup_sign/SignUp';
import Check from './component/checkout/Checkout';
import Cart from './component/cart/Cart';
import Buynow from './component/buynow/Buynow';
import {Routes , Route} from "react-router-dom"
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import About from './component/about/About';
import PaymentSuccess from './component/payment/PaymentSuccess';
import Empty from './component/buynow/Empty';
import Contact from './component/contact/Contact';
import View from './component/home/View';
import Address from './component/address/Address';




function App() {

  const [data , setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true);
      
    },2000)
  },[])

  return (
    <>
    {
      data ? (
        <>
        <Navbar />
    <Newnav />
    <Routes>
      <Route path="/" element={<Maincomp />} />
      <Route path="/login" element={<Sign_in />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
     < Route path="/buynow" element={<Buynow />} />
     < Route path="/checkout" element={<Check />} />
     < Route path="/about" element={<About/>} />
    
     < Route path="/paymentsuccess" element={<PaymentSuccess/>} />
     <Route path ="/empty"  element ={<Empty />} />
     <Route path ="/contact"  element ={<Contact />} />
     <Route path ="/view"  element ={<View />} />
     <Route path ="/address"  element ={<Address />} />


    </Routes>
    
    <Footer />
        
        </>

      ):(
        <div className='circle'>
          <CircularProgress />
          <h2>Loading....</h2>
        </div>
      )

    }
    
    </>
  );
}

export default App;
