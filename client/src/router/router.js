import { createBrowserRouter } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import UserHome from "../components/UserHome/UserHome";
import Activation from "../page/Auth/Activation/Activation";
import Home from "../page/Home/Home";
import Profile from "../page/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <UserHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/accounts/login",
    element: <Login />,
  },
  {
    path: "/accounts/emailsignup",
    element: <Signup />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
  {
    path: "/activation",
    element: <Activation />,
  },
]);
