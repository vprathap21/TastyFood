import { CDN_LINK } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img className="resimg" src={CDN_LINK + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} ⭐️⭐️</h4>
    </div>
  );
};

export default Rescard;
