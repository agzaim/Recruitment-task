<template>
    <div class="votes-box">
        <p>
            <span>
                {{ votes | votesCounter }}
            </span>           
            {{ votesDescription(votes) }}
        </p>
        <div class="voting-arrows-container">
            <div class="voting-arrow arrow-up" 
                 v-on:click.once="votes++">
            </div>
            <div class="voting-arrow arrow-down" 
                 v-on:click.once="votes--">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            votes: {
                type: Number,
                required: true
            }
        },
        filters: {
            votesCounter: function(votes) {
                return Math.abs(votes);
            }
        },
        methods: {
            votesDescription: function(votes) {
                if (votes >= 0) {
                    return "upvotes";
                } else {
                    return "downvotes";
                }
            }
        }
    }
    
</script>

<style>

</style>