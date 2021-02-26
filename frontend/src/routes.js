import Index from "views/Index.js";
// import Profile from "views/Profile.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Program from "views/Program.js";
import Semester from "views/Semester.js";
import Student from 'views/Student.js'
import Form from 'views/Form.js'
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin",
  // },
  {
    path: "/program",
    name: "Program",
    icon: "ni ni-bullet-list-67 text-red",
    component: Program,
    layout: "/admin",
  },
    {
    path: "/semester",
    name: "Semester",
    icon: "ni ni-bullet-list-67 text-red",
    component: Semester,
    layout: "/admin",
  },
  {
    path: "/student",
    name: "student",
    icon: "ni ni-bullet-list-67 text-red",
    component: Student,
    layout: "/admin",
  },
  {
    path: "/form",
    name: "form",
    icon: "ni ni-bullet-list-67 text-red",
    component: Form,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
];
export default routes;