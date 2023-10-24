function Partner({ user }) {
  return (
    <div>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
    </div>
  );
}

export default Partner;
