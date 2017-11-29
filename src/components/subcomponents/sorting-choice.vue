<template>
    
<!--            <a class="sorting-choice" v-on:click="sortByDate" v-bind:class="{active: activeDateBtn}">-->
            <a class="sorting-choice" 
               v-on:click="sortQuestions(choice)" 
               v-bind:class="{active: activeBtn}">
                <slot></slot>
            </a> 
             
<!--            <a class="sorting-choice" v-on:click="sortByVotes" v-bind:class="{active: activeVoteBtn}">-->
            
</template>

<script>
export default {
    props: {
        choice: {
            type: String
        },
        activeBtn: {
            type: Boolean
        }
    },
    methods: {
        sortQuestions(sortChoice) {
             this.$store.commit("sortingQuestions", sortChoice);
        }
    }
}
</script>
<style>
    
</style>
