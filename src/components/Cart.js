import { useState } from "react";
import { useSelector } from "react-redux";
import { CDN_LINK } from "../utils/constant";
import ItemList from "./Itemlist";
const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const [cartitems, setCartitems] = useState(items);
    return <div className="w-6/12 m-auto">
        <ItemList data={cartitems} />
    </div>
}
export default Cart;