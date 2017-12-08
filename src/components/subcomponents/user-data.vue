<template>
        <div class="user-data">
            <slot></slot>
            
            <span v-if="!activityLevel" 
                  class="data-value">
                {{ dataValue }}
            </span>
            
            <div class="ribbon-container" v-else>
                <img class="ribbon"
                     src="../../../items/fullRibbon.png" 
                     v-for="item in activityLevel">
                <img class="ribbon"
                     src="../../../items/emptyRibbon.png" 
                     v-for="item in (3 - activityLevel)">
            </div>
        </div>
</template>

<script>

    export default {
        props: {
            dataValue: {
                type: String
            },
            activityLevel: {
                type: Number
            }         
        }
    }
    
</script>

<style lang="scss">
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
.user-data {
    font-size: 13px;
    color: $color-grey-blue;
    font-family: $sans-serif-medium-font;
    text-align: center;
    font-family: lunchtype24expanded_medium, sans-serif;
    &:last-child {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        @include mobiles {
            display: block;
        }
    }
}
  
    
.data-value {
    color: $color-almost-black;
    @include mobiles {
        display: block;
        margin-bottom: 15px;
    } 
}
   
    
.ribbon-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-left: 4px;
    width: 63px;
    @include mobiles {
        margin: 0 auto;
        padding-top: 3px;
    }
}


.ribbon {
    height: 22px;
    width: 16px;
}
</style>