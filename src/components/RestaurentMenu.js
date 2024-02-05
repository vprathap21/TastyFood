import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurent";
import RestaurentCatogory from "./RestaurentCatogory";
import { useState } from "react";
import { CDN_LINK } from "../utils/constant";
import { StarIcon } from "@heroicons/react/24/solid";
const RestaurentMenu = () => {
  const { id } = useParams();
  const MenuData = useRestaurentMenu(id);
  console.log(MenuData);
  const [showindex, setshowindex] = useState(null);
  if (MenuData === null) {
    return  <div className="  sm:w-11/12 sm:m-auto  grid grid-cols-2 mx-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((Data) => {
      return (
        <div key={Data}>
          {" "}
          <Shimmer />
        </div>
      );
    })}
  </div>
  }
  console.log(MenuData);
  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    avgRating,
    city,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = MenuData.cards[0]?.card?.card?.info;
  const { itemCards } =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const catagories =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mx-4">
      <div className="flex justify-between sm:w-6/12 m-auto border-b-2 mt-8 pb-2">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <h1>{cuisines.join(", ")}</h1>
          <h1>
            {city + ", "} {areaName} - {sla.lastMileTravelString}
          </h1>
        </div>
        <div className="border rounded-lg  p-2  h-20 items-center justify-center">
          <div className="flex  mb-2 ">
            {avgRating >= "4" ? (
              <StarIcon className=" w-6 h-6 rounded-full p-1 text-white bg-green-500"></StarIcon>
            ) : (
              <StarIcon className=" w-6 h-6 rounded-full p-1 text-white bg-red-500"></StarIcon>
            )}

            <div className="font-bold ml-2 text-black text-xl">{avgRating}</div>
          </div>

          <h1 className="border-t-2">{totalRatingsString}</h1>
        </div>
      </div>

      {catagories.map((catogory, index) => {
        return (
          <RestaurentCatogory
            key={catogory?.card?.card?.title}
            data={catogory?.card?.card}
            showitem={index === showindex ? true : false}
            setshowindex={() =>
              setshowindex(index === showindex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
