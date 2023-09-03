// LAYOUTS
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import AdminRoute from "./layouts/AdminRoute.jsx";

// PAGES
import MainDishes from "./pages/MainDishes.jsx";
import Drinks from "./pages/Drinks.jsx";
import Desserts from "./pages/Desserts.jsx";
import Page404 from "./pages/Page404.jsx";

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
  },
];
