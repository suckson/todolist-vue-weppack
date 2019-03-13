import Vue from 'vue'
const compoent = {
  name: 'chaiehng',
  props: ['value'],
  data () {
    return {

    }
  },
  template: `
    <div>
      <input type="text" @input="handleIput($event,'chaiheng')">
    </div>`,
  methods: {
    handleIput (a, e) {
      console.log(a)
      console.log(e)
      this.$emit('input', a.target.value)
    }
  }
}
const compoent2 = {
  extend: compoent,
  data () {
    return {
      text: 'tex1'
    }
  },
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <p>{{text}}</p>
    </div>`,
  created () {
    console.log(this.$parent)
  }
}

const app = new Vue({
  el: '#root',
  data: {
    value: '123'
  },
  components: {
    Comp: compoent
  },
  template: `<div>
  <comp  v-model="value"></comp>
  </div>`
})
