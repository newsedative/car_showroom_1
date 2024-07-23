import { createStore} from 'vuex'
import {access} from "@babel/core/lib/config/validation/option-assertions";

export default createStore({
  state: {
      access: '',
      refresh: ''
  },
  mutations: {
      initializerStore(state) {
          if (localStorage.getItem("access")) {
              state.access = localStorage.getItem("access");
          } else {
              state.access = '';
          }
      },
      setAccess(state, access) {
          state.access = access;
      }
  }
})