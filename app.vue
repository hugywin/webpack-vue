<template>
  <h3>{{messsage}}</h3>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello vue.js'
    }
  },

  ready () {
    console.log('ready');
  }
}
</script>

<style lang="less">
  h3{
    background: #fff;
  }
</style>
