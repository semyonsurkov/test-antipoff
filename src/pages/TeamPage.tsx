import Partners from '../components/Users';
import styles from '../pages/TeamPage.module.css';

function TeamPage() {
  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={handleLogout} className={styles.logoutButton}>
          Выйти
        </button>
        <div className={styles.info}>
          <h1 className={styles.h1}>Наша команда</h1>
          <p>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{' '}
          </p>
        </div>
      </header>
      <section>
        <Partners />
      </section>
    </>
  );
}

export default TeamPage;
