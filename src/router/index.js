import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      component:Layout,
      name:'home',
      redirect:'/product',
      children:[
        {
          path:'product',
          component:Home,
          name:'product',
          meta:{
            islogin:true
          }
        },
        {
          path:'params',
          component:()=>import('../views/Params/Params.vue'),
          name:'params',
          meta:{
            islogin:true
          }
        },
        {
          path:'content',
          component:()=>import('../views/Content/Content.vue'),
          name:'content',
          meta:{
            islogin:true
          }
        }
      ]
    },
    {
      path:'/login',
      component:()=>import('../views/Login/Login.vue'),
      name:'login'
    }
]

const router = new VueRouter({
  routes
})

//前置收尾
router.beforeEach((to,from,next)=>{
  if(to.meta.islogin){
    console.log(to)
    let flag = true 
    if(flag){
      next()
    }else{
      next(false)
    }
  }else{
    next()
  }
})

export default router
