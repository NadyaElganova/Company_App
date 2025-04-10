<template>
    <div class="reg-page">
      <div class="form">
        <form @submit.prevent="handleRegister" class="register-form">
          <input type="text" v-model="name" placeholder="Имя" />
          <input type="email" v-model="email" placeholder="Email" />
          <input type="password" v-model="password" placeholder="Пароль" />
          <button type="submit">Зарегистрироваться</button>
          <p class="message">Уже зарегистрированы? <router-link to="/">Войти</router-link></p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      handleRegister() {
        console.log('Registering with:', this.name, this.email, this.password);
        // Логика регистрации
      }
    }
  };
  </script>