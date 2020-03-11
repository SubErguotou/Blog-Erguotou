import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem("isCollapse")) || false,
    // count:10
  },
  // 和计算属性一样获取值
  getters:{
    // count: state => {state.count+10}
  },
  mutations: {
    // 第一个参数是上面的state对象，第二个参数是调用它传来的对象,可以不传
    SET_collapse(state){
        state.isCollapse = !state.isCollapse;

        // 使用session(HTML本地存储)
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));
    }
  },
  actions: {
  },
  modules: {
  }
})
