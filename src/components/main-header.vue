<template>
    <header>
        <navigation-arrow></navigation-arrow>
        <div class="container header-container">
             <header-title class="header-title-box">
             </header-title>
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
        },
        
        methods: {    
            searchQuestions(searchWord) {
                this.$store.commit("searchingQuestions", searchWord);       
            }
        }
    }
</script>

<style lang="scss">
    

@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
header {
    background-color: #fff;
    width: 100%;
    z-index: 1;
    padding: 30px 3% 19px 3%;
    @include mobiles {
        padding-top: 10px;
    }
}
   
    
.header-container {
    border: 0;
    -webkit-box-shadow: 0 0 0 0;
    box-shadow: 0 0 0 0;
    @include mediaHeader {
        width: 90%;
        display: inline-block;
    }
    @include mobiles {
        padding-bottom: 0;
    }
}
    
    
    
.header-view-buttons {
    display: inline-block;
    color: $color-almost-black;
    font-weight: bold;
    @include mediaHeader {
        float: right;
        margin-top: 10px;
    }
    @include mobiles {
        display: block;
        float: none;
        margin-top: 12px;
    }
}
    
    
.header-sorting-box {
    display: inline-block;
    float: right;
    margin-top: 13px;
    font-family: $main-serif-font;
    font-weight: bold;
    color: $color-grey-dark;
    @include mediaHeader {
        display: block;
        float: none;
        margin-top: 12px;
        padding-left: 20px;
    } 
    @include mobiles {
        display: none;
    } 
}
    
    
.search-input {
    width: 76%;
    height: 34px;
    margin-top: 20px;
    padding-left: 14px;
    border: 1px solid $color-grey-white;
    background-color: $color-main-background;
    float: left;
    @include mobiles {
        width: 100%;
        margin-top: 10px;
    }
}

    
.search-btn {
    height: 34px;
    margin-top: 20px;
    width: 22%;
    border: 1px solid $color-grey-blue;
    color: $color-grey-light;
    font-size: 16px;
    font-weight: bold;
    background-color: #fff;
    float: right;
    &:hover {
        @include btnHoverEffect;
    }
    @include mobiles {
        width: 100%;
        margin-top: 10px;
    }
}
    
</style>