<template>
    <header :class="$style.mainHeader">
        <h1>Suckson</h1>
    </header>
</template>
<script>
export default {
  created () {
  }
}
</script>
<style lang="stylus" module>
    .main-header
        text-align center
        h1
            font-size 100px
            color rgba(175,47,47,0.4)
            font-weight 400
            margin 20px
</style>