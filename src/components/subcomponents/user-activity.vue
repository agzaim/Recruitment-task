<template>
    <div class="question-box-element">
<!--                            <img class="user-photo" alt="" v-bind:src="activity.authorPhoto" v-on:click="modalTrigger(activity.authorID)">-->
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
<style>
    
</style>