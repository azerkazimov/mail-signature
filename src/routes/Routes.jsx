import Home from "../pages/Home";
import Brands from "../pages/Home/components/Brands";
import CreateSign from "../pages/Home/components/CreateSign";
import Disclaimers from "../pages/Home/components/Disclaimers";
import EmailSign from "../pages/Home/components/EmailSign";
import Explore from "../pages/Home/components/Explore";
import FAQs from "../pages/Home/components/FAQ";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import UserRouter from "../pages/UserRouter";
import PATH from "./constant";
import ForgotPassword from "../pages/ForgotPassword";

export const Routes = [
  {
    path: PATH.main,
    element: <UserRouter />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "brand",
        element: <Brands />,
      },
      {
        path: "createsign",
        element: <CreateSign />,
      },
      {
        path: "disclaimers",
        element: <Disclaimers />,
      },
      {
        path: "emailsign",
        element: <EmailSign />,
      },

      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "faq",
        element: <FAQs />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
    ],
  },
];
