<template>
  <div>
    <div class="field">
      <label class="label">Ingrese la pregunta</label>
      <div class="control">
        <input class="input" type="text" v-model="question" />
      </div>
    </div>

    <hr />
    <div class="field">
      <label class="label">Ingrese la respuesta</label>
      <div class="control">
        <input class="input" type="text" v-model="answer1" />
        <label class="checkbox">
          <input type="checkbox" v-model="check1" />
          Malo
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label">Ingrese la respuesta</label>
      <div class="control">
        <input class="input" type="text" v-model="answer2" />
        <label class="checkbox">
          <input type="checkbox" v-model="check2" />
          Malo
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Ingrese la respuesta</label>
      <div class="control">
        <input class="input" type="text" v-model="answer3" />
        <label class="checkbox">
          <input type="checkbox" v-model="check3" />
          Malo
        </label>
      </div>
    </div>
    <button class="button is-primary" @click="save()">Guardar</button>
  </div>
</template>

<script>
export default {
  name: "AddQuestion",
  data: () => ({
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    check1: "",
    check2: "",
    check3: "",
  }),
  methods: {
    save() {
      const fullQuestion = {
        question: this.question,
        responses: [
          {
            response: this.answer1,
            check: this.check1 || false,
          },
          {
            response: this.answer2,
            check: this.check2 || false,
          },
          {
            response: this.answer3,
            check: this.check3 || false,
          },
        ],
      };
      const questions = JSON.parse(localStorage.getItem("questions")) || [];
      questions.push(fullQuestion);

      localStorage.setItem("questions", JSON.stringify(questions));
      alert("Se guardo con exito");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
