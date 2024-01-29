import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurent";
import RestaurentCatogory from "./RestaurentCatogory";
import { useState } from "react";
const RestaurentMenu = () => {
  const { id } = useParams();
  const MenuData = useRestaurentMenu(id);
  const [showindex, setshowindex] = useState(null);
  if (MenuData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    MenuData.cards[0]?.card?.card?.info;
  const { itemCards } =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const catagories =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg  ">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
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
