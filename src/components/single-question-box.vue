<template>
    <div class="question-box single-question-box">
            <unfollow-btn></unfollow-btn>
            <question-header v-bind:question="question">
            </question-header>
            <div class="question-background">
                    <div class="blue-block"></div>
                    <div class="longer-text">
                        {{ question.content }}
                    </div>
                    <votes-box v-bind:votes="question.votes"></votes-box>
                    <reaction-btn v-bind:commentsLength="btnValue">
                    </reaction-btn>
            </div>
    </div>
</template>


<script>
    
    import questionHeader from "./subcomponents/question-header.vue";
    import unfollowBtn from "./subcomponents/unfollow-btn.vue";
    import votesBox from "./subcomponents/votes-box.vue";
    import reactionBtn from "./subcomponents/reaction-btn.vue";
    
    
    export default {
        data() {
            return {
                btnValue: -1
//                peer: "peer",
//                conversation: "conversation"
            }
        },
        components: {
            "questionHeader": questionHeader,
            "unfollowBtn": unfollowBtn,
            "votesBox": votesBox,
            "reactionBtn": reactionBtn
        },
        computed: {
            question() {
                return this.$store.state.chosenQuestion;
            }
        }
    }
</script>


<style>
    
</style>