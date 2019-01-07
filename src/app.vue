<template>
    <div id='app'>
        <div id="cover"></div>
        <Header/>
        <Todo/>
        <Footer/> 
    </div>
</template>
<script>
import Header from './todu/haeder.vue'
import Footer from './todu/footer.jsx'
import Todo from './todu/todo.vue'
export default {
    data () {
        return {
            text:""
        }
    },
    components:{
        Header,
        Footer,
        Todo,
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
