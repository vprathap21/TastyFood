import Rescard, { withpromoted } from "./Rescard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnliestatus";
import { list } from "postcss";
import Mind from "../utils/Mind";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filleterdrestraunt, setfilleterdrestraunt] = useState([]); //listofRestaurant.filter((Data) => Data.info.avgRating > 4.5)
  const [serchtext, setserchtext] = useState("");
  const onlinestatus = useOnlinestatus();
  const [minddata,setminddata] = useState([]);
  const PromotedRescard = withpromoted(Rescard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0040626&lng=79.99372489999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data1.json();
    const data2 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json2 = await data2.json();
    let listofRestaurants =
      json1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    const merge = [
      ...listofRestaurants,
      ...json2.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
    ];
    setminddata(json2.data.cards[0]);
    setlistofRestaurant(merge);
    setfilleterdrestraunt(merge);
  };

  if (!onlinestatus) return <h1>it seems like your in offline!!!</h1>;
  if (listofRestaurant.length === 0) {
    return (
      <div className="px-12 m-12">
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="px-12 m-12 ">
      <Mind data = {minddata}/>
      <div className="flex items-center justify-center p-4 m-4 ">
        <div className="search ">
          <input
            className="border border-black border-solid rounded-sm w-96 h-9"
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
          <button className=" bg-green-100 m-4 ml-0 px-4 py-2 rounded-lg">
            search
          </button>
        </div>
        <div>
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg m-4"
            onClick={() => {
              let newlist = listofRestaurant.filter(
                (Data) => Data.info.avgRating > 4.5
              );
              setfilleterdrestraunt(newlist);
             
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center ">
        {filleterdrestraunt.map((Data) => {
          return (
            
            <Link key={Data.info.id} to={"/restaurent/" + Data.info.id}>
              {Data.info.promoted ? (
                <PromotedRescard resData={Data} />
              ) : (
                <Rescard resData={Data} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
