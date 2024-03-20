import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantsMenu from "../hooks/useRestaurantsMenu";
import RestaurantsCatogery from "./RestaurantsCatogery";

const RestaurantsMenu = () => {
  // I comment useState & useEffect, bcoz this all data coming from our customer hook now.
  // const [resoMenu, setResoMenu] = useState(null);
  // useEffect(() => {
  //   fetchResoMenuData();
  // }, []);

  // const fetchResoMenuData = async () => {
  //   const response = await fetch(urls.API_MENU + resId );
  //   const jsonRes = await response.json();
  //   setResoMenu(jsonRes);
  // }

  const [showIndex, setShowIndex] = useState(0);

  // Custome Hook
  const { resId } = useParams();
  const resoMenu = useRestaurantsMenu(resId);

  if (resoMenu === null) {
    return <h1 className="font-bold text-2xl mt-4">Loading...</h1>;
  }

  const { name, avgRating, areaName, costForTwoMessage, sla } =
    resoMenu?.data?.cards[0]?.card.card.info;
  const restoMenus =
    resoMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const restoMenuCategorys = restoMenus.filter((catogery) =>
    catogery?.card?.card["@type"].includes("ItemCategory")
  );

  const handleItemClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="restoMenu-section mt-10">
      <div className="container w-7/12 mx-auto">
        <ul className="flex justify-between items-center mb-4 border-dashed border-b-2 pb-5">
          <li>
            <h2 className="text-lg font-semibold mb-2 text-gray-600">{name}</h2>
            <span className="block font-semibold text-sm text-gray-700">
              India
            </span>
            <span className="block font-semibold  text-sm text-gray-700">
              {areaName} | {sla?.lastMileTravelString}
            </span>
          </li>
          <li className="p-4 border-orange-500 border text-orange-900 font-bold">
            ⭐ {avgRating}
          </li>
        </ul>
        <div className="mt-4 flex items-center mb-6 font-semibold">
          <span className="pr-4">⏳ {sla?.slaString} </span>
          <span className="font-bold">|</span>
          <span className="pl-4">💵 {costForTwoMessage}</span>
        </div>
        <ul className="reso-menu">
          {restoMenuCategorys.map((catogery, index) => {
            return (
              // Controlled Component
              <RestaurantsCatogery
                key={index}
                data={catogery?.card?.card}
                showItem={index === showIndex}
                onClick={() => handleItemClick(index)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default RestaurantsMenu;
