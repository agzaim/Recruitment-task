<template>
    <div id="app">
<!--    <allQuestions v-bind:questions="questions"></allQuestions>-->
        <router-view v-bind:questions="questions"></router-view>
    </div>
</template>

<script>
    import allQuestions from "./components/allQuestions.vue";
    import singleQuestion from "./components/singleQuestion.vue";
    import profileView from "./components/profileView.vue";
    import usersData from "./data/users.json";
    import questionList from "./data/questions.json";


    export default {
        components: {
            "allQuestions": allQuestions,
            "singleQuestion": singleQuestion,
            "profileView": profileView
        },

        data() {
            return {
                users: usersData.users,
                questions: questionList.questions


                //        users: [
                ////            "Mark" , "Anna"
                //            {name: "Mark", job: "plumber"},
                //            {name: "Anne", job: "engineer"}
                //        ]
                
            }
        }
    }

</script>

<style>

</style>
