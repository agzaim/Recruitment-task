<template>
    <div>
<!--        <main-header></main-header>-->
        <div class="page-container">
            <div class="container">
                <question-box v-for="question in visibleQuestions" v-bind:key="question.questionID" v-bind:question="question"></question-box>
                <pagination-btn></pagination-btn>
           </div>
       </div>

<!--<profileView v-if="showModal" v-on:close="showModal = false" v-bind:authorID="authorID"></profileView>-->
    
    </div>
</template>

<script>
    
    import methodMixins from "../mixins/methodMixins";
    import mainHeader from "../components/main-header.vue";
    import questionBox from "../components/question-box.vue";
    import paginationBtn from "../components/pagination-btn.vue";

    export default {
        components: {
            "mainHeader": mainHeader,
            "questionBox": questionBox,
            "paginationBtn": paginationBtn
        },
//        props: {
//            questions: {
//                type: Array,
//                required: true
//            }
//        },
        computed: {
            questions() {
                return this.$store.state.questions;
            },
            visibleQuestions() {
                return this.$store.getters.visibleQuestions;
            }
            
            
        },
        data () {
            return {
//                search: "",
//                discussion: "discussion",
//                peer: "peer",
//                conversation: "conversation",
//                showModal: false,
                authorID: 0,
                activeDateBtn: true,
                activeVoteBtn: false,
//                visibleQuestions: this.questions,
//                slicer: 3,
                moreToLoad: true
            }
        },
        methods: {
            loadingMore: function() {
                //button for more loading won't be necessary when all questions will be shown
                if(this.slicer >= this.questions.length) {
                    this.moreToLoad = false;
                }
                this.visibleQuestions = this.questions.slice(0, this.slicer);
                this.sortByDate();
                this.slicer+=3;
            },
            
            searchQuestions: function() {
                this.visibleQuestions = this.visibleQuestions.filter((quest) => {
                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
                });
            },
            sortByDate: function() {
                this.activeDateBtn = true;
                this.activeVoteBtn = false;
                this.visibleQuestions = this.visibleQuestions.sort((a, b) => {
                    return b.publicationDate.localeCompare(a.publicationDate); 
                });
            },
            sortByVotes: function() {
                this.activeDateBtn = false;
                this.activeVoteBtn = true;
                this.visibleQuestions = this.visibleQuestions.sort((a, b) => {
                    return b.votes - a.votes;
                });
            }
        },
        mixins: [methodMixins],

        // I assumed that the default display of the questions should be listed by "recent" as this option is active in the sent view  
        beforeMount() {
//            this.loadingMore();
        }
    }

</script>

<style lang="scss">
    div {
        a {
            background-color: aqua;
        }
        
    }
</style>
