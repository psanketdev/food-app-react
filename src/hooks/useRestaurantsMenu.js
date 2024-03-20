import { useEffect, useState } from "react"
import urls from "../utils/utils";

const useRestaurantsMenu = (id) => {
  const [restoMenu, setRestoMenu] = useState(null);

  useEffect(() => {
    fetchResoMenuData();
  }, []);

  const fetchResoMenuData = async () => {
    const response = await fetch(urls.API_MENU + id);
    const res = await response.json();
    setRestoMenu(res); 
  }

  return restoMenu;
}

export default useRestaurantsMenu;