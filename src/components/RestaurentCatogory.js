import { useState } from "react";
import ItemList from "./Itemlist";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
const RestaurentCatogory = ({ data, showitem, setshowindex }) => {
  const onclickHandler = () => {
    setshowindex();
  };
  return (
    <div>
      <div className="sm:w-6/12 bg-gray-50 mx-auto my-8 shadow-sm p-4 rounded-lg">
        <div
          onClick={onclickHandler}
          className="flex justify-between hover:cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className=" text-black hover:cursor-pointer">
            {showitem ? (
              <div>
               <ChevronUpIcon className="w-6 h-6"></ChevronUpIcon>
              </div>
            ) : (
              <div>
                <ChevronDownIcon className="w-6 h-6"></ChevronDownIcon>
              </div>
            )}
          </span>
        </div>
        {showitem && <ItemList data={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurentCatogory;
