<template>
    <div id='app'>
        <p>{{fullName}}{{Counter}}</p>
        <div id="cover"></div>
        <Header/>
        <transition name="fade">
        <router-view/>
        </transition>
        <!-- <Todo/> -->
        <Footer/> 
        <router-view name="a"/>
    </div>
</template>
<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
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
  methods: {
    ...mapActions(['']),
    ...mapMutations([''])
  },
  mounted () {
    console.log(this.$store)
    let i = 1
    this.$store.dispatch('updateCountAsync', {
      num: 10,
      time: 1000
    })
  },
  computed: {
    ...mapState(
      {
        Counter: 'count'
      }
    ),
    fullName () {
      return this.$store.getters.fullName
    },
    ...mapGetters
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