import { useDispatch } from "react-redux";
import { CDN_LINK } from "../utils/constant";
import { addToCart } from "../utils/cartSlice";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();
  const addHandler = (item) => {
    dispatch(addToCart(item));
  }
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-between my-4 p-4 border border-solid-black rounded-lg hover:bg-gray-100"
          >
            <div className="w-9/12">
              <h2 className="text-left font-bold py-2">
                {item.card.info.name} - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h2>
              <p className="text-left py-2">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
             
              <img
                className="rounded-lg "
                src={CDN_LINK + item.card.info.imageId}
              ></img>
               <div className="items-center text-center ">
                <button className=" text-center  p-1 px-2 md:px-4  ms:p-2 bg-green-200 hover:bg-green-500 rounded-md" onClick={() => addHandler(item)}>Add </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
