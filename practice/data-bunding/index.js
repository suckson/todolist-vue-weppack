import Vue from 'vue'
const app = new Vue({
  template: `<div :style='styles'>{{isActive ? 'chaiheng' : 'shiyanan'}}</div>`,
  data: {
    isActive: true,
    styles: {
      color: 'red',
      appearance: 'none'
    }
  }
})
app.$mount('#root')
