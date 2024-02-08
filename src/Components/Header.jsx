import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Badge,
  List,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { SearchContext } from "../Utils/SearchContext";
import { useSelector } from "react-redux";
import { useState } from "react";

const NavList = () => {
  const { search, setSearch, setSearchClicked } = useContext(SearchContext);
  const navigate = useNavigate();
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <div className="peer flex h-full w-full justify-between rounded-[7px] border border-blue-gray-200 border-t-transparent !border-t-blue-gray-300 bg-transparent px-3 py-2.5 pl-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-blue-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        <input
          type="search"
          placeholder="Search Restraunts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" border-t-transparent !border-transparent bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-transparent focus:border-2  focus:!border-transparent focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-transparent"
        />
        <Link to="#food">
          <button
            className="select-none rounded-[50%] bg-gray-900 py-2 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={() => {
              setSearchClicked(true);
              navigate("/"); // Use useNavigate instead of history.push
              setTimeout(() => {
                navigate("/#food"); // Use useNavigate instead of history.push
              }, 0);
            }}
          >
          <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </List>
  );
};

export const Header =() => {
  const [openNav, setOpenNav] = useState(false);
  const [btn, setbtn] = useState("Login");
  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const btnhandler = () => {
    btn === "Login" ? setbtn("Logout") : setbtn("Login");
  }
  return (
    <Navbar className="mx-auto my-5 max-w-screen-xl px-4 py-2 bg-white">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink to="/">
          {/* <img src={LOGO_URL} className="h-[5em]" /> */}
        
          <span className="text-blue-900 font-bold text-4xl font-serif">Tasty</span>
          <span className="text-blue-800 font-extrabold text-4xl font-serf">Bite</span>
        </NavLink>
        <div className="hidden lg:block">
        <NavList />
        </div>
        <div className="hidden gap-2 lg:flex lg:justify-center items-center">
          <NavLink to="/cart">
            <Button variant="text" size="sm" color="blue-gray">
              <Badge
                content={cartItems.length}
                className={cartItems.length === 0 ? "hidden" : ""}
              >
               <ShoppingCartIcon className="h-6 w-6" />
              </Badge>
            </Button>
          </NavLink>
          <Button variant="text" size="sm" color="blue-gray" onClick={btnhandler}>
           {btn == "Login"?btn: <UserCircleIcon className="h-6 w-6" />}
          </Button>
          <Link to="https://github.com/vprathap21">
            <Button variant="gradient" size="sm">
              Github
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <NavLink to="/cart" className="sm:hidden block">
          <Button variant="text" size="sm" color="blue-gray">
            <Badge
              content={cartItems.length}
              className={cartItems.length === 0 ? "hidden" : ""}
            >
                 <ShoppingCartIcon className="h-6 w-6" />
            </Badge>
          </Button>
        </NavLink>
      </div>

      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center justify-between gap-2 lg:hidden">
          <Link to="https://github.com/vprathap21">
            <Button variant="gradient" className="w-[100%]">
              Github
            </Button>
          </Link>
          <Button variant="text" size="sm" color="blue-gray" onClick={btnhandler}>
           {btn == "Login"?btn: <UserCircleIcon className="h-6 w-6" />}
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
