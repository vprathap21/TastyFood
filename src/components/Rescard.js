import { CDN_LINK } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-[250px]  shadow-lg rounded-lg bg-white hover:bg-gray-100">
      <img
        className="w-60 h-48 rounded-lg"
        src={CDN_LINK + cloudinaryImageId}
      ></img>
      <h3 className=" font-bold py-2 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} ⭐️⭐️</h4>
    </div>
  );
};
//higher order component
export const withpromoted = (Rescard) => {
  return (props) => {
    return (
      <div>
        <label>promoted</label>
        <Rescard {...props} />
      </div>
    );
  };
};

export default Rescard;
