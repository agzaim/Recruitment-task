<template>
    <div class="container answer-section">
            <div class="answer-container">
                <div class="answer-photo-box">
                    <user-photo v-bind:input="answer"></user-photo>
                </div>
                <answer-box v-bind:input="answer"></answer-box>
                <votes-box v-bind:votes="answer.votes" class="answer-votes-box"></votes-box>
            </div>
            <div class="answer-container comment-container" 
                 v-for="comment in answer.comments">
                <div class="empty-box"></div>
                <div class="answer-photo-box">
                    <user-photo v-bind:input="comment"></user-photo>
                </div>
                <answer-box v-bind:input="comment"
                            class="comment-answer-box">
                </answer-box>
                <votes-box v-bind:votes="comment.votes"
                           class="answer-votes-box">
                </votes-box>
            </div>
            <reaction-btn v-bind:commentsLength="answer.comments.length">
            </reaction-btn>
    </div> 
</template>

<script>
    
    import userPhoto from "./subcomponents/user-photo.vue";
    import votesBox from "./subcomponents/votes-box.vue";
    import answerBox from "./subcomponents/answer-box.vue";
    import reactionBtn from "./subcomponents/reaction-btn.vue";


    export default {
         props: {
            answer: {
                    type: Object,
                    required: true
            }
        },
        components: {
            "userPhoto": userPhoto,
            "votesBox": votesBox,
            "answerBox": answerBox,
            "reactionBtn": reactionBtn
        }
    }

</script>

<style lang="scss">

@import "../assets/styles/scss/mixins.scss";
@import "../assets/styles/scss/variables.scss";
    
.answer-section {
    margin-top: 40px;
    position: relative;
    border: 0;
     &:last-child {
        margin-bottom: 70px;
    } 
}

.answer-container {
    -webkit-box-shadow: 9px -9px 5px -6px $color-grey-white;
    box-shadow: 9px -9px 5px -6px $color-grey-white;
    border: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    border-top: $border-style;
    @include mobiles {
        -webkit-box-shadow: 0 -9px 7px -7px $color-grey-light;
        box-shadow: 0 -9px 7px -7px $color-grey-light;
        display: block;
        border-bottom: $border-style;
    }
}
    
    
.answer-photo-box {
    width: 11%;
    padding-top: 20px;
    position: absolute;
    @include mobiles {
        padding-top: 10px;
    }
}
    
    
.empty-box {
    background-color: $color-main-background;
    width: 11%;
    border: 0;
}

    
.comment-container {
    margin-top: 0;
    -webkit-box-shadow: 9px 0 5px -6px $color-grey-white;
    box-shadow: 9px 0 5px -6px $color-grey-white;
    border-top: $border-style;
    @include mobiles {
        border-left: 8px solid $color-grey-light;
    }
    .answer-photo-box {
        left: 11%;
        @include mobiles {
            left: 1%;
        }
    }
}
    
</style>