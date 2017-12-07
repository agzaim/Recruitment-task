<template>
    
    <a class="sorting-choice" 
        v-on:click="sortQuestions(choice)" 
        v-bind:class="{active: activeBtn}">
            <slot></slot>
    </a> 
             
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

<style lang="scss">
    
/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
/*    
@import "../../../scss/fonts.scss";
@import "../../../scss/mixins.scss";
@import "../../../scss/variables.scss";*/
    

.sorting-choice {
    font-family: "lunchtype22regular", sans-serif;
    margin-left: 7px;
    color: $color-blue-dark;
    font-weight: bold;
    &:first-child {
        margin-right: 7px;
    }
    @include hoverEffect;
}


.active {
    color: $color-grey-light;
    text-decoration: underline;
    &:hover {
        opacity: 1;
        cursor: auto;
    }
}
    
</style>
