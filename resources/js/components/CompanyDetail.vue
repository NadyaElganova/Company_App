<template>
  <div>
    <h2>Company Detail</h2>
    <p>Company ID: {{ id }}</p>
    <!-- Здесь можно добавить больше информации о компании -->
  </div>
</template>

<script>
export default {
  props: ['id'], // Параметр id передается как пропс
  created() {
    console.log('Loaded company with ID:', this.id);
  }
};
</script>
