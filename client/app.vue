<template>
    <div id='app'>
        <div id="cover"></div>
        <div id="loading" v-show="loading">
          <loading></loading>
        </div>
        <Header/>
        <transition name="fade" mode="out-in">
        <router-view />
        </transition>
        <!-- <button @click="clickme">click me</button> -->
        <Footer/>
    </div>
</template>
<script>
import {
  mapState
  // mapGetters,
  // mapMutations,
  // mapActions
} from 'vuex'
import Header from './layout/haeder.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import Loading from './components/loading/loading.vue'
export default {
  name: 'App',
  data () {
    return {
      text: ''
    }
  },
  metaInfo: {
    title: 'suckson Todo'
  },
  components: {
    Header,
    Footer,
    // Todo,
    Loading
  },
  methods: {
    // ...mapActions(['']),
    // ...mapMutations(['']),
    clickme () {
      this.$notify({
        content: 'chaiehng',
        btn: '你好'
      })
    }
  },
  mounted () {
    // console.log(this.$store)
    // let i = 1
    // this.$store.dispatch('updateCountAsync', {
    //   num: 10,
    //   time: 1000
    // })
  },
  computed: {
    ...mapState(['loading'])
    // ...mapState(
    //   {
    //     Counter: 'count'
    //   }
    // ),
    // fullName () {
    //   return this.$store.getters.fullName
    // },
    // ...mapGetters
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