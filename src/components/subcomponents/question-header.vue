<template>
    <div class="question-box-header">
        <user-photo v-bind:input="question"></user-photo>
        <div class="question-box-header-content">
            <p>
                <user-name v-bind:input="question"></user-name>
                IS ASKING:
            </p>
            <router-link v-bind:to="'/question/' + question.questionID" >
                         
<!--                         v-on:click.native="choosingQuestion(question.questionID)">-->
                <h4>
                    {{ question.question }}
                </h4>
            </router-link>
        </div>
    </div>
</template>

<script>
    import userPhoto from "./user-photo.vue";
    import userName from "./user-name.vue";

    export default {
         props: {
            question: {
                type: Object,
                required: true
            }
        },
        components: {
            "userPhoto": userPhoto,
            "userName": userName
        },
        methods: {
            choosingQuestion(qID) {
                 this.$store.commit("choosingQuestion", qID);
            }
        }
    }
</script>
<style>
    
</style>