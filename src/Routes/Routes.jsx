import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PhoneDetails from "../Pages/PhoneDetails";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <h1>Data Loading ....</h1>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "about",
        Component: About,
      },
      { path: "phone-details/:id",
        hydrateFallbackElement: <h1>Data loading ...</h1>,
        loader: () => fetch("../phones.json"),
        Component: PhoneDetails },
      {path: "favorites",
       Component: Favorites
      },
      {path: "cart",
       Component: Cart
      }
    ],
  },
]);
