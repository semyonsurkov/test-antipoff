import Partners from '../components/Users';
import styles from '../pages/TeamPage.module.css';

function TeamPage() {
  // Function to handle logout
  const handleLogout = () => {
    // Clear the token (assuming it's stored in state)
    // You should replace this with your actual token management logic
    // For example, using useContext or Redux
    // setToken(null);

    // Redirect the user back to the registration page
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
      {/* Log Out button */}
    </>
  );
}

export default TeamPage;
