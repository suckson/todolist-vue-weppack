<template lang="">
    <section class='real-app'>
        <div class="tab-container">
          <tabs :value = "filter" @change="handleChangeTab">
            <tab :label="tab" :index="tab" v-for="tab in stats" :key="tab" />
          </tabs>
        </div> 
        <input  type = "text" class = "add-input" autofocus = "autofocus" placeholder = "接下去要做什么？" @keyup.enter="handleAdd" />
        <div class="todu-content">
          <item :todo="todo" v-for="todo in filteredTodos" :key="todo.id" @del="deleteTodo" @toggle="toggleTodoState" />
        </div>
        <Helper :filter="filter"  :todos="todos" @clearAllCompleted="clearAllCompleted"/>
    </section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import Item from './items.vue'
import Helper from './helper.vue'
export default {
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter (to, form, next) {
    console.log('进入路由')
    next()
  },
  beforeRouteUpdate (to, form, next) {
    console.log('genxin')
    next()
  },
  beforeRouteLeave (to, form, next) {
    console.log('路由离开')
    next()
  },
  data () {
    return {
      filter: 'all',
      stats: ['all', 'active', 'completed']
    }
  },
  props: ['id'],
  mounted () {
    // console.log('todo mounted')
    if (this.todos && this.todos.length < 1) {
      this.fetchTodos()
    }
  },
  asyncData ({ store, router }) {
    if (store.state.user) {
      return store.dispatch('fetchTodos')
    }
    router.replace('/login')
    return Promise.resolve()
  },
  methods: {
    ...mapActions(['fetchTodos', 'addTodo', 'deleteTodo', 'updateTodo', 'deleteAllCompleted']),
    handleAdd (e) {
      const content = e.target.value.trim()
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        })
        return
      }
      const todo = {
        content,
        completed: false
      }
      this.addTodo(todo)
      e.target.value = ''
    },
    toggleTodoState (todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      })
      console.log(todo)
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    clearAllCompleted () {
      // this.todos = this.todos.filter(todo => !todo.completed)
      this.deleteAllCompleted()
    },
    handleChangeTab (value) {
      this.filter = value
    }
  },
  components: {
    Item,
    Helper
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      // 将todos数组中，completed为true的值过滤出来，并返回一个新数组
      return this.todos.filter(todo => completed === todo.completed)
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
.tab-container
    background #ffffff
    padding 0px 15px
.todu-content
    max-height 300px
    overflow-y auto
.todu-content::-webkit-scrollbar
  width: 7px;
  background-color: #F5F5F5;
.todu-content::-webkit-scrollbar-thumb {
  border-radius 10px
  -webkit-box-shadow inset 0 0 5px rgba(0,0,0,0.2)
  border-radius 10px;
  background-image -webkit-gradient(linear, left bottom, left top, color-stop(0.44, rgb(181,163,163)), color-stop(0.72, rgb(181,163,163)), color-stop(0.86, rgb(181,163,163)))
}
.todu-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
} 
</style>
