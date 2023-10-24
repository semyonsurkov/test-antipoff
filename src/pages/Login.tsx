import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/RegistrationForm.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.form}>
      <form>
        <div className={styles.formItems}>
          <label>Вход</label>
          <label>Имя</label>
          <input type="text" placeholder="Имя" />

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
  );
};

export default Login;
