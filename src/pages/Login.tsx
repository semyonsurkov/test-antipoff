import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import styles from '../pages/Login.module.css';

const Login: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Link to="/" className="icon">
            <FiArrowLeft size={32} />
          </Link>
        </div>
        <form className={styles.form}>
          <div className={styles.formItems}>
            <label>Вход</label>

            <label>Электронная почта</label>
            <input type="email" placeholder="Электронная почта" />

            <label>Пароль</label>
            <input type="password" placeholder="******" />

            <Link to="/team" className={styles.button}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
