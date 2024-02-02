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
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json1 = await data1.json();
    const data2 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json2 = await data2.json();
    let listofRestaurants =
      json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
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
    <div className="sm:px-10 my-2 ">
      <Mind data = {minddata}/>
     <div className="w-4/12 m-auto py-10">
      <form>   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search"  value={serchtext}
            onChange={(e) => {
              setserchtext(e.target.value);
              let newlist = listofRestaurant.filter((Data) =>
                Data.info.name.toLowerCase().includes(serchtext.toLowerCase())
              );
              setfilleterdrestraunt(newlist);
            }} id="default-search" class="block w-full p-3 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required/>
              <button type="submit" class="text-white absolute end-[1PX] bottom-[1PX] bg-orange-500 hover:bg-green-700 font-medium rounded-sm text-sm px-6 py-3">Search</button>
          </div>
      </form>
      </div>
      {/* <div className="flex items-center justify-center p-4 m-4 ">
        
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
      </div> */}
      <div className="  ">
      <div className="  sm:w-11/12 sm:m-auto  grid grid-cols-1 mx-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {filleterdrestraunt.map((Data) => {
          return (
            
            <Link className="" key={Data.info.id} to={"/restaurent/" + Data.info.id}>
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
    </div>
  );
};

export default Body;
