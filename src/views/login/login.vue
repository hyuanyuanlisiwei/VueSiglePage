<template>
    <div>
        <el-form label-width="80px" :rules="LoginRules" :model="LoginModel" ref="loginForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="LoginModel.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="LoginModel.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login('loginForm')">登录</el-button>
                <el-button  @click="register">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {login as loginCtr} from '@/api/login';
    export default{
        data(){
            return {
                LoginRules:{
                    name:[{
                        required:true,message:"请输入用户名",trigger:'blur'
                    }],
                    password:[{
                        required:true,message:"请输入密码",trigger:'blur'
                    }]
                },
                LoginModel:{
                    name:"huyuanyuan",
                    password:'123123123'
                }
            }
        },
        methods:{
            login(formName){
                this.$refs[formName].validate((valid)=>{
                   if(!valid){
                       alert("请输入登录信息");
                   }else{
                        loginCtr(this.LoginModel)
                            .then(res=>{
                                let ret=res.data;
                                if("A000000"==ret.code){
                                    //保存登录成功后该用户的信息;
                                    this.$store.commit("saveUserInfo",ret.data);
                                    this.$router.push({path:'plan'});
                                }
                            }).catch(error=>{

                            });
                   }
                });
            },
            register(){
                alert("注册功能!");
            }
        }


    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>