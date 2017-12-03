import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { store } from "./store/store";
import allQuestions from './containers/allQuestions.vue';
import singleQuestion from './containers/singleQuestion.vue';


Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    routes: [
        {path: '/', component: allQuestions},
        {path: '/question/:id', component: singleQuestion}
    ],
    mode: 'history'
});


new Vue({
    store: store,
    el: '#app',
    render: h => h(App),
    router: router
})
