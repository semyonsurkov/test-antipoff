import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  setDetailedUser,
} from '../store/usersSlice';
import style from '../components/Users.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import User from './User';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';

type UserType = {
  login: {
    uuid: string;
  };
  picture: {
    thumbnail: string;
  };
  name: {
    first: string;
    last: string;
  };
};

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);
  const navigate = useNavigate();

  const [loadedUsers, setLoadedUsers] = useState<UserType[]>(users);

  useEffect(() => {
    if (loadedUsers.length === 0) {
      dispatch(fetchUsersStart());
      fetch('https://randomuser.me/api/?results=20')
        .then((response) => response.json())
        .then((data) => {
          dispatch(fetchUsersSuccess(data.results));
          setLoadedUsers(data.results);
        })
        .catch((error) => {
          dispatch(fetchUsersFailure(error.message));
        });
    }
  }, [dispatch, loadedUsers]);

  const [visibleUsers, setVisibleUsers] = useState(8);

  const showMoreUsers = () => {
    setVisibleUsers(visibleUsers + 8);
  };

  const showDetailedUser = (user: UserType) => {
    dispatch(setDetailedUser(user));
    navigate(`/user/${user.login.uuid}`);
  };

  return (
    <div className={style.usersContainer}>
      <div className={style.users}>
        {loadedUsers.slice(0, visibleUsers).map((user) => (
          <div key={user.login.uuid} onClick={() => showDetailedUser(user)}>
            <User user={user} />
          </div>
        ))}
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && visibleUsers < users.length && (
        <button onClick={showMoreUsers} className={style.button}>
          Показать ещё <AiOutlineArrowDown className={style.icon} />
        </button>
      )}
    </div>
  );
};

export default Users;
