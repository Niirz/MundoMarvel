<template >
  <!-- {{character}}-->

  <div id="characterInfo" class="row">
    <h1>{{ character.name }}</h1>
    <div>
      <hr />
    </div>
    <div class="col-sm-4">
      <img :src="character.thumbnail + '.jpg'" alt="" width="250" />
    </div>
    <br />
    <br />
    <div v-if="character.description != ''" class="col-md-6">
      <span
        ><b><h3>Description:</h3></b></span
      >
      <p>{{ character.description }}</p>
    </div>
    <div v-else class="col-md-6">
      <b><h3 style="text-align: left">Description:</h3></b>
      <div class="row">
        <div class="col">
          <p>No se ha encontrado descripción :(</p>
          <br />
          Pero no te preocupes, solo algunas no la poseen! :D
        </div>
        <div class="col">
          <span>
            <img
              src="https://www.clipartmax.com/png/full/50-508951_cartoon-art-pictures-sad-deadpool.png"
              width="250"
              alt=""
          /></span>
        </div>
      </div>
    </div>
  </div>
  <section>
    <button @click="$router.go(-1)" type="button" class="btn btn-danger">
      <i class="bi bi-arrow-left-circle"></i> Regresar
    </button>
  </section>
</template>
<script>
import marvelApi from "@/services/marvelApi.js";
export default {
  data() {
    return {
      character: [],
      id: {},
    };
  },
  mounted() {
    this.getCharacter(this.$route.params.id);
  },
  methods: {
    async getCharacter(id) {
      fetch(marvelApi.getCharacter(id))
        .then((res) => res.json())
        .then((json) => {
          this.character = json.data.results[0];
        });
    },
  },
};
</script>
<style >
</style>