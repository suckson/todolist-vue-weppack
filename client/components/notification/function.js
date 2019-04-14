import Vue from 'vue'
import Component from './func-notification'

const NotificationContructor = Vue.extend(Component)
const instances = []
let seed = 1

const nofity = (Options) => {
  if (Vue.prototype.$isServer) return
  const instance = new NotificationContructor({
    props: Options
  })

  const id = `nofitication_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0

  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instances.push(instance)
  return instance.vm
}
export default nofity
