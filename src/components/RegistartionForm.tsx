import React, { useState } from 'react';
import styles from '../components/RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [token, setToken] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      setError('Пожалуйста, введите корректные данные.');
      return;
    }

    const randomToken = Math.random().toString(36).substring(7);

    setToken(randomToken);

    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    window.location.href = '/team';
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formItems}>
            <label>Регистрация</label>
            <label>Имя</label>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label>Электронная почта</label>
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label>Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleInputChange}
            />

            <label>Подтвердите пароль</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="******"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />

            {error && <div className={styles.error}>{error}</div>}

            <button type="submit" className={styles.button}>
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
