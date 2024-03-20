import React from "react";
import urls from "../utils/utils";

const Restaurants = (props) => {
  const { name, avgRating, sla, cuisines, cloudinaryImageId, areaName } = props?.resData?.info;
  
  return (
    <div className="card scale-95">
        <div className="card-figure mb-5">
          <figure className="relative h-[160] overflow-hidden drop-shadow-md">
            <img className="rounded-2xl object-cover size-full" src={urls.IMG_URL + cloudinaryImageId} alt={name + " Image"} />
          </figure>
        </div>
        <div className="card-body">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <ul className="flex font-semibold mb-2">
            <li className="mr-4">⭐ {avgRating}</li>| &nbsp;
            <li>{sla["slaString"]}</li>
          </ul>
          <span className="block text-sm text-gray-700">{cuisines.join(", ").slice(0, 35) + "..."}</span>
          <span className="block text-sm text-gray-700">{areaName}</span>
        </div>
    </div>
  );
};

export default Restaurants;


// Higher Order Component
export const withPromotedResto = (Restaurants) => {
  return (props) => {
    return (
      <>
        <span className="absolute top-2 right-2 z-10">{'🟢'}</span>
        <Restaurants  {...props} />
      </>
    );
  };
};

