import Pfe from "views/Pfe";
import Templates from "views/Templates.js";
import Labels from "views/Labels.js";
import Wevioo from "views/Wevioo.js";
import UserPage from "views/UserPage.js";
import Login from "views/Login";
import SignUp from "views/SignUp";

var dashRoutes = [
  {
    path: "/Pfe",
    name: "Pfe",
    icon: "education_hat",
    component: <Pfe />,
    layout: "/admin",
  },
  {
    path: "/Templates",
    name: "Templates",
    icon: "design_image",
    component: <Templates />,
    layout: "/admin",
  },
  {
    path: "/Labels",
    name: "Labels",
    icon: "location_map-big",
    component: <Labels />,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",
    icon: "ui-1_bell-53",
    component: <Login />,
    layout: "/admin",
  },
  {
    path: "/SignUp",
    name: "SignUp",
    icon: "ui-1_bell-53",
    component: <SignUp />,
    layout: "/admin",
  },
  {
    path: "/Wevioo",
    name: "Wevioo",
    icon: "business_badge",
    component: <Wevioo />,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: <UserPage />,
    layout: "/admin",
  },  
];
export default dashRoutes;
