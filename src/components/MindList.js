import { Link } from "react-router-dom";
import { CDN_LINK } from "../utils/constant";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
const MindList = ({ data }) => {
  const list = data.card.card.gridElements.infoWithStyle.info;
  const scrollContainerRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust the scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="w-11/12 m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="text-xl  font-bold ">Prathap What's on your mind?</h1>
        <div className="flex px-1">
          <div
            className="sm:right-10 flex px-2  cursor-pointer"
            onClick={handleScrollLeft}
          >
            <div className="w-4 h-4 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
              <ChevronRightIcon className="w-3 h-3  sm:w-5 sm:h-5 transform rotate-180" />
            </div>
          </div>
          <div className="flex  cursor-pointer" onClick={handleScrollRight}>
            <div className="w-4 h-4 sm:w-8 sm:h-8 bg-gray-400 rounded-full flex items-center justify-center text-white">
              <ChevronLeftIcon className="w-3 h-3  sm:w-5 sm:h-5 transform rotate-180" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative  overflow-hidden  shadow-md bg-white  rounded-xl">
        {/* Scrollable Content */}
        <div
          className="flex-shrink-0 flex overflow-hidden h-50"
          ref={scrollContainerRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {list.map((item) => (
            <div key={item.id} className="flex-shrink-0 px-2">
              <Link to={`/collection/${collectionId(item.entityId)}`}>
                <img
                  className="w-16 h-17 sm:w-32 h-34  rounded-md hover:cursor-pointer hover:scale-105 transition-transform"
                  src={`${CDN_LINK}${item.imageId}`}
                  alt={item.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function collectionId(s) {
  const inputString = s;
  const numbersOnly = inputString.match(/\d+/g);
  return numbersOnly.pop();
}

export default MindList;
