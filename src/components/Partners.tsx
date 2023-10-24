import { useState, useEffect } from 'react';
import style from '../components/Partners.module.css';
import { AiOutlineArrowDown } from 'react-icons/ai';

function Partner({ user }) {
  return (
    <div className={style.partner}>
      <img
        src={user.picture.thumbnail}
        alt={`${user.name.first} ${user.name.last}`}
        className={style.partnerAvatar}
      />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
    </div>
  );
}

function Partners() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(8);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error('Error:', error));
  }, []);

  const showMoreUsers = () => {
    setVisibleUsers(visibleUsers + 8);
  };

  return (
    <div className={style.container}>
      <div className={style.partners}>
        {users.slice(0, visibleUsers).map((user, index) => (
          <Partner key={user.login.uuid} user={user} />
        ))}
      </div>
      {visibleUsers < users.length && (
        <button onClick={showMoreUsers} className={style.button}>
          Показать ещё <AiOutlineArrowDown className={style.icon} />
        </button>
      )}
    </div>
  );
}

export default Partners;
