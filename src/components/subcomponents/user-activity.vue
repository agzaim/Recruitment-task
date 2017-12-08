<template>
    <div class="question-box-element">
        <user-photo v-bind:input="activity"></user-photo>
        <div class="user-activity-desription">
            {{ activity.type }}
            <div class="question-box-element-dot"></div>
        </div>
    </div>     
</template>

<script>
    import userPhoto from "./user-photo.vue";

    export default {
         props: {
            activity: {
                type: Object,
                required: true
            }
        },
        components: {
            "userPhoto": userPhoto
        }
    }
</script>

<style lang="scss">
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";  

.question-box-element {
    background-color: $color-grey-white;
    padding-top: 25px;
    margin-top: 30px;
    margin-right: 13px;
    width: 15%;
    position: relative;
    &:first-child {
        margin-top: 0;
        background-color: $color-blue-light;
        padding-top: 108px;
    }
    &:nth-child(2) {
        background-color: #fff;
    }
    &:last-child {
        margin-right: 0;
        .user-activity-desription {
            border-top: 1px solid #000;
        }
        .question-box-element-dot {
            background-color: #000;
        }
    }
    @include smallTablets {
        margin-right: 20px;
        width: 20%;
        &:nth-last-child(2) {
            display: none;
        }
        &:nth-last-child(3) {
            display: none;
        }
        &:nth-child(2) {
            display: block;
        }
    }
     @include mobiles {
        margin-right: 10px;
        width: 36%;
         margin-top: 0;
        &:nth-last-child(4) {
            display: none;
        }
        &:first-child {
            display: none;
        }
        &:nth-child(2) {
            display: block;
            background-color: $color-grey-white;
        }
    }
}
    
    
.user-activity-desription {
    border-top: 1px solid $color-grey-light;
    font-size: 12px;
    text-align: center;
    margin: 60px 8px 0 8px;
    padding: 6px;
    font-family: $main-sans-serif-font;
    color: $color-grey-blue;
    text-transform: uppercase;
}


.question-box-element-dot {
    background-color: $color-grey-light;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    position: absolute;
    left: 45%;
    bottom: -5px;
}

</style>