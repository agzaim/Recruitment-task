<template>
    <div class="question-box-header">
        <user-photo v-bind:input="question"
                    class="question-box-header-photo">
        </user-photo>
        <div class="question-box-header-content">
            <p class="question-box-header-element">
                <user-name v-bind:input="question"
                           class="question-box-header-name">
                </user-name>
                IS ASKING:
            </p>
            <router-link v-bind:to="'/question/' + question.questionID" >
                         
<!--                         v-on:click.native="choosingQuestion(question.questionID)">-->
                <h4 class="question-text">
                    {{ question.question }}
                </h4>
            </router-link>
        </div>
    </div>
</template>

<script>
    import userPhoto from "./user-photo.vue";
    import userName from "./user-name.vue";

    export default {
         props: {
            question: {
                type: Object,
                required: true
            }
        },
        components: {
            "userPhoto": userPhoto,
            "userName": userName
        },
        methods: {
            choosingQuestion(qID) {
                 this.$store.commit("choosingQuestion", qID);
            }
        }
    }
</script>

<style lang="scss">
    
/*@import "../../../scss/fonts.scss";
@import "../../../scss/mixins.scss";
@import "../../../scss/variables.scss";*/
    
    
/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
.question-box-header {
    padding: 20px;
    padding-bottom: 24px;
    width: 76%;
    background-color: $color-blue-light;
     @include smallTablets {
         width: 100%;
    }
}
    

.question-box-header-content {
    display: inline-block;
    a, a:visited {
        text-decoration: none;
        color: $color-blue-dark;
    }
}

    
.question-box-header-element {
    color: $color-grey-blue;
    font-size: 11px;
}
    
    
.question-text {
    font-family: $main-serif-font;
    font-weight: 800;
    color: $color-blue-dark; 
    letter-spacing: 1px;
    @include hoverEffect;
    font-size: 19px;
    margin-top: 2px;
}
    
    
.single-question-box-header {
    width: 100%;
    @include mobiles {
        box-shadow: 0 8px 7px -7px $color-grey-light inset;
    }
    @include mobiles {
        padding: 0;
    }
    .question-box-header-element {
        padding-left: 95px;
        @include mobiles {
            padding: 35px 0 26px 85px;
        }
    }
    .question-text {
        padding-left: 95px;
        &:hover {
            cursor: auto;
            opacity: 1;
        }
        @include mobiles {
            padding: 10px;
            padding-left: 20px;
            border-top: 1px solid white;
        }
    }
    .user-photo {
        position: absolute;
        left: 2%;
        top: 20px;
    }
}
</style>