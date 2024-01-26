import { useEffect, useState } from "react";
import { MENU_LINK } from "./constant";

const useRestaurentMenu = (id) => {
  const [resdata, setresdata] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(MENU_LINK + id);
    const json = await data.json();
    setresdata(json.data);
  };
  return resdata;
};
export default useRestaurentMenu;
