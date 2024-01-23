import { LOGO } from "../utils/constant";
import {useState} from "react";

const Header = () => {
  const [btn,setbtn]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO}></img>
      </div>
      <div className="nav-container">
        <ul className="navitems">
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btn === "Login" ? setbtn("Logout") : setbtn("Login");
          }}>{btn}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
