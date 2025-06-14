import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";

import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard";
import Track from "./pages/Track";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* <Welcome /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <History /> */}
      {/* <Dashboard /> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    // path: "/home",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/track",
        element: <Track />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
