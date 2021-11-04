import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';
import route from '../utils/route/route';

export default function AuthNav() {
  return (
    <div>
      <NavLink to={route.register}
        // exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Регистрация
      </NavLink>


      <NavLink to={route.login}
        // exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}