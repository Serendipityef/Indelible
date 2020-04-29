<template>
  <div class="topNav">
      <div id="topbanner">
          <div class="con">
              <div class="Log">
                  <span>ego商城后台系统</span>
              </div>
              <div>
                  <router-link to='/product'>
                    <i class="el-icon-search"></i>   
                    查询商品
                  </router-link>
              </div>
              <div>
                  <router-link to='/params'>
                    <i class="el-icon-copy-document"></i>   
                    规格参数
                  </router-link>
              </div>
              <div>
                  <router-link to='/content'>
                    <i class="el-icon-postcard"></i>   
                    内容分类管理
                  </router-link>
              </div>
              <div>
                  <span class="username">
                      {{$store.state.egoUserName}}
                  </span>
                  <el-button
                    @click='logout'
                  >退出</el-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'Nav',
    methods:{
        ...mapActions(['delegoUserNameAction','delegoTokenAction']),
        logout(){
            // console.log('退出')
            // 删除本地存储
            localStorage.removeItem('egousername');
            localStorage.removeItem('egotoken')
            //删除store中state存储
            this.delegoUserNameAction();
            this.delegoTokenAction()
            this.$router.push('/login')
        }
    }
}
</script>

<style scoped>
#topbanner {
    width: 100%;
    height: 80px;
    background: rgb(42, 50, 61);
    margin: 0 auto;
}

.con {
    width: 1120px;
    height: 80px;
    margin: 0 auto;
}
html {
    padding: 0;
    margin: 0;
}

.topNav a {
    text-decoration: none;
    /* margin: 20px 20px 20px 20px; */
    color: aliceblue;
}

.con div {
    float: left;
    width: 220px;
    height: 80px;
    line-height: 80px;
}

.backcolor,
.classname {
    color: aliceblue;
    cursor: pointer;
}

#topbanner img {
    width: 100%;
    height: 100%;
}

.Log span {
    font-weight: 800;
    font-style: normal;
    color: aliceblue;
    font-size: 25px;
    display: block;
}
.topNav .active {
    color: #409eff;
}

.nick {
    margin-right: 10px;
    color: #fff;
}
.username {
    font-size: 20px;
    color: #fff;
    margin-right: 5px;
}
.topNav .router-link-exact-active{
    color: #409eff;
}
</style>
