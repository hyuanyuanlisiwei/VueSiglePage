<template>
    <div class="app-container">
        <div class="sidebar-wrapper">
            <sidebar></sidebar>
        </div>
        <div class="app-wrapper">
            <app></app>
        </div>
    </div>
</template>
<script>
    import sidebar from './sidebar.vue';
    import app from './app-main.vue'
    export default{
        components:{
            sidebar,
            app
        }


    }

</script>
<style lang="scss">
    .app-container{
        height: 100%;
    }


    
</style>