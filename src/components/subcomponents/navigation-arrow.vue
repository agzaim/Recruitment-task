<template>
    <div class="left-arrow">&lt;</div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
  
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
    
.left-arrow {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 4%;
    color: $color-grey-light;
    border: 1px solid $color-grey-light;
    text-align: center;
    font-size: 36px;
    line-height: 40px;
    font-family: Courier, sans-serif;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        background-color: $color-grey-light;
        color: #fff;
    }
    @include mediaHeader {
        position: static;
        display: inline-block;
        vertical-align: top;      
    }
    @include mobiles {
        height: 28px;
        width: 28px;
        font-size: 25px;
        line-height: 28px;
        margin-top: 4px;
    }
}
    
</style>