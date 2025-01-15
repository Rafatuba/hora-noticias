import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import Todos from "./pages/todos";
import Detalhe from "./pages/detalhe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todos",
    element: <Todos />,
  },
  {
    path: "/detalhe/:id",
    element: <Detalhe />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
