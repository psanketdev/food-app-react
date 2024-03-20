import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantsMenu from "./RestaurantsMenu";
import Cart from "./Cart";

// Context
import UserContext from "../context/UserContext";

// Store
import appStore from "../store/appStore";


// Lazy Loading Components
const Grocery = lazy(() => import("./Grocery"));

const App = () => {
  const [loginUser, setLoginInUser] = useState();

  useEffect(() => {
    const user = {
      name: "Sanket Patil",
    };
    setLoginInUser(user.name);
  }, []);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: loginUser }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          // We need to add Suspense component, this is given by react for lazy loading
          // Inside the fallback we defined loading component also.
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
