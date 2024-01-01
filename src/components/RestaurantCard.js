import React from "react";
import { RESTAURANT_CARD_CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurantData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        alt="RestaurantImage"
        src={RESTAURANT_CARD_CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h5>{avgRating}*</h5>
      <h5>{cuisines.join(" ")}</h5>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurantCard;
