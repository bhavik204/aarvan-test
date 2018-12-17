import Vue from 'vue'
import Vuex from 'vuex'

import Vuetify from 'vuetify'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes'

import 'vuetify/dist/vuetify.min.css'

import mixins from './mixins/index'

import store from './store/index'

Vue.use(Vuex);

Vue.use(Vuetify);
// Vue.use(VueRouter);
// const {
//     required,
//     maxLength,
//     email
// } = validators
// const validationMixin = vuelidate.validationMixin

// Vue.use(vuelidate.default)
Vue.mixin(mixins)

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})