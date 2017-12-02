<template>
    <div class=" container answer-section">
            <div class="answer-container">
                <div class="answer-photo-box">
                    <user-photo v-bind:input="answer"></user-photo>
                </div>
                <answer-box v-bind:input="answer"></answer-box>
                <votes-box v-bind:votes="answer.votes"></votes-box>
            </div>
            <div class="answer-container comment-container" v-for="comment in answer.comments">
                <div class="empty-box"></div>
                <div class="answer-photo-box">
                    <user-photo v-bind:input="comment"></user-photo>
                </div>
                <answer-box v-bind:input="comment"></answer-box>
                <votes-box v-bind:votes="comment.votes"></votes-box>
            </div>
            <reaction-btn v-bind:commentsLength="answer.comments.length">
            </reaction-btn>
    </div> 
</template>

<script>
    
    import userPhoto from "./subcomponents/user-photo.vue";
    import votesBox from "./subcomponents/votes-box.vue";
    import answerBox from "./subcomponents/answer-box.vue";
    import reactionBtn from "./subcomponents/reaction-btn.vue";


    export default {
         props: {
            answer: {
                    type: Object,
                    required: true
            }
        },
        components: {
            "userPhoto": userPhoto,
            "votesBox": votesBox,
            "answerBox": answerBox,
            "reactionBtn": reactionBtn
        }
    }

</script>

<style>

</style>