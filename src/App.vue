<template>
    <div id="app">
<!--        <router-view v-bind:questions="questions"></router-view>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import allQuestions from "./containers/allQuestions.vue";
    import singleQuestion from "./containers/singleQuestion.vue";
//    import questionList from "./data/questions.json";


    export default {
        components: {
            "allQuestions": allQuestions,
            "singleQuestion": singleQuestion
        },

        data() {
            return {
//                questions: questionList.questions         
            }
        }
    }

</script>

<style>

</style>
