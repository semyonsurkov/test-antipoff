import { useSelector } from 'react-redux';
import style from '../components/UserDetail.module.css';
import { Link } from 'react-router-dom';

const UserDetail = () => {
  const detailedUser = useSelector((state) => state.users.detailedUser);

  const handleLogout = () => {
    // Clear the token (assuming it's stored in state)
    // You should replace this with your actual token management logic
    // For example, using useContext or Redux
    // setToken(null);

    // Redirect the user back to the registration page
    window.location.href = '/';
  };

  if (!detailedUser) {
    return <div>No user selected</div>;
  }

  return (
    <div className={style.page}>
      <header className={style.header}>
        <button onClick={handleLogout} className={style.logoutButton}>
          Выйти
        </button>
        <div className={style.navigation}>
          <Link to="/team" className={style.back}>
            Назад
          </Link>
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
        </div>
      </header>
      <div className={style.info}>
        <div className={style.description}>
          <p>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно"
          </p>
          <p>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className={style.contacts}>
          <div className={style.phoneContainer}>
            <p className={style.phone}>📞{detailedUser.phone}</p>
          </div>
          <div className={style.emailContainer}>
            📫️
            <a href={`mailto:${detailedUser.email}`} className={style.email}>
              {detailedUser.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
