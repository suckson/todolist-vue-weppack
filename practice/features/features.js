/* eslint-disable */

import Vue from 'vue'
const component2 = {
  mouted () {
    console.log(this.$parent.$option.name)
  }
}
const component = {
	name: 'chaihe',
	inject: ['yeye','data'],
  template: `
  <div :style='style'>
	<slot name="header" aaa = "syn"></slot>
	<p><input type="text" v-model="data.value"></p>
	</div>`,
  components: {
    component2
  },
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
	}
}
new Vue({
  el: '#root',
  components: {},
  data () {
    return {
      value: 'chaiheng'
    }
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
  },
  components: {
    comp1: component
  },
  template: `<div>
   <comp1>
	<span slot='header' slot-scope="props">{{props.toString}}</span>
	   <span slot='body'>this is content2</span>
	   </comp1>
	  <input type="text" value="value" v-model="value"/>
  </div>`
})
