<template lang="">
    <section class='real-app'>
        <input  type = "text"class = "add-input"autofocus = "autofocus" placeholder = "接下去要做什么？"@keyup.enter = "addTodo" />
        <Item  v-for="todo in filteredTodos"  :key="todo.id" @del="deleteTodo()"></Item>
        <Tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted"/>
    </section>
</template>
<script>
import Item from './items.vue'
import Tabs from './tabs.vue'
let id = 0;
export default {
    data(){
      return{
        //   todo:{
        //       id:0,
        //       content:'this is todo',
        //       computed: false
        //   },
          filter: 'all',
          todos: []
      }
    },
    methods:{
        addTodo(e){
           if (e.target.value.trim()) {
                    this.todos.unshift({
                        id: id++,
                        content: e.target.value.trim(),
                        completed: false
                    });
                    e.target.value = '';
                } else {
                    alert('傻X，输入不能为空 !-_-');
                }
        },
        deleteTodo(id){
           this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        clearAllCompleted() {
                // 给todos赋一个新的值（即todo.completed为false的值）
                this.todos = this.todos.filter(todo => todo.completed === false)

        }
    },
    components:{
        Item,
        Tabs,
    },
    computed: {
            filteredTodos() {
                if (this.filter === 'all') {
                    return this.todos;
                }
                const completed = this.filter === 'completed';

                // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
                return this.todos.filter(todo => completed === todo.completed);

            }
        }
}
</script>
<style lang="stylus" scoped>
.real-app
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666

.add-input
    position relative
    margin 0
    width 100%
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smmothing antialiased
    padding 16px 16px 16px 36px
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
