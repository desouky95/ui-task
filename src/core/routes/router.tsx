import { createBrowserRouter } from "react-router-dom";
import mainRoutes from "./routes.config";
import App from "../../App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,

      children: mainRoutes,
    },
  ],
  {
    basename: "/",
  }
);

export default router;
