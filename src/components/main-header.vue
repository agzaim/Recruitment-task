<template>
    <header>
        <navigation-arrow></navigation-arrow>
        <div class="container">
            <header-title v-bind:mainHeader="classBind"></header-title>
             <div class="header-view-buttons">
                <radio-button v-bind:value="myShelf" 
                              v-bind:checked="checked">
                    My shelf
                </radio-button>
                <radio-button v-bind:value="allQuestions">
                    All questions
                </radio-button>
            </div>
            <p class="header-sorting-box">
                Sort by:
                <sorting-choice v-bind:choice="date"
                                v-bind:activeBtn="activeDateBtn">
                    recent
                </sorting-choice>
                or 
                <sorting-choice v-bind:choice="votes"
                                v-bind:activeBtn="activeVoteBtn">
                    hot
                </sorting-choice>
            </p>
            <div class="clearfix"></div>
            <input class="search-input" 
                   type="search" 
                   placeholder="Search questions" 
                   v-model="search">
            <input class="search-btn" 
                   type="submit" 
                   value="SEARCH" 
                   v-on:click="searchQuestions(search)">
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>
</template>

<script>
    import navigationArrow from "./subcomponents/navigation-arrow.vue";
    import headerTitle from "./subcomponents/header-title.vue";
    import radioButton from "./subcomponents/radio-button.vue";
    import sortingChoice from "./subcomponents/sorting-choice.vue";
 
    export default {
        data() {
            return {
                search: "",
                myShelf: "myShelf",
                allQuestions: "allQuestions",
                checked: true,
                classBind: true,
                date: "byDate",
                votes: "byVotes"
            }
        },
        components: {
            "navigationArrow": navigationArrow,
            "headerTitle": headerTitle,
            "radioButton": radioButton,
            "sortingChoice": sortingChoice
        },
        

        computed: {
            activeDateBtn() {
                return this.$store.state.activeDateBtn;
            },
            activeVoteBtn() {
                return this.$store.state.activeVoteBtn;
            }
//            visibleQuestions() {
//                this.$store.state.visibleQuestions.filter((quest) => {
//                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
//                });
//            }
        },
        methods: {
//            searchQuestions() {
//                this.$store.state.visibleQuestions = this.$store.state.questions.filter((quest) => {
//                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
//            });
                
                
                
            searchQuestions(searchWord) {
                this.$store.commit("searchingQuestions", searchWord);
//                this.$store.state.visibleQuestions = this.$store.state.questions.filter((quest) => {
//                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
//                });
            }
        }
    }
</script>
<style>
    
</style>