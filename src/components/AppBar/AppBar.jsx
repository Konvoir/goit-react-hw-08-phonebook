import { useSelector } from "react-redux";
import Navigation from '../Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { authSelectors } from '../../redux/auth';
import { styles } from './AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={styles.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> :  <AuthNav />}
            
        </header>
    );
}