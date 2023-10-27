import { CDN_URL } from "../utlis/constant";




const Restuarentcard = (props ) =>{

  const {resdata} = props;
return(
<div className="res-card">
    <img className="image" alt="card-image" src={ CDN_URL + resdata.info.cloudinaryImageId}/>
  <h3>{resdata.info.name}</h3>
  <h4> {resdata.info.cuisines.join(",")}</h4>
<h4> {resdata.info.avgRating} stars</h4>
  <h4>{resdata.info.sla.deliveryTime} Minutes</h4>
  <h4>{resdata.info.costForTwo}</h4>
</div>
);
}

export default Restuarentcard;