import StarIcon from "../utils/StarIcon";
import { CDN_LINK } from "../utils/constant";

const Rescard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, areaName } =
    resData?.info;
  const s = "  ";
  return (
    <div className="p-2 m-4 shadow-2xl rounded-lg ease-in-out transition hover:scale-90 bg-white">
      <img
        className=" object-cover h-[185px] sm:h-[221px]  rounded-xl shadow-inner  w-full"
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
      <div className="flex  items-center">
        <div>
          {avgRating >= "4" ? (
            <div className="flex rounded-lg justify-center font-bold items-center   text-gray-50">
              <div className="bg-green-600 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div className="font-bold text-black text-lg px-1">{avgRating}</div>
            </div>
          ) : (
            <div className="flex rounded-lg  font-bold items-center   text-gray-50">
              <div className=" bg-red-600 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </div>
              <div className="font-bold text-black text-lg px-1">{avgRating}</div>
            </div>
          )}
        </div>
        <div className="px-4">{costForTwo}</div>
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
