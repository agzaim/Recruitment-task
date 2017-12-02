<template>
    <div class="answer-box">
        <p>
            <user-name v-bind:input="input"></user-name>
            COMMENTED IT
            <span class="middle-dot">
                &middot;
            </span>
            <span class="answer-time">
                {{ input.when }}
            </span>
        </p>
        <div class="longer-text">
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

<style>

</style>