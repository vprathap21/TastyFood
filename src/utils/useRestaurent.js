import { useEffect, useState } from "react";
import { MENU_LINK } from "./constant";
import axios from "axios";
import { generateProxyUrl, PROXY_CORS} from "../utils/constant";
const useRestaurentMenu = (id) => {
  const [resdata, setresdata] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const resource = generateProxyUrl(MENU_LINK + id);
    const data1 = await axios.get(resource);

    setresdata(data1?.data?.data);
  };
  return resdata;
};
export default useRestaurentMenu;
