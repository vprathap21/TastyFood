import { Link } from "react-router-dom";
import { CDN_LINK } from "./constant";
import { useRef } from "react";

const Mind = ({ data }) => {
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
    <div className="relative  overflow-hidden w-11/12 m-auto mt-4 shadow-md  rounded-lg" >
      <h1 className="text-xl font-bold mb-4">Prathap What's on your mind?</h1>

      {/* Scrollable Content */}
      <div className="flex-shrink-0 flex overflow-hidden h-50" ref={scrollContainerRef}   style={{ scrollBehavior: 'smooth' }}>
        {list.map((item) => (
          <div key={item.id} className="flex-shrink-0 px-2">
            <Link to={`/collection/${collectionId(item.entityId)}`}>
              <img
                className="w-32 h-34  rounded-md hover:cursor-pointer hover:scale-105 transition-transform"
                src={`${CDN_LINK}${item.imageId}`}
                alt={item.id}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="absolute top-0 right-10 flex   cursor-pointer" onClick={handleScrollLeft}>
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-0 right-0 flex  cursor-pointer" onClick={handleScrollRight}>
        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
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

export default Mind;
