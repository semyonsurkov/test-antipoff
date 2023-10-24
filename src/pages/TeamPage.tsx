// import { Link } from 'react-router-dom';
// import { FiArrowLeft } from 'react-icons/fi';

import Partners from '../components/Partners';
import styles from '../pages/TeamPage.module.css';

function TeamPage() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>Наша команда</h1>
        {/* <Link to="/" className="icon">
        <FiArrowLeft size={32} />
      </Link> */}
        <p>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.{' '}
        </p>
      </header>
      <section>
        <Partners />
      </section>
    </>
  );
}

export default TeamPage;
