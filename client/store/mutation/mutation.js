export default {
  updateCount (state, num) {
    state.count = num
  },
  updateCountAsync (state, data) {
    console.warn(data)
    console.dirxml(data)
    state.count = data
  }
}
