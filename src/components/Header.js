import { LOGO } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnliestatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const onlinestatus = useOnlinestatus();
  const cartitems = useSelector((store) => store.cart.items);
  console.log(cartitems);
  return (
    <div className="flex justify-between bg-white  shadow-lg">
      <div className="pl-2">
        <Link to={"/"}>
          <img className=" w-12 sm:w-24" src={LOGO}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex sm:p-4 mx-4">
          <li className="px-2 sm:text-xl sm:px-4 font-bold text-gray-500  hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 sm:text-xl sm:px-4 font-bold text-gray-500 hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 sm:text-xl sm:px-4 font-bold text-gray-500 hover:text-orange-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="sm:px-4 sm:text-xl font-bold text-gray-500 hover:text-orange-500">
            <Link to="/cart">
              <div class="relative pb-2 ">
                <div class="t-0 absolute left-4 bottom-5">
                  <p class="flex h-1 w-1 sm:h-2 sm:w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {cartitems.length}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="file: h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className="px-2 sm:text-xl sm:px-4 font-bold text-gray-500 hover:text-orange-500">
            <Link to={"/login"}>
              <button
                className="login"
                onClick={() => {
                  btn === "Login" ? setbtn("Logout") : setbtn("Login");
                }}
              >
                {btn}
              </button>
            </Link>
          </li>
          {/* <li className="w-1">{onlinestatus ? "" : "🔴️"}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
