<template>
    <div class="question-box">
        <question-header v-bind:question="question"></question-header>
                <div class="question-box-content">
                    <div class="user-activities-container">
                        <div class="question-box-element">
                            <div class="user-activity-desription">
                                ASKED
                            </div>
                        </div>
                        <div class="question-box-element">
                            <span>
                                {{ question.moreActivities }}
                            </span>
                            <p> 
                                more <br> 
                                activities
                            </p>
                            <div class="question-box-element-dot"></div>
                        </div>
                        <user-activity 
                            v-for="activity in question.activities" 
                            v-bind:key="activity.author" 
                            v-bind:activity="activity">
                        </user-activity>     
                    </div>
                    <div class="question-box-summary">
                        <activities-summary 
                            v-bind:quantity="question.relatedDiscussions"
                            v-bind:description="discussion"
                        ></activities-summary>
                        <activities-summary 
                            v-bind:quantity="question.peersInvolved"
                            v-bind:description="peer"
                        ></activities-summary>
                        <activities-summary 
                            v-bind:quantity="question.conversations"
                            v-bind:description="conversation"
                        ></activities-summary>
                    </div> 
                </div> 
            </div>
</template>



<script>
    import questionHeader from "./subcomponents/question-header.vue";
    import userActivity from "./subcomponents/user-activity.vue";
    import activitiesSummary from "./subcomponents/activities-summary.vue";
 
    export default {
        data() {
            return {
                discussion: "discussion",
                peer: "peer",
                conversation: "conversation"
            }
        },
        props: {
            question: {
                type: Object,
                required: true
            }
//            discussion: {
//                type: String,
//                required: true
//            },
//            peer: {
//                type: String,
//                required: true
//            },
//            conversation: {
//                type: String,
//                required: true
//            }
        },
        components: {
            "questionHeader": questionHeader,
            "userActivity": userActivity,
            "activitiesSummary": activitiesSummary
        },
        computed: {
            
//            questions() {
//                return this.$store.state.questions;
//            },
//            visibleQuestions() {
//                return this.$store.getters.visibleQuestions;
//            }
            
            
        }
    }
</script>
<style>
    
</style>