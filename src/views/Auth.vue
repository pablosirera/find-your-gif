<template>
  <section>
    <div class="auth-links">
      <router-link to="/auth/login">Iniciar sesión</router-link>
      <router-link to="/auth/register">Regístrate</router-link>
    </div>

    <router-view />
  </section>
</template>

<script>
export default {
  name: 'Auth',
}
</script>

<style lang="scss" scoped>
.auth-links {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
