<template>
    <div class="votes-box">
        <p class="voting-container">
            <span>
                {{ votes | votesCounter }}
            </span>           
            {{ votesDescription(votes) }}
        </p>
        <div>
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

<style lang="scss">
    
@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    

.votes-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 20px;
    margin: 0 auto;
    @include mobiles {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        padding: 10px 15px 32px 0;
    }
}
    
.answer-votes-box {
    padding-top: 48px;
    @include mobiles {
        padding-top: 10px;
    }
}
    
    
.voting-container {
    @include acivitiesFontStyle;
    padding-top: 5px;
}


.voting-arrow {
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    margin-left: 28px;
    @include hoverEffect;
}


.arrow-up {
    border-bottom: 10px solid $color-blue-dark;
    margin-bottom: 12px;
}


.arrow-down {
    border-top: 10px solid $color-blue-dark;
}


</style>