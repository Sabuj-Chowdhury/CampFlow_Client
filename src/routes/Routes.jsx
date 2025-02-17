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
import UserRoutes from "./UserRoutes";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Blogs from "../Pages/Blogs/Blogs";
import CampsGallery from "../Pages/CampsGallery/CampsGallery";
import AdminAnalytics from "../Pages/Dashboard/Admin/Analytics/AdminAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
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
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "camps-gallery",
        element: (
          <PrivateRoute>
            <CampsGallery />
          </PrivateRoute>
        ),
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
      // ****common routes*****
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
      // ****ADMIN routes******
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
        path: "admin-analytics",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <AdminAnalytics />
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
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <ManageRegisteredUser></ManageRegisteredUser>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "update-camp/:campId",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <UpdateCamp></UpdateCamp>
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
      // *****User routes******
      {
        path: "analytics",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <Analytics></Analytics>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "registered-camps",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <RegisteredCamps></RegisteredCamps>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <PaymentHistory></PaymentHistory>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
      {
        path: "pay/:id",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <Payment></Payment>
            </UserRoutes>
          </PrivateRoute>
        ),
      },

      {
        path: "add-review/:id",
        element: (
          <PrivateRoute>
            <UserRoutes>
              <AddReview></AddReview>
            </UserRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
