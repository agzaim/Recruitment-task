<template>
    <div class="btn-container">
        <div class="respond-btn">
            {{ btnDescription(commentsLength) }}
        </div>
    </div>
</template>

<script>
    
     export default {
         props: {
              commentsLength: {
                    type: Number,
                    required: true
              }
         },
         methods: {
              btnDescription: function(comLength) {
               if(comLength > 0) {
                   return "CONTINUE discussion";
               } if(comLength == 0) {
                   return "COMMENT";
               } else {
                   return "GIVE new answer";
               }     
            }
         }
     }

</script>

<style>

</style>