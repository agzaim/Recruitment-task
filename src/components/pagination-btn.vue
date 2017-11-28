<template>
    <div class="pagination-btn-container">
        <a class="pagination-btn" v-on:click="loadingMore">
            load more questions
        </a>
    </div>
</template>

<script>
    
    export default {
        computed: {
//            questions() {
//                return this.$store.state.questions;
//            },
//            visibleQuestions() {
//                return this.$store.state.visibleQuestions;
//            }  
//            
        },
        methods: {
            loadingMore: function() {
          /*      var partOfQuestions = [];
                //button for more loading won't be necessary when all questions will be shown
//                if(this.slicer >= this.questions.length) {
//                    this.moreToLoad = false;
//                }
                partOfQuestions = this.questions.slice(this.$store.state.visibleQuestions.length, this.$store.state.visibleQuestions.length + this.slicer);

                this.$store.state.visibleQuestions = this.$store.state.visibleQuestions.concat(partOfQuestions);
//                this.sortByDate();*/
                this.$store.commit("loadingPartOfQuestions");
            }
        }            
    }
</script>
<style>
    
</style>
