import Rescard from "./Rescard";
import { RESOBJ } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filleterdrestraunt, setfilleterdrestraunt] = useState([]); //listofRestaurant.filter((Data) => Data.info.avgRating > 4.5)
  const [serchtext, setserchtext] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setlistofRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilleterdrestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   
  };
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="search">
        <div className="searchtext">
          <input type="text" value={serchtext} onChange={(e) => {
            setserchtext(e.target.value);
            let newlist = listofRestaurant.filter(
              (Data) => Data.info.name.toLowerCase().includes(serchtext.toLowerCase())
            );
            setfilleterdrestraunt(newlist);
          }
          } />
          <button>search</button>
        </div>
        <button
          onClick={() => {
            let newlist = listofRestaurant.filter(
              (Data) => Data.info.avgRating > 4.5
            );
            setlistofRestaurant(newlist);
            console.log(listofRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filleterdrestraunt.map((Data) => {
          return <Rescard key={Data.info.id} resData={Data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
