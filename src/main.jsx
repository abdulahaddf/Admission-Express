import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import AuthProvider from "./provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Register from "./Pages/Login/Register";
import Admission from "./Pages/Admission/Admission";
import Colleges from "./Pages/Colleges/Colleges";
import MyCollege from "./Pages/MyCollege/MyCollege";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import Apply from "./Pages/Admission/Apply";
import SingleCollege from "./Pages/Colleges/SingleCollege";
import PrivateRoute from "./routes/PrivateRoute";
import '@smastrom/react-rating/style.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },
      {
        path: "/details",
        element: <SingleCollege></SingleCollege>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/my-college",
        element:<PrivateRoute><MyCollege></MyCollege> </PrivateRoute>
      },
      {
        path: "/apply",
        element: <Apply></Apply>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router} />

       </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
