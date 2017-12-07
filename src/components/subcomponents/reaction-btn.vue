<template>
    <div class="btn-container">
        <div class="respond-btn">
            {{ btnDescription(commentsLength) }}
        </div>
    </div>
</template>

<script>
    
     export default {
         props: {
              commentsLength: {
                    type: Number,
                    required: true
              }
         },
         methods: {
              btnDescription: function(comLength) {
               if(comLength > 0) {
                   return "CONTINUE discussion";
               } if(comLength == 0) {
                   return "COMMENT";
               } else {
                   return "GIVE new answer";
               }     
            }
         }
     }

</script>

<style lang="scss">
    
/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
/*@import "../../../scss/fonts.scss";
@import "../../../scss/mixins.scss";*/
    
.btn-container {
    position: absolute;
    bottom: -16px;
    width: 100%;
}


.respond-btn {
    margin: 0 auto;
    border: 2px solid $color-grey-white;
    font-weight: bold;
    padding: 7px 0;
    text-align: center;
    width: 186px;
    background-color: #fff;
    color: $color-almost-black;
    &:hover {
        @include btnHoverEffect;
    }
}
</style>