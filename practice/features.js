import Vue from 'vue'

const component = {
  template:`   
	<div :style='style'>
	<slot name="header"></slot>
	</div>
  `,
  data(){
  	return{
  		style:{
  			width: '200px',
  			height: '200px',
  			border: '1px solid #aaa'
  		}
  	}
  }
}

new Vue({
  el:'#root',
  data(){
  	return{

  	}
  },
  components:{
  	comp1:component
  }
  template: `<div>
   <comp1>
	<span slot='header'>this is content1</span>
	<span slot='body'>this is content2</span>
   </comp1>
  </div>`

})