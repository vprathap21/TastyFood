import { useState } from "react";
import ItemList from "./Itemlist";

const RestaurentCatogory = ({data, showitem,setshowindex}) => {
 
  const onclickHandler = () => {
   setshowindex();
    
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 rounded-lg">
        <div onClick={onclickHandler} className="flex justify-between hover:cursor-pointer">
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span className="hover:cursor-pointer">{showitem?"⬆️":"⬇️"}</span>
        </div>
        {showitem && <ItemList data = {data.itemCards}/>}
      </div>
    </div>
  );
};
export default RestaurentCatogory;
