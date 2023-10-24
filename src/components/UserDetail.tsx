import { useSelector } from 'react-redux';
import style from '../components/UserDetail.module.css';

const UserDetail = () => {
  const detailedUser = useSelector((state) => state.users.detailedUser);

  if (!detailedUser) {
    return <div>No user selected</div>;
  }

  return (
    <div className={style.page}>
      <header className={style.header}>
        <div className={style.userInfo}>
          <img
            src={detailedUser.picture.medium}
            className={style.avatar}
            alt={`${detailedUser.name.first} ${detailedUser.name.last}`}
          ></img>
          <div className={style.name}>
            {detailedUser.name.first} {detailedUser.name.last}
          </div>
        </div>
      </header>
    </div>
  );
};

export default UserDetail;
