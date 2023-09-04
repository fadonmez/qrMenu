// LAYOUTS
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminRoute from "./layouts/AdminRoute.jsx";

// PAGES
import MainDishes from "./pages/MainDishes.jsx";
import Drinks from "./pages/Drinks.jsx";
import Desserts from "./pages/Desserts.jsx";
import Page404 from "./pages/Page404.jsx";
import AddStock from "./pages/AddStock.jsx";
import Admin404 from "./pages/Admin404.jsx";
import HomeAdmin from "./pages/HomeAdmin.jsx";
import SeeStock from "./pages/SeeStock.jsx";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainDishes />,
      },
      {
        path: "drinks",
        element: <Drinks />,
      },
      {
        path: "desserts",
        element: <Desserts />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeAdmin />,
      },
      {
        path: "addstock",
        element: <AddStock />,
      },
      {
        path: "seestock/:type",
        element: <SeeStock />,
      },
      {
        path: "*",
        element: <Admin404 />,
      },
    ],
  },
];
