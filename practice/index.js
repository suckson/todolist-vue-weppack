// import Vue from 'vue'
import './computed/index.js'
// const Div = document.createElement('div')
// document.body.append(Div)
/*
const app = new Vue({
  template: '<div ref="chaiheng">{{text}}</div>',
  data: {
    text: 1
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created: () => {
    console.log('created')
  },
  beforeMount: () => { //  boforeMount会覆盖根节点在挂载之后
    console.log('beforeMount')
  },
  render (h) {
    throw new TypeError('render err')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured (h, err) {
    return h('div', {}, err.stack) // 向上冒泡  并且可以执行
  },
  mounted: () => {
    console.log('mounted')
  },
  activated () {
    console.log('组件章节')
  },
  deactivated () {
    console.log('组件章节')
  },
  destroyed () {
    console.log(' 实例被销毁')
  },
  beforeDestroy () {
    console.log('实例被销毁之前')
  }
})
app.$mount('#root')
setInterval(() => {
  app.text += 1
}, 1000)
console.log(app.$root)
console.log(app.$el)
console.log(app.$data)
console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
console.log(app.$slots)
console.log(app.$scopedSlots)
console.log(app.$refs)
console.log(app.$isServer)
// 注释    render function  在下一次重新赋值的时候才会重新生效

const unwatch = app.$watch('text', (a, b) => {
  console.log(a + ':' + b)
})
setInterval(() => {
  unwatch()
}, 2000)

app.$on('text', () => {
  console.log('text emit')
  const aa = window.prompt('输入金额')
  window.alert(aa)
})
*/
// app.$emit('text')   触发emit方法
