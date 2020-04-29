<template>
  <div class="login">
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="login-title">登录|注册</span>
      </div>
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="login-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      </el-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:'Login',
    data(){
      return{
        form:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      ...mapActions(['setegoUserNameActions','setegoTokenAction']),
      onSubmit(){
        // console.log('hello',this.form);
        this.$api.postLogin(this.form)
        .then(res=>{
          // console.log(res)
          if(res.status == 200){
            //登录成功 把用户名和 token 分别存在vuex中和本地
            //vuex
            this.setegoUserNameActions(res.data[0].username)
            this.setegoTokenAction(res.token)
            //本地
            localStorage.setItem('egousername',res.data[0].username)
            localStorage.setItem('egotoken',res.token)
            //登录成功后返回到上一个页面
            this.$router.back()
          }else{
            this.$message.error(res.msg);//打印错误信息
            //清空用户名和密码
            this.form.username = ''
            this.form.password = ''
          }
        })
      }
    },
    mounted(){

    }
}
</script>

<style scpoed>
.login {
    width: 100%;
}
.login-title{
  display:block;
  text-align: center;
}
.box-card {
    width: 600px;
    margin: 0 auto;
    margin-top: 100px;
}
.login-btn{
  margin-left: 165px;
}
.title{
  display: block;
  text-align: center;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}
.sub-btn{
  margin-left:160px;
}
</style>