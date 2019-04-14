/*
 * @Author:Suckon
 * @Date: 2019-04-14-12:01:28
 * @Last Modified by: 柴小恒
 * @Last Modified time: 2019-04-14 13:43:07
 */
import Notification from './notification.vue'
import notify from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
