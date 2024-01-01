import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";

const Body = () => {
  //Here we have created the state variable of Restaurants list using mock data
  //And Notice we have created one attribute name as key this is important to create a key attribute oterwise react will give warning .
  //And we have created the logic to filter the component having rating more then 4 onclick of button
  const [listOfRestaurants, setListOfRestaurants] = useState(
    restaurantsList.data.restaurants
  );
  return (
    <div className="app-body">
      <div className="search">Search</div>
      {/* This code will filter the card according to the rating greater thehn 4.3
      Writter below code shows the way to write the code same code in short way */}
      {/* <button
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.3
          );
          setListOfRestaurants(filteredList);
        }}
      >
        Click ME to Filter Greater 4.3
      </button> */}
      <button
        onClick={() => {
          setListOfRestaurants(
            listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            )
          );
        }}
      >
        Click ME to Filter Greater 4.3
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default Body;
