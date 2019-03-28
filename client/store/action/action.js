export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCountAsync', data.num)
    }, data.time)
  }
}
