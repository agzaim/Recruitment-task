<template>
    <div class="unfollow-btn" 
         v-on:click="followToggler">
            {{ unfollowBtn }} 
    </div>
</template>

<script>
    
    export default {
        data() {
            return {
                unfollowBtn: "unfollow"
            }
        },
        methods: {
             followToggler: function() {
                if (this.unfollowBtn == "unfollow") {
                    this.unfollowBtn = "follow";
                } else {
                    this.unfollowBtn = "unfollow";
                }
            }
        }
    }

</script>

<style lang="scss">
    
/*@import "../../assets/styles/scss/fonts.scss";*/
@import "../../assets/styles/scss/mixins.scss";

.unfollow-btn {   
    position: absolute;
    padding-top: 35px;
    right: 70px;
    font-weight: bold;
    color: $color-blue-dark;
    @include hoverEffect;
    @include tabletsOnly {
        right: 40px;
    }
    @include mobiles {
        bottom: 39px;
        left: 15px;
    }
}
</style>