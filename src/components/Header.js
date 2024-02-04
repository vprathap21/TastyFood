import { LOGO } from "../utils/constant";
import { useState } from "react";
import {
  Bars3Icon,
  BuildingOfficeIcon,
  HomeIcon,
  PhoneIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../features/app/appSlices";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  const { isMenuOpen } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const handleToggleMenu = () => dispatch(toggleMenu());
  const cartitems = useSelector((store) => store.cart.items);
  const loginHandle =() => {
    if(btn === "Login"){
      setbtn("Logout");
    }else{
      setbtn("Login");
    }
  }
  return (
    <header className="sticky w-full  bg-white z-20 px-4 border-b shadow-sm border-gray-200">
      <div className="container-max flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-4">
          <Link to={"/"}>
            <img className=" w-12 sm:w-24 hover:scale-105" src={LOGO}></img>
          </Link>
        </div>

        <ul className="text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex">
          <li>
            <Link
              to="/"
              className="p-2 md:px-4 md:text-xl text-gray-500 font-bold  hover:text-orange-500 rounded-md flex items-center gap-2"
            >
              <HomeIcon className="w-5 h-5 " />{" "}
              <p className="hidden md:block">Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="p-2 md:px-4 md:text-xl text-gray-500 font-bold  hover:text-orange-500 rounded-md flex items-center gap-2"
            >
              <BuildingOfficeIcon className="w-5 h-5" />{" "}
              <p className="hidden md:block">About</p>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="p-2 md:px-4 md:text-xl text-gray-500 font-bold  hover:text-orange-500 rounded-md flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 " />{" "}
              <p className="hidden md:block">Contact</p>
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="p-2 relative md:px-4 md:text-xl text-gray-500 font-bold  hover:text-orange-500 rounded-md flex items-center gap-2"
            >
              <ShoppingCartIcon className="w-5 h-5 " />{" "}
              <p className="hidden md:block">Cart</p>
              {
                <p className="absolute top-1 right-1 bg-orange-500 text-white flex justify-center items-center w-4 h-4 text-xs rounded-full">
                  {cartitems.length}
                </p>
              }
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="p-2 md:px-4 md:text-xl text-gray-500 font-bold  hover:text-orange-500 rounded-md flex items-center gap-2"
            >
              
              <p className="hidden md:block" onClick={loginHandle}>{btn}</p>
              {btn==="Logout"?<UserCircleIcon className="w-5 h-5" />:""}
            </Link>
          </li>
        </ul>

        {!isMenuOpen ? null : (
          <div className="shadow-lg transition-all md:hidden  absolute top-full right-0 bg-white h-screen p-4 px-8">
            <>
              <ul className="text-zinc-700 space-y-4">
                <li>
                  <Link
                    to="/"
                    className="p-2 md:px-4 text-gray-500 hover:text-orange-500 font-bold rounded-md flex items-center gap-2"
                  >
                    <HomeIcon className="w-4 h-4 " /> <p>Home</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="p-2 md:px-4 text-gray-500 hover:text-orange-500 font-bold rounded-md flex items-center gap-2"
                  >
                    <BuildingOfficeIcon className="w-4 h-4 " /> <p>About</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="p-2 md:px-4 text-gray-500 hover:text-orange-500 font-bold  flex items-center gap-2"
                  >
                    <PhoneIcon className="w-4 h-4 " /> <p>Contact</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="p-2 relative md:px-4 text-gray-500 hover:text-orange-500 font-bold rounded-md flex items-center gap-2"
                  >
                    <ShoppingCartIcon className="w-4 h-4 " /> <p>Cart</p>
                    {
                      <p className="absolute top-1 right-1 bg-orange-500 text-white flex justify-center items-center w-4 h-4 text-xs rounded-full">
                        {cartitems.length}
                      </p>
                    }
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="p-2 md:px-4 text-gray-500 hover:text-orange-500 font-bold  flex items-center gap-2"
                  >
                    <UserCircleIcon className="w-5 h-5" /> <p>Login</p>
                  </Link>
                </li>
              </ul>
            </>
          </div>
        )}

        <button className="block md:hidden" onClick={handleToggleMenu}>
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
