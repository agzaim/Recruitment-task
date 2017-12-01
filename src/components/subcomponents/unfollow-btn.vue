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

<style>

</style>