<template>
    <div class="single-question-box">
            <unfollow-btn></unfollow-btn>
            <question-header v-bind:question="question"
                             class="single-question-box-header">
            </question-header>
            <div class="question-background">
                    <div class="blue-block"></div>
                    <div class="longer-text">
                        {{ question.content }}
                    </div>
                    <votes-box v-bind:votes="question.votes"></votes-box>
                    <reaction-btn v-bind:commentsLength="btnValue">
                    </reaction-btn>
            </div>
    </div>
</template>


<script>
    
    import questionHeader from "./subcomponents/question-header.vue";
    import unfollowBtn from "./subcomponents/unfollow-btn.vue";
    import votesBox from "./subcomponents/votes-box.vue";
    import reactionBtn from "./subcomponents/reaction-btn.vue";
    
    
    export default {
        data() {
            return {
                btnValue: -1
            }
        },
        
        computed: {
            question() {
                return this.$store.state.chosenQuestion;
            }
        },
        
        components: {
            "questionHeader": questionHeader,
            "unfollowBtn": unfollowBtn,
            "votesBox": votesBox,
            "reactionBtn": reactionBtn
        }
    }
</script>


<style lang="scss">
        
@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.single-question-box {
    position: relative;
    margin-bottom: 55px;
    border-bottom: $border-style;
}
    
.question-background {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    @include mobiles {
        display: block;
    }
}
    
.blue-block {
    width: 11%;
    background-color: $color-blue-light;
    @include mobiles {
        display: none;
    }
}


.longer-text {
    padding: 24px 0px 37px 22px;
    width: 66%;
    font-size: 13px;
    line-height: 18px;
    font-weight: 800;
    color: $color-grey-blue-lighter;
    @include mobiles {
        width: 100%;
        padding: 10px;
        font-size: 14px;
    }
}
    
</style>