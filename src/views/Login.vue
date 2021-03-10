<template>
  <section class="auth-section" v-if="!isLogged">
    <AuthLogin @login="changeLogged" />
  </section>
</template>

<script>
import AuthLogin from '@/components/AuthLogin.vue'

export default {
  name: 'Login',
  components: {
    AuthLogin,
  },
  methods: {
    changeLogged() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>

<style lang="scss" scoped>
.auth-section {
  display: flex;
  justify-content: center;
  background-color: #ececec;
  padding: 40px 0;
  margin-bottom: 20px;
}
</style>
