<template>
  <div>
    <header>
            <div class="left-arrow">&lt;</div>
            <div class="container sng-header-container">
                <div class="single-title-box">
                    <h3>QUESTION</h3> 
                    <div class="plus-mark">+</div>
                </div>
                <p class="discussion-timer">
                    Last time discussed
                    <span> 
                        {{ question.lastTimeDiscussed.number }}
                    </span>
                    {{ question.lastTimeDiscussed.description }}

                </p>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
    </header>
    <div class="page-container">
            <div class="container">
                <div class="question-box single-question-box">
                    <div class="unfollow-btn" v-on:click="followToggler">
                        {{ unfollow }}
                    </div>
                    <div class="question-box-header">
                        <img class="user-photo" alt="" v-bind:src="question.authorPhoto">
                        <p>
                            <span class="user-name"> 
                                {{ question.author }}
                            </span>
                            IS ASKING:
                        </p>
                        <h4>
                            {{ question.question }}
                        </h4>
                    </div>
                    <div class="question-background">
                        <div class="blue-block"></div>
                        <div class="longer-text">
                            {{ question.content }}
                        </div>
                        <div class="votes-box">
                            <p>
                                <span>{{ votesCounter(question.votes) }}</span>
                                {{ votesDescription(question.votes) }}
                            </p>
                            <div class="voting-arrows-container">
                                <div class="voting-arrow arrow-up" v-on:click="question.votes++"></div>
                                <div class="voting-arrow arrow-down" v-on:click="question.votes--"></div>
                            </div>
                        </div>
                        <div class="btn-container">
                            <div class="respond-btn">
                                GIVE new answer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="answer-introduction">
                <span>{{ question.answeres.length }}</span>
                {{ activitiesQuantity(question.answeres.length, peer) }} 
                already answered 
                <span class="question-author">{{ question.author }}</span>
            </p>
            <div class=" container answer-section" v-for="answer in question.answeres">
                <div class="answer-container">
                    <div class="answer-photo-box">
                        <img class="user-photo" alt="" v-bind:src="answer.authorPhoto">
                    </div>
                    <div class="answer-box">
                        <p>
                            <span class="user-name">
                                {{ answer.author }}
                            </span>
                            COMMENTED IT
                            <span class="middle-dot">
                                &middot;
                            </span>
                            <span class="answer-time">
                                {{ answer.when }}
                            </span>
                        </p>
                        <div class="longer-text">
                            {{ answer.answer }}
                        </div>
                    </div>
                    <div class="votes-box">
                        <p>
                            <span>{{ votesCounter(answer.votes) }}</span>
                             {{ votesDescription(answer.votes) }}
                        </p>
                        <div class="voting-arrows-container">
                            <div class="voting-arrow arrow-up" v-on:click="answer.votes++"></div>
                            <div class="voting-arrow arrow-down" v-on:click="answer.votes--"></div>
                        </div>
                    </div>
                </div>
                <div class="answer-container comment-container" v-for="comment in answer.comments">
                    <div class="empty-box"></div>
                    <div class="answer-photo-box">
                        <img class="user-photo" alt="" v-bind:src="comment.authorPhoto">
                    </div>
                    <div class="answer-box">
                        <p>
                            <span class="user-name">
                                {{ comment.author }}
                            </span>
                            COMMENTED IT
                            <span class="middle-dot">
                                &middot;
                            </span>
                            <span class="answer-time">
                                {{ comment.when }}
                            </span>
                        </p>
                        <div class="longer-text">
                            {{ comment.comment }}
                        </div>
                    </div>
                    <div class="votes-box">
                        <p>
                            <span>
                                {{ votesCounter(comment.votes) }}
                            </span>
                            {{ votesDescription(comment.votes) }}
                        </p>
                        <div class="voting-arrows-container">
                            <div class="voting-arrow arrow-up" v-on:click="comment.votes++"></div>
                            <div class="voting-arrow arrow-down" v-on:click="comment.votes--"></div>
                        </div>
                    </div>
                </div>
                <div class="btn-container">
                    <div class="respond-btn">
                        {{ btnDescription(answer.comments) }}
                    </div>
                </div>
            </div>         
    </div>
  </div>
</template>

<script>
export default {
     props: {
        questions: {
                type: Array,
                required: true
        }
    },
    data () {
        return {
            id: this.$route.params.id,
            peer: "peer",
            unfollow: "unfollow"
        }
    },
//    created() {
//            this.question = this.questions.filter((quest) => {
//                return quest.idQ == this.id;
//            })[0];
//        
//    },
    methods: {
        // I couldn't figure out how to hide "COMMENT button" when the answer has comments using olny CSS magic, so I created following funcion. After all it's much better - works also to comment boxes :)
        btnDescription: function(commentsList) {
           if(commentsList.length > 0) {
               return "CONTINUE discussion";
           } else {
               return "COMMENT";
           }        
        },
        // I assumed that word "discussion" occuring in every question regardless of what is idicated by the number (on the sent view) was just a little bug :)
        activitiesQuantity: function(quantity, description) {
            if (quantity == 1) {
                return description;
            } else {
                return description + "s";
            }
        },
        followToggler: function() {
            if (this.unfollow == "unfollow") {
                this.unfollow = "follow";
            } else {
                this.unfollow = "unfollow";
            }
        },
        votesCounter: function(votes) {
            return Math.abs(votes);
        },
        votesDescription: function(votes) {
            if (votes >= 0) {
                return "upvotes";
            } else {
                return "downvotes";
            }
        }
    },
    computed: {
        question: function() {
            return this.questions.filter((quest) => {
                return quest.idQ == this.id;
            })[0];
        }
    }
}

</script>

<style>
</style>
