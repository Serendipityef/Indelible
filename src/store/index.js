import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    egoUserName:'',
    egoToken:''
  },
  mutations: {
    setegoUserName(state,name){
      state.egoUserName = name
    },
    delegoUserName(state){
      state.egoUserName = ''
    },
    setegoToken(state,token){
      state.egoToken = token
    },
    delegoToken(state){
      state.egoToken = ''
    }
  },
  actions: {
    setegoUserNameActions(context,name){
      context.commit('setegoUserName',name)
    },
    delegoUserNameAction(context){
      context.commit('delegoUserName')
    },
    setegoTokenAction(context,token){
      context.commit('setegoToken',token)
    },
    delegoTokenAction(context){
      context.commit('delegoToken')
    }
  },
  modules: {
  }
})
