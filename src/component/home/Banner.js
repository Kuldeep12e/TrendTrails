import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"


const data = [
   
	"https://timesandtrendsacademy.com/wp-content/uploads/1913x870-fashion-slider-final-min.png",
   
    
    "./banner400.png",
	"./ban1.png",
	"./ban2.png",
	"./ban3.png"
	

]
     



const Banner = () => {
  return (
	<Carousel className='carasousel'
	autoPlay ={true}
	animation='slide'
	indicators={false}
	navButtonsAlwaysVisible ={true}
	cycleNavigation ={true}
	navButtonsProps={{
		style:{
			backgroundColor:"#fff",
			color:"#494949",
			borderRadius:0,
			margin:-22,
			height:"104px",
			marginLeft:"5px",
			marginRight:"5px"
		}
	}
		
	}
	
	
	>
		{
			data.map((imag , i)=>{
				return(
				<>
				
				<img src={imag} alt ="" className='banner_img' />
				</>
				)
			})
		}
	
	</Carousel>
  )
}

export default Banner
