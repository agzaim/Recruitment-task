<template>
    <span class="user-name" 
          v-on:click="modalTrigger(input.authorID)"> 
        {{ input.author }}
    </span>
</template>

<script>

    export default {
         props: {
            input: {
                type: Object,
                required: true
            }
         },
        
         methods: {
             modalTrigger(autID) {
                this.$store.commit("modalTrigger", autID);
             }
         }
    }
</script>

<style lang="scss">
   
/*@import "../../assets/styles/scss/fonts.scss";  */
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";

.user-name {
    font-size: 16px;
    text-align: center;
    color: $color-blue-dark;
    font-family: $sans-serif-medium-font;
    @include hoverEffect;
}
    
    
.answer-user-name {
    padding-right: 6px;
}

    
.footer-user-name {
    padding-right: 6px;
    text-transform: none;
    font-weight: 100;
}
   
    
.question-box-header-name {
    padding-right: 6px;         
}
</style>