import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { restaurantsList } from "../utils/mockData";
import { Link } from "react-router-dom";

const Body = () => {
  //Here we have created the state variable of Restaurants list using mock data
  //And Notice we have created one attribute name as key this is important to create a key attribute oterwise react will give warning .
  //And we have created the logic to filter the component having rating more then 4 onclick of button

  //This below local state variable is used to read the data from local and keep in mind we are using "optional chaining"
  //   const [listOfRestaurants, setListOfRestaurants] = useState(
  //     restaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       .restaurants
  //   );

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredList, setFilteredList] = useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4916812&lng=77.094897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantsList = await response.json();
    // console.log(
    //   restaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     .restaurants
    // );
    setListOfRestaurants(
      restaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
    setFilteredList(
      restaurantsList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        .restaurants
    );
  };

  //Below we shows the conditional renderring based on the data available or not and till the data isnt availble we are showing the "Shimmer UI" it creates the illusion to the user that site is loading

  return listOfRestaurants.length === 0 ? (
    <RestaurantCardShimmer />
  ) : (
    <div className="app-body">
      <div className="search-container">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            setFilteredList(
              listOfRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
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
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
