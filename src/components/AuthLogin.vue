<template>
  <form @submit.prevent="onSubmit" class="form-login">
    {{ $store.state.auth.userData.name }}
    <div class="login-inputs">
      <BaseInput
        v-model="formName"
        name="name"
        placeholder="Introduce nombre"
      />
      <BaseInput
        v-model="form.email"
        name="email"
        placeholder="Introduce email"
        type="email"
      />
      <BaseInput
        v-model="form.password"
        name="password"
        placeholder="Introduce contraseña"
        type="password"
      />
    </div>

    <BaseButton type="submit">Iniciar sesión</BaseButton>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'AuthLogin',
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    formName: {
      get() {
        return this.$store.state.auth.userData.name
      },
      set(newValue) {
        this.$store.commit('auth/updateUserName', newValue)
      },
    },
  },
  methods: {
    onSubmit() {
      this.$emit('login', { ...this.$store.state.auth.userData, ...this.form })
    },
  },
}
</script>

<style lang="scss" scoped>
.form-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #c2d8f7;
  border-radius: 10px;

  .login-inputs {
    display: flex;
    flex-direction: column;
  }
}
</style>
