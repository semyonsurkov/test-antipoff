import style from '../components/User.module.css';

type UserProps = {
  user: {
    picture: {
      thumbnail: string;
    };
    name: {
      first: string;
      last: string;
    };
  };
};

function User({ user }: UserProps) {
  return (
    <div className={style.user}>
      <img
        src={user.picture.thumbnail}
        alt={`${user.name.first} ${user.name.last}`}
        className={style.userAvatar}
      />
      <h2>{`${user.name.first}`}</h2>
      <h2>{`${user.name.last}`}</h2>
    </div>
  );
}

export default User;
