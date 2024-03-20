import { useEffect, useState } from "react";
import Restaurants, { withPromotedResto } from "./Restaurants";
import urls from "../utils/utils";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [filterResto, setFilterResto] = useState([]);
  const [searchResto, setSearchResto] = useState("");
  const status = useOnlineStatus();
  useEffect(() => {
    fetchSwiggyData();
  }, []);


  const RestaurantsCardPromoted = withPromotedResto(Restaurants);

  if (status === false)
    return (
      <h1>Look Likes you offline!!. Please check your internet connection.</h1>
    );

  // Fetch swiggy Data
  const fetchSwiggyData = async () => {
    const response = await fetch(urls.APi_URL);
    const jsonResponse = await response.json();
    setListOfResto(
      jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterResto(
      jsonResponse?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfResto?.length == 0 ? (
    // show the shimmer component here...
    <h1 className="font-bold text-2xl mt-4">Loading...</h1>
  ) : (
    <section className="mt-10">
      <div className="container w-9/12 mx-auto">
        <h2 className="font-bold text-2xl text-stone-900 mb-8">Top restaurant chains in Mumbai</h2>
        <hr />
        <div className="resto-filter flex items-center my-8">
          <div className="form-group mr-5">
            <input
              type="text"
              className="border  w-[250] mr-7 py-2 px-2 rounded-md border-slate-400"
              value={searchResto}
              onChange={(e) => {
                setSearchResto(e.target.value);
              }}
            />
            <button
            className="rounded border-2 border-orange-400  py-2 px-4 text-sm text-orange-600 font-semibold"
              onClick={() => {
                const searchItem = listOfResto.filter((items) =>
                  items.info.name
                    .toLowerCase()
                    .includes(searchResto.toLowerCase())
                );
                setFilterResto(searchItem);
              }}
            >
              Search
            </button>
          </div>
          <button
          className="rounded border-2 border-orange-400 py-2 px-4 text-sm text-orange-600 font-semibold"
            onClick={() => {
              const filetrItem = listOfResto.filter(
                (item) => item.info.avgRating > 4
              );
              setFilterResto(filetrItem);
            }}
          >
            Top Reated Resto
          </button>
        </div>
        <div className="cards grid items-start grid-cols-4 gap-4">
          {filterResto.map((items) => {
            return (
              <div>
                <Link key={items.info.id} to={"restaurant/" + items.info.id} className="relative">
                  {!items.info['veg'] ? (
                    <Restaurants resData={items} />
                  ) : (
                    <RestaurantsCardPromoted resData={items} />
                  )}
                </Link>
              </div>
            );
          })} 
        </div>
      </div>
    </section>
  );
};

export default Body;
