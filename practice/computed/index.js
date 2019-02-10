import Vue from 'vue'
const app = new Vue({
  beforeCreate () {
    window.alert('a')
  }
})
app.$mount('#root')
