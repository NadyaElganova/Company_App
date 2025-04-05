<template>
    <div>
      <header>
        <nav>
          <ul>
            <li><router-link to="/">Login</router-link></li>
            <li><router-link to="/register">Register</router-link></li>
            <!-- <li v-if="isAuthenticated"><router-link to="/companies">Company List</router-link></li> -->
          </ul>
        </nav>
      </header>
      <router-view></router-view> <!-- Здесь будет отображаться текущий компонент -->
    </div>

  </template>
  
  <script>
  export default {
    name: 'App',
  };
</script>
