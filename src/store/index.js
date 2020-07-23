import Vue from 'vue'
import Vuex from 'vuex'

// import VuexPersist from "vuex-persist";//导入持久化的工具
Vue.use(Vuex)

//实例化插件
// const vuexLocal = new VuexPersist({
//   key:"mi_vuex",
//   storage: window.localStorage
// });

export default new Vuex.Store({
  state: {
    user:"",//用户信息
  },
  mutations: {
    login(state,payload){
      state.user = payload;
    },
    logout(state){
      state.user = "";
    }
  },
  actions: {

  },
//   plugins:[vuexLocal.plugin]
})