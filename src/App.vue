<template>
  <div>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <router-view name="login"></router-view>
    <router-view name="register"></router-view>
  </div>
</template>

<script>
  export default {
    components:{}
  }
</script>

<style lang="less">
   @import './style/style';
</style>




