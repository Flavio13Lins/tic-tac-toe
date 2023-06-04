import { createStore } from 'vuex'
import modules from '@/store/modules/modules'

const store = createStore({
  strict: true,
  modules: modules,
  plugins: []
})

export default store
