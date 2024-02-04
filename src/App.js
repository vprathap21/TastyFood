import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./mainpages/About";
import Contact from "./mainpages/Contact";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./mainpages/Cart";
import Collections from "./components/Collections";
import Login from "./mainpages/Login";
import Footer from "./components/Footer";
import useOnlinestatus from "./utils/useOnliestatus";
import Home from "./mainpages/Home";
const Applayet = () => {
  const onlinestatus = useOnlinestatus();
  return onlinestatus? (
    <Provider store={appStore}>
      <div className="app flex flex-col min-h-screen bg-gray-50 font-serif box-border">
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </Provider>
  ):(
    <div className=' justify-center items-center '>
          <h1 className='text-4xl font-bold'>Oops! Connection lost</h1>
          <p>
            Looks like you're offline, please check your internet connection.
          </p>
        </div>
  )
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayet />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collection/:id",
        element: <Collections />,
      },
    ],
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
