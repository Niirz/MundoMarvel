<template>
  <section v-for="comic in comics" :comic="comic">
    <div id="comicInfo" class="row">
      <h1>{{ comic.title }}</h1>
      <div>
        <hr />
      </div>
      <div class="col-sm-4">
        <img :src="comic.thumbnail.path + '.jpg'" alt="" width="250" />
      </div>
      <div v-if="comic.description != ''" class="col-md-6">
        <span
          ><b><h3>Description:</h3></b></span
        >
        <p>{{ comic.description }}</p>
      </div>
      <div v-else class="col-md-6">
        <b><h3 style="text-align: left">Description:</h3></b>
        <div class="row">
          <div class="col">
            <p>No se ha encontrado descripción :(</p>
            <br />
            Pero no te preocupes, solo alginos cómics no la poseen!
            <i class="bi bi-emoji-wink"></i>
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

      <div style="text-align: center;" id="botones" class="container">
        <hr />
        <div class="row">
          <div class="col">
            <div v-if="comic.prices[0].price != 0" id="precio">
              <button type="button" class="btn btn-success">
                Precio: $ {{ comic.prices[0].price }} USD
              </button>
            </div>
            <div v-else id="precio">
              <button
                v-on:click="alertar"
                type="button"
                class="btn btn-warning"
              >
                No disponible
              </button>
            </div>
          </div>
          <div class="col">
            <button type="button" class="btn btn-danger">
              <i class="bi bi-cart-plus"></i> Carrito
            </button>
          </div>
          <div class="col">
            <button type="button" class="btn btn-info">
              <i class="bi bi-star"></i> Calificar
            </button>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col">
            <button
              @click="$router.go(-1)"
              type="button"
              class="btn btn-primary"
            >
              <i class="bi bi-arrow-left-circle"></i> Regresar
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- <div >
          <div>{{ comic.dates }}</div>
          <span>Dates: </span> {{ comic.dates[0].date }}
        </div> -->
      </div>
    </div>

    <!-- <div v-for="image in images" :image="image">
      <img :src="comic.images" alt="" />
    </div> -->
  </section>
</template>
<script>
import marvelApi from "@/services/marvelApi.js";

export default {
  data() {
    return {
      comics: [],
      id: {},
    };
  },
  mounted() {
    this.getComic(this.$route.params.id);
  },
  methods: {
    async getComic(id) {
      fetch(marvelApi.getComic(id))
        .then((res) => res.json())
        .then((json) => {
          this.comics.push(json.data.results[0]);
          //console.log(json.data.results[0])
        });
    },
    alertar: function () {
      swal("Oops :( ", "Artículo no disponible para la venta", "warning");
    },
  },
};
</script>
<style >
</style>