import Rescard from "./Rescard";
import { RESOBJ } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnliestatus";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filleterdrestraunt, setfilleterdrestraunt] = useState([]); //listofRestaurant.filter((Data) => Data.info.avgRating > 4.5)
  const [serchtext, setserchtext] = useState("");
  const onlinestatus = useOnlinestatus();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilleterdrestraunt(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  
   if(!onlinestatus) return <h1>it seems like your in offline!!!</h1>
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div>
      <div className="search">
        <div className="searchtext">
          <input
            type="text"
            value={serchtext}
            onChange={(e) => {
              setserchtext(e.target.value);
              let newlist = listofRestaurant.filter((Data) =>
                Data.info.name.toLowerCase().includes(serchtext.toLowerCase())
              );
              setfilleterdrestraunt(newlist);
            }}
          />
          <button>search</button>
        </div>
        <button
          onClick={() => {
            let newlist = listofRestaurant.filter(
              (Data) => Data.info.avgRating > 4.5
            );
            setfilleterdrestraunt(newlist);
            console.log(newlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filleterdrestraunt.map((Data) => {
          return (
            <Link key={Data.info.id} to={"/restaurent/" + Data.info.id}>
              <Rescard resData={Data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
