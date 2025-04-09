<template>
  <div>
    <h2>Companies List</h2>
    <p>Name: {{name}}</p>
    <p>Inn: {{inn}}</p>
    <p>Inn: {{newName}}</p>
    <table class="table table-hover">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Наименование</th>
        <th scope="col">Инн</th>
        <th scope="col">Юр.адрес</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="(company, index) in companies" :key="company.id">
          <th scope="row">{{index+1}}</th>
          <td><router-link :to="'/company/' + company.id">{{ company.name }}</router-link></td>
          <td>{{ company.inn }}</td>
          <td>{{ company.adress_registration }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="sayHello">Hello</button>
    <button @click="sayHi">Hi</button>
    <company-detail></company-detail>
  </div>
</template>

<script>
import axios from 'axios';
import CompanyDetail from './CompanyDetail.vue';

export default {
  data() {
    return {
      companies: [],  // Массив для хранения списка компаний
      name: 'Company 1',
      inn: '12345678901',
      newName: this.name + " New",
    };
  },

  created() {
    this.fetchCompanies();  // Получаем компании при создании компонента
  },

  methods: {
    async fetchCompanies() {
      try {
        const response = await axios.get('/companies');  // Ваш API-эндпоинт
        this.companies = response.data;  // Сохраняем данные в массив
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    },

    sayHello(){
      console.log('hello!!!!')
    },

    sayHi(){
      console.log('Hi!!!');
    },

  }, 

  computed:{
      changeName(){
        return this.name + ' change';
      }
    },
  
  components:{
    CompanyDetail
  }


};
</script>