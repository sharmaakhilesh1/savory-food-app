import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo"
        alt="logo"
        src="https://www.designmantic.com/logo-images/167715.png?company=Company%20Name&slogan=&verify=1"
      ></img>
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUS</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        alt="RestaurantImage"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
      ></img>
      <h3>Burger King</h3>
      <h4>4.2*</h4>
      <h4>America</h4>
    </div>
  );
};

const AppBody = () => {
  return (
    <div className="app-body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
