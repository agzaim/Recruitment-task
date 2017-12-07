<template>
    <header>
        <router-link v-bind:to="'/'">
            <navigation-arrow></navigation-arrow>
        </router-link>
        <div class="container sng-header-container">
            <!--<header-title v-bind:singleQuestionHeader="classBind">
            </header-title>-->
            <header-title class="single-title-box">
            </header-title>
            <p class="discussion-timer">
                Last time discussed
                <span> 
                    {{ question.lastTimeDiscussed.number }}
                </span>
                    {{ question.lastTimeDiscussed.description }}
            </p>
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>
</template>


<script>
    import navigationArrow from "./subcomponents/navigation-arrow.vue";
    import headerTitle from "./subcomponents/header-title.vue";
 
    export default {
        /*data() {
            return {
                classBind: true
            }
        },*/
        computed: {
            question() {
                return this.$store.state.chosenQuestion;
            }
        },
        components: {
            "navigationArrow": navigationArrow,
            "headerTitle": headerTitle   
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
    
.sng-header-container {
    padding-bottom: 18px;
    border: 0;
    box-shadow: 0 0 0 0;
    @include mediaHeader {
        width: 90%;
        display: inline-block;
        float: right;
    }
    @include mobiles {
        padding-bottom: 0;
    }
}
    

.discussion-timer {
    @include acivitiesFontStyle;
    padding-top: 5px;
    float: right;
    display: inline-block;
    margin-top: 9px;
    span {
        padding: 0 9px;
    }
    @include mobiles {
        display: none;
    }
}

</style>