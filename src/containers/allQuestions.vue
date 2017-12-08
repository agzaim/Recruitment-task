<template>
    <div>
        <main-header></main-header>
        <div class="page-container">
            <div class="container">
                <question-box 
                    v-for="question in visibleQuestions" 
                    v-bind:key="question.questionID" 
                    v-bind:question="question">
                </question-box>
                <pagination-btn
                    v-if="moreToLoad">
                </pagination-btn>
            </div>
        </div>
    </div>
</template>

<script>
    
    import methodMixins from "../mixins/methodMixins";
    import mainHeader from "../components/main-header.vue";
    import questionBox from "../components/question-box.vue";
    import paginationBtn from "../components/pagination-btn.vue";

    export default {
    
        computed: {
            visibleQuestions() {
                return this.$store.state.visibleQuestions;  
            },
            moreToLoad() {
                return this.$store.state.moreToLoad;
            }
        },

        components: {
            "mainHeader": mainHeader,
            "questionBox": questionBox,
            "paginationBtn": paginationBtn
        },
        
        mixins: [methodMixins],
          
        beforeMount() {
            this.$store.commit("loadingPartOfQuestions");
            this.$store.commit("sortingQuestions");
        }
    }

</script>

<style lang="scss">
     
</style>
