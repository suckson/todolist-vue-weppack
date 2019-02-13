import Vue from 'vue'
const compoent = {
  template: `<div>
  <span v-show="active" @click="handleChange">See me v-show{{PropOne}}</span>
  </div>`,
  props: {
    PropOne: Number,
    active: Boolean,
    onChange: Function
  },
  data () {
    return {
      text: 'syn'
    }
  },
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  }
}
Vue.component('CompOne', compoent)
new Vue({
  el: '#root',
  data: {
    PropOne: 1
  },
  methods: {
    handleChange () {
      // this.onChange()
      this.PropOne += 5
    }
  },
  mounted () {
    console.log(this.$refs.comp1)
  },
  template: `
  <div>
  <comp-one :active="true" ref="comp1" :PropOne="PropOne" @change="handleChange"></comp-one>
  <comp-one :active="false"></comp-one>
  </div>
  `
})
