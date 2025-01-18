import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/Registration/SignUp";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "../Layouts/Dashboard";

import AddCamp from "../Pages/Dashboard/Admin/AddCamp";
import Profile from "../Pages/Dashboard/Common/Profile";
import ManageCamps from "../Pages/Dashboard/Admin/ManageCamps";
import ManageRegisteredUser from "../Pages/Dashboard/Admin/ManageRegisteredUser";
import Analytics from "../Pages/Dashboard/User/Analytics";
import RegisteredCamps from "../Pages/Dashboard/User/RegisteredCamps";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import CampDetails from "../Pages/CampDetails/CampDetails";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import UpdateCamp from "../Pages/Dashboard/Admin/Update/UpdateCamp";
import AddReview from "../Pages/Dashboard/User/AddReview/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "available-camps",
        element: <AvailableCamps></AvailableCamps>,
      },
      {
        path: "camp-details/:campId",
        element: <CampDetails></CampDetails>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "add-camp",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AddCamp></AddCamp>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },

      {
        path: "manage-camps",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageCamps></ManageCamps>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-registered-camps",
        element: <ManageRegisteredUser></ManageRegisteredUser>,
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "registered-camps",
        element: <RegisteredCamps></RegisteredCamps>,
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "pay/:id",
        element: <Payment></Payment>,
      },
      {
        path: "update-camp/:campId",
        element: <UpdateCamp></UpdateCamp>,
      },
      {
        path: "add-review/:id",
        element: <AddReview></AddReview>,
      },
    ],
  },
]);

export default router;
