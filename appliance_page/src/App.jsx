import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="header">
        <nav className='navlink'>
        <ul>
        <li><a href="#">SUPEREME STORE</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>

        </ul></nav>
        </div>
        <div>
          <div className="bg1">
          <img src="alloverimage.png"></img>
        <h4>we're dedicated to bringing innovation, convenience, and reliability into your home. Whether you're upgrading your kitchen, enhancing your laundry routine, or seeking smart solutions for every room, we're here to help you make the right choices.
       
Explore our vast selection of cutting-edge appliances designed to simplify your life. From state-of-the-art refrigerators keeping your groceries fresh to energy-efficient washers and dryers transforming laundry day, we've got everything you need to elevate your living space.</h4>
          </div>
          <div classname="bgs">
            <h3>COMBO OFFER ONLY UNTILL JUNE 30 .</h3>
            <br></br>
            <img src="cupboardimg.png"></img>
            <img src="sofa.png"></img>
            <img src="fridge.png"></img>
            <h3>Only At $ 650 Dollars   Discount : 40 % Off</h3><br></br>
            <div className='electronis'>
              <h3 className="laptop">Lenovo IdeaPad Slim 3 AMD Ryzen 5 Quad Core 7520U - (16 GB/512 GB SSD/Windows 11 Home) 15AMN8 Thin and Light Laptop</h3>
              <img src="laptop.png"></img>
              <h2>Original Price : $ 700 Dollars .<span className='lap'> Now At Only $ 550 Dollars </span>,20 /- % off</h2><br></br>
              <div className='mobile'>
                <h3 className='mobiles'>REDMI 5G Mobile Brand Lanch Offer</h3>
                <img src="phone.png"></img>
                <h5 className='phone'>Redmi 12 5G mobile comes with a 90 Hz refresh rate 6.79-inch touchscreen display offering a resolution of 2460x1080 pixels (FHD+). The display sports Gorilla Glass for protection. Redmi 12 5G is powered by an octa-core Qualcomm Snapdragon 4 Gen 2 processor. It comes with 8GB RAM. The Redmi 12 5G runs Android 13 and is powered by a 5000mAh non-removable battery. The Redmi 12 5G supports proprietary fast charging.</h5>
                <h1>Now Available At $ 160 Dollars</h1>
              </div>
              <div className='footer'>
                <h4>We are your one-stop destination for all your appliance needs. From kitchen essentials to home entertainment, we've got you covered.<br></br>
                contact us : 123-456-789 , email id: supremestore@gmail.com</h4>
              </div>
              
            </div>

          </div>
        </div>
       
    </>
  )
}

export default App
