<template>
    <header>
        <div class="left-arrow">&lt;</div>
        <div class="container">
            <header-title></header-title>
            <radio-buttons></radio-buttons>
            <sorting-box></sorting-box>
            <div class="clearfix"></div>
            <input class="search-input" 
                   type="search" 
                   placeholder="Search questions" 
                   v-model="searchWord">
            <input class="search-btn" type="submit" value="SEARCH" >
                   
<!--                   v-on:click="searchQuestions">-->
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>
</template>

<script>
    import headerTitle from "./subcomponents/header-title.vue";
    import radioButtons from "./subcomponents/radio-buttons.vue";
    import sortingBox from "./subcomponents/sorting-box.vue";
 
    export default {
        props: {
            search: {
                type: String
            }
        },
        data() {
            return {
                searchWord: ""
            }
        },
        components: {
            "headerTitle": headerTitle,
            "radioButtons": radioButtons,
            "sortingBox": sortingBox
        },
        watch: {
            "searchWord": function() {
                this.$emit("input", this.searchWord);
            }
        },
        created: function() {
    // We initially sync the internalValue with the value passed in by the parent
    this.searchWord = this.search;
  },
//        computed: {
//            visibleQuestions() {
//                this.$store.state.visibleQuestions.filter((quest) => {
//                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
//                });
//            }
//        }
        methods: {
            searchQuestions() {
                this.$store.state.visibleQuestions = this.$store.state.questions.filter((quest) => {
                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
                });
            }
        }
    }
</script>
<style>
    
</style>