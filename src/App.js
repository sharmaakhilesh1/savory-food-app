import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
// if (module.hot) {
//   console.log("Hhot mOdule");
//   module.hot.accept();
// }

// Configuration for the routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);

// T=Now we will use the Router provide component to render the coponents according to the Config of Routes.
root.render(<RouterProvider router={appRouter} />);
