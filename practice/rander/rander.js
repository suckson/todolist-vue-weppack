/* eslint-disable */
import Vue from 'vue'

const component1 = {
  name: 'chaihe',
  inject: ['yeye', 'data'],
  // template: `
  // <div :style='style'>
	//   <slot name="header" aaa = "syn"></slot>
	// </div>`,
  data () {
    return {
  	   style: {
  			width: '200px',
  			height: '200px',
  			border: '1px solid #aaa'
  	  }
    }
  },
  created () {
    console.log(this.yeye.value)
  },
  render (createElement) {
    return createElement('div', {
      style: this.style
    }, this.$slots.header)
  }
}
new Vue({
  el: '#root',
  components: {
    Comp: component1
  },
  data(){
    return {
      value:'syn'
    }
  },
  methods: {
    handleclick(){
      throw TypeError('请叫我柴小恒')
    }
  },
  render (createElement) {
      return createElement(
         'comp',
         {
             ref:'comp',
             props: {
               props1: this.value
             },
             on: {
               click: this.handleclick
             },
             nativeOn: {
               click:this.handleclick   //绑定到根节点原生DOM
             }
         },
         [
          createElement('span',{
            ref: 'span',
            slot: 'header',
            style: 'color:red',
            attrs: {
              id : 'chenpeidong'
            }
          }, this.value)
        ]
      )
  },
  provide () {
		const data = {}
		Object.defineProperty(data , 'value' ,{
			get: () => this.value,
			enumerable: true
		})
    return {
      yeye: this,
      data
    }
  }
})
