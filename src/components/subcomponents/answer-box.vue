<template>
    <div class="answer-box">
        <p>
            <user-name v-bind:name="activity.author"></user-name>
<!--
            <span class="user-name" v-on:click="modalTrigger(answer.authorID)">
                {{ activity.author }}
            </span>
-->
            COMMENTED IT
            <span class="middle-dot">
                &middot;
            </span>
            <span class="answer-time">
                {{ activity.when }}
            </span>
        </p>
        <div class="longer-text">
            {{ activity.content }}
        </div>
    </div>
</template>

<script>
    
      import userName from "./user-name.vue";

      export default {
         props: {
              activity: {
                    type: Object,
                    required: true
              }
         },
         components: {
            "userName": userName
        }
      }
</script>

<style>

</style>