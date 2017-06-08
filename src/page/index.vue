<template>
    <div>
        <h1 class="logo">cnodejs Api Test</h1>
        <ul class="list">
            <li v-for="item in lists">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                lists:[]
            }
        },
        mounted(){
            this.getTopics();
        },
        methods:{

            getTopics:function () {
                var vm=this;
                this.$api.getTopics('topics',function (res) {
                    vm.lists=res;
                });
            }
        }
    }
</script>
<style scoped lang="less">


</style>