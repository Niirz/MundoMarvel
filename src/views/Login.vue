<template >
  <div>
    <h1><b>Bienvenido</b></h1>
    <div class="container" id="loginForm">
      <form action="">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            class="form-control"
            placeholder="correo@ejemplo.cl"
            id="email"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Contraseña:</label>
          <input
            type="password"
            class="form-control"
            placeholder=""
            id="pwd"
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" /> Recordarme
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
</style>