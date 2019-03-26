<template>
    <div id='app'>
        <p>{{fullName}}{{Counter}}</p>
        <div id="cover"></div>
        <Header/>
        <router-view/>
        <!-- <Todo/> -->
        <Footer/> 
    </div>
</template>
<script>
import {
  mapState,
  mapGetters
} from 'vuex'
import Header from './layout/haeder.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  name: 'aaa',
  data () {
    return {
      text: ''
    }
  },
  components: {
    Header,
    Footer,
    Todo
  },
  mounted () {
    console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 2000)
  },
  computed: {
    ...mapState(
      {
        Counter: 'count'
      }
    ),
    fullName () {
      return this.$store.getters.fullName
    }
  }
}
</script>
<style lang='stylus' scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0   
        background-color #999 
        opacity 0.8
        z-index -1
</style>