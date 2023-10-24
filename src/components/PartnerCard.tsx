import { useParams } from 'react-router-dom';

function UserCard({ users }) {
  const { userId } = useParams();
  const user = users.find((user) => user.login.uuid === userId);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div>
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
    </div>
  );
}

export default UserCard;
