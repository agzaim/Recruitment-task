<template>
<!--    <div v-bind:class="{'header-title-box': mainHeader, 'single-title-box': singleQuestionHeader}">-->
    <div>
        <h3 class="header-title">QUESTIONS</h3> 
        <div class="plus-mark">+</div>
    </div>
</template>

<script>
export default {
    /*props: {
        mainHeader: {
            type: Boolean
        },
        singleQuestionHeader: {
            type: Boolean
        }
    }*/
}
</script>

<style lang="scss">

/*@import "../../../scss/fonts.scss";
@import "../../../scss/mixins.scss";
@import "../../../scss/variables.scss";*/
 
    
/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
.header-title-box {
    display: inline-block;
    width: 48%;
    @include mediaHeader {
        padding-left: 20px; 
        @include mobiles {
            width: 100%; 
        }
    }
}
 
    
.single-title-box {
    display: inline-block;
    width: 50%;
    @include mobiles {
        width: 100%; 
    }
    .plus-mark {
        margin-left: 38px;
        @include mobiles {
            float: right;
            margin-top: 6px;
        }
    }
}
   
    
.header-title {
    display: inline-block;
    font-size: 29px;
    font-family: $main-sans-serif-font;
}   
    
    
.plus-mark {
    display: inline-block;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: #0266b3;
    color: #fff;
    font-size: 26px;
    text-align: center;
    line-height: 27px;
    font-family: "Palatino", serif;
    margin-left: 28px;
    font-weight: 100;
}
</style>