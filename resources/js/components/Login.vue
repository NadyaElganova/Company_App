<template>
  <div class="login-page">
    <div class="form">
      <form @submit.prevent="handleLogin" class="login-form">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p class="message">Not registered? <router-link to="/register">Create an account</router-link></p>
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