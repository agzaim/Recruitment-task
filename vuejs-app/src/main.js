import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import allQuestions from './components/allQuestions.vue';
import singleQuestion from './components/singleQuestion.vue';
import profileView from './components/profileView.vue'; 

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component("profileView", profileView);

const router = new VueRouter({
    routes: [
        {path: '/', component: allQuestions},
        {path: '/question/:id', component: singleQuestion}
    ],
    mode: 'history'
});


new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
