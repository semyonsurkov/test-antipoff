import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form>
          <div className={styles.formItems}>
            <label>Регистрация</label>
            <label>Имя</label>
            <input type="text" placeholder="Имя" />

            <label>Электронная почта</label>
            <input type="email" placeholder="Электронная почта" />

            <label>Пароль</label>
            <input type="password" placeholder="******" />

            <label>Подтвердите пароль</label>
            <input type="password" placeholder="******" />

            <Link to="/team" className={styles.button}>
              Зарегистрироваться
            </Link>
            <Link to="/login" className={styles.button}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
