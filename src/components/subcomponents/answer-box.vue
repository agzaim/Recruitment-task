<template>
    <div class="answer-box">
        <p class="answer-box-header">
            <user-name v-bind:input="input" 
                       class="answer-user-name">
            </user-name>
            COMMENTED IT
            <span class="middle-dot">
                &middot;
            </span>
            <span class="answer-time">
                {{ input.when }}
            </span>
        </p>
        <div class="longer-text answer-longer-text">
            {{ input.content }}
        </div>
    </div>
</template>

<script>
    
      import userName from "./user-name.vue";

      export default {
         props: {
              input: {
                    type: Object,
                    required: true
              }
         },
         components: {
            "userName": userName
        }
      }
</script>

<style lang="scss">
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
    
.answer-box {
    margin-left: 11%;
    padding-top: 20px;
    padding-left: 22px;
    width: 66%;
    border-left: $border-style;
    @include mobiles {
        width: 100%;
        border-left: 0;
        margin-left: 0;
         padding-left: 0;
    }
}
 
    
.comment-answer-box {
    width: 55%;
    @include mobiles {
        width: 100%;
    }
}
    
    
.answer-box-header {
    color: $color-grey-blue;
    font-size: 12px;
    padding-bottom: 15px;
        @include mobiles {
            margin-left: 13%;
            padding-top: 5px;
    }  
}
 
    
.middle-dot {
    font-weight: bold;
    padding-left: 7px;
}


.answer-time {
    @include acivitiesFontStyle;
    padding-left: 7px;
}

    
.answer-longer-text {
        padding: 0 0 37px 0;
        width: auto;
        @include mobiles {
            border-top: 2px solid $color-grey-white;
            padding: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
}
    
</style>