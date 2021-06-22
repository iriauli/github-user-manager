import { NavLink } from "react-router-dom";
import Styles from "./Header.module.css";
import ROUTES from "../../constants/routes";
import UserBoard from "../../components/UserBoard";

function index() {
  return (
    <header className={Styles.Header}>
      <NavLink to={ROUTES.PAGE_DASHBOARD}>
        <div className={Styles.Logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
      </NavLink>

      <nav className={Styles.nav}>
        <ul>
          <li>
            <NavLink
              to={ROUTES.PAGE_DASHBOARD}
              activeClassName={Styles.Selected}
            >
              Dashboard
            </NavLink>
            <NavLink to={ROUTES.PAGE_SEARCH} activeClassName={Styles.Selected}>
              Search
            </NavLink>
            <NavLink
              to={ROUTES.PAGE_FAVORITES}
              activeClassName={Styles.Selected}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div>
        <UserBoard />
      </div>
    </header>
  );
}

export default index;
