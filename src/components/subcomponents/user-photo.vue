<template>
    <img class="user-photo" 
         alt="" 
         v-bind:src="input.authorPhoto"
         v-on:click="modalTrigger(input.authorID)">
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

/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
    /*
@import "../../../scss/fonts.scss";
@import "../../../scss/mixins.scss";*/

.user-photo {
    height: 53px;
    width: 53px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    @include hoverEffect;
}
    
    
.footer-user-photo {
    position: absolute;
    left: 47%;
    top: -26px;
}
    
    
.question-box-header-photo {
    display: inline-block;
    margin-right: 35px;
    margin-left: 5px;
    vertical-align: top;
    @include mobiles {
        margin-right: 10px;
    }
}
    
</style>