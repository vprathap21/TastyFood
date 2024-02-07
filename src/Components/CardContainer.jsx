import { useEffect, useState, useContext, useRef } from "react";
import { FoodCard } from "./FoodCard";
import { Button } from "@material-tailwind/react";
import { ShimmerContainer } from "./ShimmerContainer";
import { SearchContext } from "../Utils/SearchContext";
import { CDN_LINK, CDN_URL } from "../Utils/constants";

function CardContainer() {
  const { search, searchClicked, setSearchClicked } = useContext(SearchContext);
  const foodSectionRef = useRef(null);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [food, setfood] = useState([]);
  const searchButton = () => {
    const filterData = data.filter((e) =>
      e.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterData);
  };

  const handleAll = () => {
    setFilteredData(data);
  };

  const handleTopRated = () => {
    const filterData = data?.filter((res) => res?.info?.avgRating > 4.2);
    setFilteredData(filterData);
  };

  const handleDelivery = () => {
    let filterData = data?.filter((res) => res?.info?.sla?.deliveryTime < 30);
    setFilteredData(filterData);
  };

  const handleVeg = () => {
    const filterData = data?.filter((res) => res?.info?.veg == true);
    setFilteredData(filterData);
  };

  const handlePizza = () => {
    const filterData = data?.filter((res) =>
      res?.info?.cuisines?.join()?.includes("Pizza")
    );
    setFilteredData(filterData);
  };

  const handleDesserts = () => {
    const filterData = data?.filter((res) =>
      res?.info?.cuisines?.join()?.includes("Desserts")
    );
    setFilteredData(filterData);
  };

  const handleNorthIndian = () => {
    const filterData = data?.filter((res) =>
      res?.info?.cuisines?.join()?.includes("North Indian")
    );
    setFilteredData(filterData);
  };

  const handleChinese = () => {
    const filterData = data?.filter((res) =>
      res?.info?.cuisines?.join()?.includes("Chinese")
    );
    setFilteredData(filterData);
  };

  const onClickHandle = ({props}) => {
    const item = props.charAt(0).toUpperCase() + props.slice(1);
    const filterData = data?.filter((res) =>
      res?.info?.cuisines?.join()?.includes(item)
    );
    console.log(filterData)
    setFilteredData(filterData);
  };

  const fetchData = async () => {
    const data = await fetch(CDN_URL);
    const json = await data?.json();
    const updatedData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredData(updatedData);
    setData(updatedData);
    setfood(json?.data?.cards[0].card.card.gridElements.infoWithStyle.info)
  };

  useEffect(() => {
    if (searchClicked) {
      setSearchClicked(false);
      searchButton();

      if (foodSectionRef.current) {
        foodSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [searchClicked]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(food);

  //Conditional Rendering
  if (data?.length === 0) {
    return <ShimmerContainer />;
  }

  return (
    <>
      <div className="flex flex-col gap-10 py-10 sm:px-24 px-6 whitespace-nowrap overflow-x-auto scrollbar-hide">
        <h1 className="text-2xl font-bold text-center sm:text-left py-2">
          What do you want to eat?
        </h1>
        <div className="flex gap-10 flex-row  whitespace-nowrap overflow-x-auto scrollbar-hide">
          {
            food?.map((item) => {
              return  <div
              key={item?.id}
              className="flex flex-col align-middle justify-center hover:cursor-pointer"
              onClick={() => onClickHandle({props: item?.action?.text})}
            >
              <img
              src={CDN_LINK + item?.imageId}
                className=" rounded-full h-40 w-40 object-cover bg-white object-top pb-4"
              />
              <h1 className="text-center font-semibold w-40 text-brown-600">
                {item?.action?.text}
              </h1>
            </div>
            })
          }
        </div>
      </div>

      <h1
        className="text-2xl font-bold px-2 text-center sm:text-left pt-14 pb-12 sm:px-24"
        ref={foodSectionRef}
        id="food"
      >
        Top restraunts around you
      </h1>
      <div className="flex w-[100%]  gap-10 whitespace-nowrap overflow-x-auto scrollbar-hide sm:px-24 px-2 ">
        <Button variant="filled" onClick={handleAll} className="ml-12 sm:ml-0">
          All
        </Button>
        <Button variant="filled" onClick={handleTopRated}>
          Top Rated
        </Button>
        <Button variant="filled" onClick={handleDelivery}>
          Fast Delivery
        </Button>
        <Button variant="filled" onClick={handleVeg}>
          Pure Veg
        </Button>
      </div>
      {filteredData.length > 0 ? (
        <div className="w-[100%] flex flex-wrap gap-16 justify-center py-10">
          {filteredData.map((index) => (
            <FoodCard key={index?.info?.id} resData={index} />
          ))}
        </div>
      ) : (
        <p className=" text-3xl w-[100%] py-36 font-bold text-center">
          No Restaurants Found
        </p>
      )}
    </>
  );
}

export default CardContainer;
