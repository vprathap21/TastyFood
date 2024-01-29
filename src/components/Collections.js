import { Link, useParams } from "react-router-dom";
import { COLLECTION_LINK1, COLLECTION_LINK2 } from "../utils/constant";
import { useEffect, useState } from "react";
import RestaurentCatogory from "./RestaurentMenu";
import Rescard from "./Rescard";
const Collections = () => {
  const { id } = useParams();
  const api_link = COLLECTION_LINK1 + id + COLLECTION_LINK2;
  const [mindrestaruants, setmindrestaruants] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(api_link);
    const json = await data.json();
    setmindrestaruants(json.data.cards);
  };
  console.log(mindrestaruants[0]?.card?.card?.description);

  const mindlist = mindrestaruants.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
  );
  console.log(mindlist);
  //const {title,description} = mindrestaruants[0]?.card?.card;
  return (
    <div className="px-12 m-12 ">
      <div className="w-9/12 m-auto p-5">
        <h1 className="font-bold text-3xl py-2">{mindrestaruants[0]?.card?.card?.title}</h1>
        <h1 className="pb-4">{mindrestaruants[0]?.card?.card?.description}</h1>
        <h1 className="font-bold text-xl">{mindrestaruants[0]?.card?.card?.count}</h1>
        <hr></hr>
      </div>
      
      <div className="flex flex-wrap w-9/12 m-auto ">
        {mindlist.map((Data) => {
          return (
            <Link key={Data.card.card.info.id}>
              <Rescard resData={Data.card.card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Collections;
