<template>
  <form @submit.prevent="onSubmit" class="form-login">
    <div class="login-inputs">
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
  methods: {
    onSubmit() {
      this.$emit('login', { ...this.form })
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
