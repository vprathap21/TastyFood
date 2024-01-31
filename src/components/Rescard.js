import StarIcon from "../utils/StarIcon";
import { CDN_LINK } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData?.info;
  const s = "  ";
  return (
    <div className="p-[10px] m-[20px] w-[261px]  shadow-lg rounded-lg bg-white transition ease-in-out   hover:scale-110 ">
      <img
        className=" w-[261px] h-[151px] rounded-xl"
        src={CDN_LINK + cloudinaryImageId}
      ></img>
      <h3 className=" font-bold  text-lg">{name}</h3>
      <h5 className=" text-sm text-[#484848]">{cuisines.join(", ")}</h5>
      <div className="flex items-center">
        <img
          className="h-3 w-2"
          src="https://www.clipartmax.com/png/small/207-2072371_or-combined-to-be-gigantic-location-icon-in-orange-color.png"
          alt=""
        />
        <h5 className="ml-1 text-sm text-[#484848]">{areaName}</h5>
      </div>
      <div className="flex">
        
        <div>{avgRating + costForTwo}</div>
        {/* <StarIcon/> */}
      </div>
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
