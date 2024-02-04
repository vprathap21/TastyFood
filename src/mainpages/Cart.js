import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import { selectItemsInCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);

  return (
    <div className=" w-9/12 m-auto py-8 pb-16 ">
      {/* cart details */}
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        {/* cart items */}
        <CartItems />
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && <OrderSummary />}
      </div>
    </div>
  );
};

export default Cart;
