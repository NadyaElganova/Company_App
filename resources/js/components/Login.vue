<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="handleLogin" class="login-form">
        <input type="text" v-model="username" placeholder="Логин" />
        <input type="password" v-model="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
        <p class="message">Не зарегистрированы? <router-link to="/register">Создать аккаунт</router-link></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log('Logging in with:', this.username, this.password);
      // Логика входа
    }
  }
};
</script>