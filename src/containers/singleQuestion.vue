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
  
<!--    <profileView v-if="showModal" v-on:close="showModal = false" v-bind:authorID="authorID"></profileView>-->
      
    </div>
</template>

<script>

     import methodMixins from "../mixins/methodMixins";
     import singleQuestionHeader from "../components/single-question-header.vue";
     import singleQuestionBox from "../components/single-question-box.vue";
     import answerContainer from "../components/answer-container.vue";

    export default {
         props: {
//            questions: {
//                    type: Array,
//                    required: true
//            }
        },
        data () {
            return {
                id: "",
//                id: this.$route.params.id,
                peer: "peer",
//                unfollowBtn: "unfollow",
//                showModal: false,
//                authorID: 0
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

<style>
</style>
