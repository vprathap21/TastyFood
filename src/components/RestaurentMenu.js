import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_LINK } from "../utils/constant";
import { useParams } from "react-router-dom";
const RestaurentMenu = () => {
  const [MenuData, setMenuData] = useState(null);
  const { id } = useParams();
  console.log(id);
  const url = MENU_LINK + id;
  console.log(url);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setMenuData(json.data);
  };
  if (MenuData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    MenuData.cards[0]?.card?.card?.info;
  const { itemCards } =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log({ itemCards });
  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3>{areaName}</h3>

      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs.{" "}
              {item.card.info.price || item.card.info.defaultprice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
