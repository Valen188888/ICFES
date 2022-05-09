<template>
  <div>
    <router-link to="/agregar" class="is-pulled-right">
      <button class="button is-primary">Agregar pregunta</button>
    </router-link>
    <ol class="has-text-left">
      <li v-for="(item, index) in questions" :key="index">
        {{ item.question }}
        <ul>
          <li v-for="(res, i) in item.responses" :key="i">
            {{ res.response }} - {{ res.check }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "ListQuestion",
  data: () => ({
    questions: [],
  }),
  created(){
      this.questions = JSON.parse(localStorage.getItem('questions')) || [];
  },
};
</script>

<style lang="scss" scoped>
</style>
