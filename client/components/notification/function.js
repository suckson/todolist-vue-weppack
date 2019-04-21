import Vue from 'vue'
import Component from './func-notification'

const NotificationContructor = Vue.extend(Component)
const instances = []
let seed = 1
const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(item => item.id === instance.id)
  instances.splice(index, 1)
  const removeHeight = instance.vm.height
  for (var i = 0; i < len - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - removeHeight - 16
  }
}

const nofity = (options) => {
  const { autoClose, ...rest } = options
  if (Vue.prototype.$isServer) return
  const instance = new NotificationContructor({
    propsData: {...rest},
    data () {
      return {
        autoClose: autoClose === undefined ? 3000 : autoClose
      }
    }
  })
  const id = `nofitication_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  console.log(id, instance)
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  instance.vm.$on('closed', () => {
    removeInstance(instance)
  })
  return instance.vm
}
export default nofity
