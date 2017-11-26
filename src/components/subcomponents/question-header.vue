<template>
    <div class="question-box-header">
<!--        <img class="user-photo" alt="" v-bind:src="question.authorPhoto" v-on:click="modalTrigger(question.authorID)">    -->
        <user-photo v-bind:src="question.authorPhoto"></user-photo>
        <div class="question-box-header-content">
            <p>
                <span class="user-name" v-on:click="modalTrigger(question.authorID)"> 
                    {{ question.author }}
                </span>
                IS ASKING:
            </p>
            <router-link v-bind:to="'/question/' + question.questionID">
                <h4>
                    {{ question.question }}
                </h4>
            </router-link>
        </div>
    </div>
</template>

<script>
    import userPhoto from "./user-photo.vue";

    export default {
         props: {
            question: {
                type: Object,
                required: true
            }
        },
        components: {
            "userPhoto": userPhoto
        }
    }
</script>
<style>
    
</style>