import { useSelector, useDispatch } from "react-redux";
import { CDN_LINK } from "../Utils/constants";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../Utils/cartSlice";
import { Button } from "@material-tailwind/react";

const CartItems = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();
  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));
  if (cartItems.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex gap-4 justify-between max-w-[600px] my-4 border-black border-b-2 pb-4"
          >
            <div className="basis-3/12">
              <img
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                src={CDN_LINK + item?.item?.card?.info?.imageId}
                alt=""
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold">
                {item?.item?.card?.info?.name}
              </p>

              <p className="hidden md:block">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-semibold">
                  ₹
                  {parseFloat(
                    (
                      item?.quantity *
                      parseFloat(item?.item?.card?.info?.price / 100)
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  ({item?.item?.card?.info?.price / 100} × {item?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                    }
                  >
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>

                <Button
                  className="w-28 hover:bg-red-600 bg-transparent shadow-none mt-4 hover:text-white border-red-600 border-2 text-red-600"
                  onClick={() => removeItem(item?.item?.card?.info?.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};
export default CartItems;
