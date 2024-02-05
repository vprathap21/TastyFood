import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Rescard, { withpromoted } from "./Rescard";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import Mind from "./MindList";
import Shimmer from "./Shimmer";
import axios from "axios";
import useOnlinestatus from "../utils/useOnliestatus";
import { generateProxyUrl, PROXY_CORS} from "../utils/constant";
const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [filleterdrestraunt, setfilleterdrestraunt] = useState([]); //listofRestaurant.filter((Data) => Data.info.avgRating > 4.5)
  const [serchtext, setserchtext] = useState("");
  const onlinestatus = useOnlinestatus();
  const [minddata, setminddata] = useState([]);
  const PromotedRescard = withpromoted(Rescard);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      console.log(response.data);
      setminddata(response.data.cards[0]);
      setlistofRestaurant(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setfilleterdrestraunt(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  // const fetchData = async () => {
  //   const resource = generateProxyUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const resource2 = generateProxyUrl("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const data1 = await fetch(resource);
  //   const json1 = await data1.json();
  //   console.log(json1.data)
  //   const data2 = await fetch(resource2);
  //   const json2 = await data2.json();
  //   let listofRestaurants =
  //     json1.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
  //   const merge = [
  //     ...listofRestaurants,
  //     ...json2.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  //   ];
  //   setminddata(json2.data.cards[0]);
  //   setlistofRestaurant(merge);
  //   setfilleterdrestraunt(merge);
  // };

  if (!onlinestatus) return <h1>it seems like your in offline!!!</h1>;
  if (listofRestaurant.length === 0) {
    return (
      <div className="  sm:w-11/12 sm:m-auto  grid grid-cols-2 mx-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((Data) => {
          return (
            <div key={Data}>
              {" "}
              <Shimmer />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="sm:px-10 my-2 ">
      <Mind data={minddata} />
      <div className="flex items-center mx-2 md:w-6/12 md:m-auto">
        <div className=" w-3/4  py-10 p-4 ">
          <form>
            <div class="relative">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 absolute top-2 md:top-3 md:left-2 p-1 md:p-0 " />
              <input
                type="search"
                value={serchtext}
                onChange={(e) => {
                  setserchtext(e.target.value);
                  let newlist = listofRestaurant.filter((Data) =>
                    Data.info.name
                      .toLowerCase()
                      .includes(serchtext.toLowerCase())
                  );
                  setfilleterdrestraunt(newlist);
                }}
                id="default-search"
                class="block w-full p-2 md:p-3 md:pl-8 ps-10 text-sm text-black border border-gray-400 outline-none hover:border-orange-500 rounded-lg bg-gray-50"
                placeholder="Search your restaurent..."
              />
              <button
                type="submit"
                class="text-white absolute end-[1PX] bottom-[1PX] bg-orange-500 hover:bg-green-700 font-medium rounded-md text-sm md:px-6 md:py-3 px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <button
            className="bg-gray-200 p-2 text-sm  rounded-lg m-4"
            onClick={() => {
              let newlist = listofRestaurant.filter(
                (Data) => Data.info.avgRating > 4.5
              );
              setfilleterdrestraunt(newlist);
            }}
          >
            <AdjustmentsHorizontalIcon className="w-6 h-6 text-gray-500"></AdjustmentsHorizontalIcon>
          </button>
        </div>
      </div>

      <div className="  ">
        <h1 className=" ml-3 md:ml-24  text-2xl font-bold mb-4 text-gray-700">Restaurants near you</h1>
        <div className="  sm:w-11/12 sm:m-auto  grid grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
          {filleterdrestraunt.map((Data) => {
            return (
              <Link
                className=""
                key={Data.info.id}
                to={"/restaurent/" + Data.info.id}
              >
                {Data?.info?.Promoted > 4.5 ? (
                  
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
