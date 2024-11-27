import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/pages/Layout";
import MainPage from "./components/pages/MainPage";
import ShopPage from "./components/pages/ShopPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/shop",
          element: <ShopPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
