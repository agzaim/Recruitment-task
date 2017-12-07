import allQuestions from './containers/allQuestions.vue';
import singleQuestion from './containers/singleQuestion.vue';

export const routes = [
     {path: '/', component: allQuestions},
     {path: '/question/:id', component: singleQuestion}
]