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
                    <span class="question-box-element-description-quantity">
                        {{ question.moreActivities }}
                    </span>
                    <p class="activity-description question-box-element-description"> 
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
                <activities-summary v-bind:quantity="question.relatedDiscussions" 
                                    v-bind:description="discussion">
                </activities-summary>
                <activities-summary v-bind:quantity="question.peersInvolved" 
                                    v-bind:description="peer">
                </activities-summary>
                <activities-summary v-bind:quantity="question.conversations"
                                    v-bind:description="conversation">
                </activities-summary>
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

<style lang="scss">

/*@import "../../scss/fonts.scss";   
@import "../../scss/mixins.scss";
@import "../../scss/variables.scss";*/ 
  
    
/*@import "../assets/styles/scss/fonts.scss";*/
@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.question-box {
    border-top: $border-style;
    border-bottom: $border-style;;
    padding-bottom: 40px;
}
    
    
.question-box-content {
    display: flex;
    justify-content: flex-start;
}

    
.user-activities-container {
    width: 76%;
    display: flex;
    @include smallTablets {
         width: 70%;
    }
    @include mobiles {
         width: 60%;
    }
}
    
    
.question-box-element-description {
     line-height: 16px;   
}
  
    
.question-box-element-description-quantity {
    display: block;
    text-align: center;
    color: $color-grey-dark;
    font-family: $main-sans-serif-font, sans-serif;
    font-size: 18px;
    margin-top: 17px;
    margin-bottom: 60px;   
}
    
    
.question-box-summary {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    align-items: flex-start;
    padding-left: 60px;
    @include tablets {
        padding-left: 50px;
    }
    @include mobiles {
        padding-left: 30px;
    }
}
    

</style>