import AuthGuard from "../components/AuthGuard";
import GuestGuard from "../components/GuestGuard";
import Dashboard from "../page/Dashboard";
import Favorites from "../page/Favorites";
import Search from "../page/Search";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import UserInfo from "../page/UserInfo";
import ROUTES from "../constants/routes";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: ROUTES.PAGE_SIGN_IN,
    exact: true,
    page: SignIn,
    guard: GuestGuard,
  },
  {
    path: ROUTES.PAGE_SIGN_UP,
    exact: false,
    page: SignUp,
    guard: GuestGuard,
  },
  {
    path: ROUTES.PAGE_DASHBOARD,
    exact: false,
    page: Dashboard,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_USERS,
    exact: false,
    page: UserInfo,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_SEARCH,
    exact: false,
    page: Search,
    guard: AuthGuard,
  },
  {
    path: ROUTES.PAGE_FAVORITES,
    exact: false,
    page: Favorites,
    guard: AuthGuard,
  },
];
