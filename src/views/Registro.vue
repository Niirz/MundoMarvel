<template >
  <div>
    <h1><b>Registro de Usuario</b></h1>
    <div class="container" id="loginForm">
      <form action="">
        <div class="form-group">
          <label for="">Nombre</label>
          <input
            type="text"
            class="form-control"
            name=""
            id="name"
            placeholder="Thor Andrés"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            placeholder="correo@ejemplo.cl"
            id="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña:</label>
          <input type="password" class="form-control" placeholder="" id="pwd" />
        </div>
        <div class="form-group">
          <label for="pwd">Confirmar Contraseña:</label>
          <input
            type="password"
            class="form-control"
            placeholder=""
            id="pwd2"
            required
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" /> Suscribirse
            Newsletter
          </label>
        </div>
        <button style="margin-right: 8px" type="submit" class="btn btn-primary">
          Registrar
        </button>
        <button type="reset" class="btn btn-warning">Limpiar</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
</style>