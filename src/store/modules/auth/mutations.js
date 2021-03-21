export default {
  setUserData(state, payload) {
    state.userData = payload
  },
  updateUserName(state, name) {
    state.userData.name = name
  },
}
