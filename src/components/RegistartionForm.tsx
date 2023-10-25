import React, { useState } from 'react';
import styles from '../components/RegistrationForm.module.css';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name) {
      newErrors.name = 'Введите имя.';
    }
    if (!formData.email) {
      newErrors.email = 'Введите электронную почту.';
    }
    if (!formData.password) {
      newErrors.password = 'Введите пароль.';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают.';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== '')) {
      return;
    }

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
            {errors.name && <div className={styles.error}>{errors.name}</div>}

            <label>Электронная почта</label>
            <input
              type="email"
              name="email"
              placeholder="Электронная почта"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}

            <label>Пароль</label>
            <input
              type="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <div className={styles.error}>{errors.password}</div>
            )}

            <label>Подтвердите пароль</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="******"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <div className={styles.error}>{errors.confirmPassword}</div>
            )}

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
