<template>
  <div>
    <h2>Companies List</h2>
    <ul>
      <li v-for="company in companies" :key="company.id">
        <router-link :to="'/company/' + company.id">{{ company.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      companies: []  // Массив для хранения списка компаний
    };
  },
  created() {
    this.fetchCompanies();  // Получаем компании при создании компонента
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/companies');  // Ваш API-эндпоинт
        this.companies = response.data;  // Сохраняем данные в массив
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  }
};
</script>