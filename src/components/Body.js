import Rescard from "./Rescard";
import { RESOBJ } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listofRestaurant, setlistofRestaurant] = useState(RESOBJ);
  return (
    <div>
      <div className="search">
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
        {listofRestaurant.map((Data) => {
          return <Rescard key={Data.info.id} resData={Data} />;
        })}
      </div>
    </div>
  );
};

export default Body;
