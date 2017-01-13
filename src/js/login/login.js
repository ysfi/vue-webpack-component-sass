import Vue from 'vue'
import Vuex from 'vuex'
import login from './compon.vue'

Vue.use(Vuex)

new Vue({
    el: '#vue',
    components: { login },
    data:{
    	message:'11111'
    }
})
