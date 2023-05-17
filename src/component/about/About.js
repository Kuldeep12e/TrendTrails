import React from "react";
import "./about.css";

const About = () => {
  return (
    <section>
      <div id="page-header" className="about-header">
        <h2>#Know Us</h2>
        <p>Read all the case about our services</p>
      </div>

      <div id="about-head" className="section-p1">
        <img src="./a6.jpg" alt="" />
        <div>
          <h2>Introduction</h2>
          <p>
            TrendTrails is a one stop shop for all your fashion and lifestyle
            needs. Being India's largest e-commerce store for fashion and
            lifestyle products, Our aims at providing a hassle free and
            enjoyable shopping experience to shoppers across the country with
            the widest range of brands and products on its portal. The brand is
            making a conscious effort to bring the power of fashion to shoppers
            with an array of the latest and trendiest products available in the
            country{" "}
          </p>
        </div>
      </div>
	  <div id ="about-app" className="section-p1">
		  <h1> Shop Now</h1>
		  <div className="video">
			<img src="main-2.gif" />
		  </div>
	  </div>
	  <div id="feature" className="section-p1">
        <div className="fe-box">
            <img src="./f1.png" alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div className="fe-box">
            <img src="./f2.png" alt=""/>
            <h6>Online Order</h6>
        </div>
        <div className="fe-box">
            <img src="./f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div className="fe-box">
            <img src="./f4.png" alt=""/>
            <h6>Promotion</h6>
        </div>
        <div className="fe-box">
            <img src="./f5.png" alt=""/>
            <h6>Happy Selling</h6>
        </div>
        <div className="fe-box">
            <img src="./f6.png" alt=""/>
            <h6>F24/7 Support</h6>
        </div>
		</div>
		<div id="newsletter"className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
		</div>
    </section>
  );
};

export default About;
