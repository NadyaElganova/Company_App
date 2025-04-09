<template>
  <div>
      <header>
          <nav>
              <ul>
                  <li><router-link to="/">Login</router-link></li>
                  <li><router-link to="/register">Register</router-link></li>
              </ul>
          </nav>
      </header>
      <router-view></router-view> <!-- Отображение компонента в зависимости от маршрута -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>