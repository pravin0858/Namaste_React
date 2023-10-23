
import React from "react";
 import ReactDOM from "react-dom/client";

 /*
 A) Header
-logo 
-nav items  
 1.home 
 2.about us
 3.contact us      always make a plan of website and then start writing code 
 4.address
 B) body
 -search bar
 -food carts 
 C) Footer 
 - copyright
 -links
 -  

*/

const Header = () =>{
  return (
    <div className="header-container">
      <div className="logo-container">
        <img  className="logo" alt="app logo" src="https://i.pinimg.com/736x/9a/fa/a4/9afaa4a58b2c5e73cdbd7d66c0b2c220.jpg"/>
      </div>
      <div className="header-list">
        <ul className="list">
          <li>Home</li>
          <li>About-Us</li>
          <li>Contact-Us</li>
          <li>Cart</li>
          <li>Sign-Up</li>
        </ul>
      </div>
    </div>
  );
};

const Restuarentcard = (props ) =>{

    const {resdata} = props;


     const {imgsrc,resname,cuisines,rating,time} = resdata;   // this is a object destructuring in js 
  return(
  <div className="res-card">
      <img className="image" alt="card-image" src={imgsrc}/>
    <h3>{resname}</h3>
    <h4> {cuisines}</h4>
  <h4> {rating} stars</h4>
    <h4>{time} Minutes</h4>
  </div>
  );
};  

const objlist = [{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  resname:"KFC",
  cuisines:"Biryani",
  rating:"3.4",
  time:"30",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uoq4wttjlzcqmw4n5jp8",
  resname:"Megana Foods",
  cuisines:"Burger",
  rating:"3.9",
  time:"38",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mhhwkrk1ezrtlviv07d5",
  resname:"veg resturant",
  cuisines:"pizza",
  rating:"3.9",
  time:"48",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ixpi0jovodccvhos8ffv",
  resname:"khushbu veg",
  cuisines:"sultani veg",
  rating:"4.4",
  time:"34",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bnnhmg7xdq896kcz9p7f",
  resname:"Milan veg & Non-veg",
  cuisines:"chicken",
  rating:"7.4",
  time:"20",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xsb5rkxdbmxthxympxbp",
  resname:"duvankur",
  cuisines:" chicken Biryani",
  rating:"3.4",
  time:"60",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gvvdbegf1guwzww6rsbh",
  resname:"camp burger",
  cuisines:"veg  Burger",
  rating:"3.4",
  time:"50",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sqo5mjq43xbwrhtjqydg",
  resname:"shivraj veg & non-veg",
  cuisines:"veg biryani",
  rating:"3.4",
  time:"33",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
  resname:"Garwa Biryani",
  cuisines:"Biryani",
  rating:"5.4",
  time:"31",
},{
  imgsrc :"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
  resname:"Garwa Biryani",
  cuisines:"Biryani",
  rating:"5.4",
  time:"31",
}]

const Body = () =>{
  return(
    <div className="body-container">
      <div className="search-bar">Search</div>
      <div className="res-container">
       
        {
          objlist.map((resturant) => (<Restuarentcard resdata={resturant}/>))  // this map function used for displaying
        }
         {/* /* < Restuarentcard  resdata={objlist[0]}/> 
        <Restuarentcard  resdata={objlist[1]}/> 
        <Restuarentcard  resdata={objlist[2]}/> 
        <Restuarentcard  resdata={objlist[3]}/>  you can also use this code 
        <Restuarentcard  resdata={objlist[4]}/> 
        <Restuarentcard  resdata={objlist[5]}/> 
        <Restuarentcard  resdata={objlist[6]}/> 
        <Restuarentcard  resdata={objlist[7]}/> 
      <Restuarentcard  resdata={objlist[8]}/> */ }
      </div>
    </div>
  );
};

const Applayout = () =>{
  return (
    <div className="App">
    <Header/>
    <Body/>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);