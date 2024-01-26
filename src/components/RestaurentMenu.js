import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurent";
const RestaurentMenu = () => {
  const { id } = useParams();
  const MenuData = useRestaurentMenu(id);
  console.log()
  if (MenuData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    MenuData.cards[0]?.card?.card?.info;
  const { itemCards } =
    MenuData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
