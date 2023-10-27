import Restuarentcard from "./Restuarentcard";
import reslist from "../utlis/Mockdata";
import { useState } from "react";


const Body = () =>{

 const [listofresturent ,setlistresturent] = useState(reslist);



  return(
    <div className="body-container">
      <div className="search-bar">
        <button className="filter-btn" 
        onClick={()=>{
          const filteredlist = listofresturent.filter(
            (res) =>
              res.info.avgRating > 4 
        
          );
          setlistresturent(filteredlist);
       
        }}
        >Top Rated Restuarent </button>
      </div>
      <div className="res-container">
    
       {   listofresturent.map(restuarant => <Restuarentcard  key={restuarant.info.id} resdata={restuarant}/>)
       }
      </div>
    </div>
  );
}

export default Body;