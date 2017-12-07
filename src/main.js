import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { routes } from './routes';
import { store } from './store/store';


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    mode: 'history',
    routes: routes
});


new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
    router: router
})
