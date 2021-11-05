import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "../UserMenu/UserMenu";
import s from "./Nav.module.css";
import { getIsAuth } from "../../redux/auth/authSelectors";
export default function Nav({ children }) {
  const isAuth = useSelector(getIsAuth);

  return (
    <header className={s.header}>
      <p className={s.logo}>
        Phone<span className={s.logoRight}>Book</span>
      </p>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {!isAuth ? (
            <li className={s.listItem}>
              <NavLink
                to="/users/login"
                className={s.link}
                activeClassName={s.activeLink}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li className={s.listItem}>
              <UserMenu />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
