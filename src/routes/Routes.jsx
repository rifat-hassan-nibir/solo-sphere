import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJobs";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
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
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job-details/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob></AddJob>,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs></MyPostedJobs>,
      },
      {
        path: "/update-job/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job-details/${params.id}`),
      },
    ],
  },
]);

export default router;
