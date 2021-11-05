import { useSelector, useDispatch } from "react-redux";
import s from "./UserMenu.module.css";
import { getUserName, getIsAuth } from "../../redux/auth/authSelectors";
import profile from "../../images/profile.png";
import Button from "../Button/Button";
import { userLogOut } from "../../redux/auth/authOperations";

export default function UserMenu() {
  const userName = useSelector(getUserName);
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const onBtnClick = () => dispatch(userLogOut());
  return (
    <div className={s.wrapper}>
      {isAuth && (
        <div className={s.user}>
          <img src={profile} alt="profile" className={s.image} />
          <p className={s.userName}>Hello, {userName}</p>
        </div>
      )}
      <Button type="button" buttonName="Log out" handleClick={onBtnClick} />
    </div>
  );
}
