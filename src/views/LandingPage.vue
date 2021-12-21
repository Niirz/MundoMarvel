<template>
  <section>
    <div id="container1">
      <img
        id="logoLanding"
        src="https://www.linformaldesign.com/shop/wp-content/uploads/2021/03/marvel-logo-4.png"
        alt="Mundo Marvel"
      />
    </div>
    <div id="container2">
      <div class="row">
        <div class="col-md">
          <img
            src="http://www.tomacurso.com/img/portfolio/electronica.png"
            width="140px"
            alt=""
          />
          <div id="info">Cómics</div>

          <div id="subInfo">
            Busca y encuentra el cómic de marvel que tanto estás buscando
            <br />
            Tenemos una base de datos con la mayoria de cómics existentes
          </div>
        </div>
        <div class="col-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1543/1543271.png"
            width="140px"
            alt=""
          />
          <div id="info2">Personajes</div>
          <div id="subInfo2">
            Encuentra información de cada uno de los personajes que tienen
            apariciones dentro de los comics de Marvel
          </div>
        </div>
        <div class="col-md">
          <img
            src="https://www.nicepng.com/png/full/3-35805_deadpool-circle.png"
            width="140px"
            alt=""
          />
          <div id="info">Sobre Nosotros</div>
          <div id="subInfo">
            Nuestra página es la recopilación más grande de los cómics de Marvel
            que hay en internet, encontrarás todos los cómics y personajes del
            mundo Marvel.
          </div>
        </div>
        <div class="col-md">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/15/09/09/captain-american-4551118_960_720.png"
            width="140px"
            alt=""
          />
          <div id="info2">Contacto</div>
          <div id="subInfo2">
            <i class="bi bi-envelope-check"></i>s.barria03@ufromail.cl
            <br />
            <i class="bi bi-envelope-check"></i> r.carrasco05@ufromail.cl
            <br />
            <i class="bi bi-envelope-check"></i> n.rivas03@ufromail.cl
          </div>
        </div>
      </div>
    </div>
    <div id="container3">
      <div class="row">
        <div id="info" class="col-md">
          <br />
          Comenta y califica tus cómics favoritos para compartir tu experiencia
          con otros SIN SPOILERS.
          <br />
        </div>
        <div id="info2" class="col-md">
          <br />
          Dentro de cada personaje encuentra una pequeña descripción de ellos
          para conocerlos aun mejor.
          <br />
        </div>
        <div id="info" class="col-md">
          <br />
          En tu cuenta puedes tener tus cómics favoritos, valorarlos y agregar
          comentarios útiles para otros lectores
          <br />
        </div>
        <div id="info2" class="col-md">
          <br />
          <i class="bi bi-whatsapp"></i> +56954510696
          <br />
          <i class="bi bi-whatsapp"></i> +56978567198
          <br />
          <i class="bi bi-whatsapp"></i> +56954543129
        </div>
      </div>
    </div>
    <div>
      <footer id="footer" class="bg-secondary text-center text-white">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
           <router-link id="registroLink" to="/registro"><i class="bi bi-person-plus-fill"></i>Regístrate en Mundo Marvel</router-link>
           <br><br>
          <!-- Section: Social media -->
          <section class="mb-4">
            <!-- Facebook -->
            <a
              class="btn btn-primary btn-floating m-1"
              style="background-color: #3b5998"
              href="#!"
              role="button"
              ><i class="bi bi-facebook"></i>
            </a>

            <!-- Twitter -->
            <a
              class="btn btn-primary btn-floating m-1"
              style="background-color: #55acee"
              href="#!"
              role="button"
              ><i class="bi bi-twitter"></i
            ></a>

            <!-- Google -->

            <!-- Instagram -->
            <a
              class="btn btn-primary btn-floating m-1"
              style="background-color: #dd4b39"
              href="#!"
              role="button"
              ><i class="bi bi-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a
              class="btn btn-primary btn-floating m-1"
              style="background-color: #0082ca"
              href="#!"
              role="button"
              ><i class="bi bi-telegram" ></i
            ></a>
            <!-- Github -->
            <a
              class="btn btn-primary btn-floating m-1"
              style="background-color: #333333"
              href="#!"
              role="button"
              ><i class="bi bi-github"></i
            ></a>
          </section>
          <!-- Section: Social media -->
        </div>
        <!-- Grid container -->
    
        <!-- Copyright -->
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2021 Copyright
        </div>
        <!-- Copyright -->
      </footer>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
</style>