<template>
    <header>
        <router-link v-bind:to="'/'">
            <navigation-arrow></navigation-arrow>
        </router-link>
        <div class="container sng-header-container">
            <header-title v-bind:singleQuestionHeader="classBind">
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
        data() {
            return {
                classBind: true
            }
        },
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

<style>
</style>