import { StarIcon } from "@heroicons/react/20/solid";
import { CDN_LINK } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;
 
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData?.info;
  const s = "  ";
  return (
    <>
    <div className="p-2 m-2 md:m-4 rounded-lg  ease-in-out transition hover:scale-90 md:shadow-2xl">
      <div className="overlay-container">
        <img
          className=" object-cover h-[185px] sm:h-[221px]  rounded-xl shadow-inner  w-full"
          src={CDN_LINK + cloudinaryImageId}
        ></img>
        <div className="overlay w-full rounded-md p-2 px-3 ">
          <p className="text-xl font-bold flex gap-2 flex-wrap">
            {resData?.info.aggregatedDiscountInfoV3
              ? resData?.info.aggregatedDiscountInfoV3.header
              : ""}{" "}
            {resData?.info.aggregatedDiscountInfoV3
              ? resData?.info.aggregatedDiscountInfoV3.subHeader
              : ""}
          </p>
        </div>
      </div>
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
      <div className="flex  items-center">
        <div>
          {avgRating >= "4" ? (
            <div className="flex rounded-lg justify-center font-bold items-center   text-gray-50">
              <StarIcon className="h-6 w-6 text-white bg-green-600 p-1 rounded-full" />
              <div className="font-bold text-black text-lg px-1">
                {avgRating}
              </div>
            </div>
          ) : (
            <div className="flex rounded-lg  font-bold items-center   text-gray-50">
              <div>
                <StarIcon className="h-6 w-6 text-white bg-red-600 p-1 rounded-full" />
              </div>
              <div className="font-bold text-black text-lg px-1">
                {avgRating}
              </div>
            </div>
          )}
        </div>
        <div className="px-2 text-sm">{costForTwo}</div>
      </div>
    </div>
    </>
  );
};
//higher order component
export const withpromoted = (Rescard) => {
  return (props) => {
    return (
      <div className='relative'>
        <p className='absolute z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs'>
          Top Rated
        </p>
        <Rescard {...props} />
      </div>
    );
  };
};

export default Rescard;
