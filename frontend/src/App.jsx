import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/home-page/HomePage";
import ListPage from "./routes/list-page/ListPage";
import Layout from "./layout/Layout";
import SinglePage from "./routes/single-page/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/list", element: <ListPage /> },
        { path: "/:id", element: <SinglePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
