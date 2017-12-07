<template>
    <div>
        <single-question-header></single-question-header>
        <div class="page-container">
            <div class="container">
                <single-question-box></single-question-box>
            </div>
            <p class="answer-introduction" 
               v-if="question.answeres.length > 0">
                <span>
                    {{ question.answeres.length }}
                </span>
                {{ activitiesQuantity(question.answeres.length, peer) }} 
                already answered   
                {{ question.author }}
            </p>
            <p class="answer-introduction" v-else>
                No one answered {{ question.author }} yet
            </p>
            <answer-container 
                v-for="answer in question.answeres" 
                v-bind:key="answer.author" 
                v-bind:answer="answer">
            </answer-container>   
        </div>    
    </div>
</template>

<script>

     import methodMixins from "../mixins/methodMixins";
     import singleQuestionHeader from "../components/single-question-header.vue";
     import singleQuestionBox from "../components/single-question-box.vue";
     import answerContainer from "../components/answer-container.vue";

    export default {
        data () {
            return {
                id: "",
//                id: this.$route.params.id,
                peer: "peer"
            }
        },
        components: {
            "singleQuestionHeader": singleQuestionHeader,
            "singleQuestionBox": singleQuestionBox,
            "answerContainer": answerContainer

        },
        methods: {
            
//            btnDescription: function(commentsList) {
//               if(commentsList.length > 0) {
//                   return "CONTINUE discussion";
//               } else {
//                   return "COMMENT";
//               }        
//            },
            
//            followToggler: function() {
//                if (this.unfollowBtn == "unfollow") {
//                    this.unfollowBtn = "follow";
//                } else {
//                    this.unfollowBtn = "unfollow";
//                }
//            },
            
//            votesCounter: function(votes) {
//                return Math.abs(votes);
//            },
//            
//            votesDescription: function(votes) {
//                if (votes >= 0) {
//                    return "upvotes";
//                } else {
//                    return "downvotes";
//                }
//            }
        },
        
        computed: {
//            question: function() {
//                return this.questions.filter((quest) => {
//                    return quest.questionID == this.id;
//                })[0];
//            }
            question() {
                return this.$store.state.chosenQuestion;
            }
        },
        beforeMount() {
            this.id = this.$route.params.id;
            this.$store.commit("choosingQuestion", this.id);
        },
        mixins: [methodMixins]
    }

</script>

<style lang="scss">
    
/*@import "../../scss/fonts.scss";
@import "../../scss/mixins.scss";
@import "../../scss/variables.scss"; */
  
/*@import "../assets/styles/scss/fonts.scss";*/
@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.answer-introduction {
    @include acivitiesFontStyle;
    color: $color-almost-black;
}
    
    
.answer-introduction + .answer-section {
    margin-top: 17px;
}
    
</style>
