import { useState } from "react";
import ItemList from "./Itemlist";

const RestaurentCatogory = ({ data, showitem, setshowindex }) => {
  const onclickHandler = () => {
    setshowindex();
  };
  return (
    <div>
      <div className="sm:w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4 rounded-lg">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
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
