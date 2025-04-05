<template>
    <div class="login-page">
      <div class="form">
        <form @submit.prevent="handleRegister" class="register-form">
          <input type="text" v-model="name" placeholder="Name" />
          <input type="email" v-model="email" placeholder="Email" />
          <input type="password" v-model="password" placeholder="Password" />
          <button type="submit">Create</button>
          <p class="message">Already registered? <router-link to="/">Sign In</router-link></p>
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