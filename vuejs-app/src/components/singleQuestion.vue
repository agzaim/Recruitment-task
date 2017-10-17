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
                        {{ question.lastTimeDiscussed.number}}
                    </span>
                    {{ question.lastTimeDiscussed.description}}

                </p>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
    </header>
    <div class="page-container">
            <div class="container">
                <div class="question-box single-question-box">
                    <div class="unfollow-btn">
                        unfollow
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
                                <span>{{ question.votes }}</span>
                                upvotes
                            </p>
                            <div class="voting-arrows-container">
                                <div class="voting-arrow arrow-up"></div>
                                <div class="voting-arrow arrow-down"></div>
                            </div>
                        </div>
                        <div class="respond-btn">
                            GIVE new answer
                        </div>
                    </div>
                </div>
            </div>
            <p class="answer-introduction">
                <span>XX</span>
                peers already answered 
                <span class="question-author">{{ question.author }}</span>
            </p>
            <div class="answer-section" v-for="answer in question.answeres">
                <div class="container answer-container">
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
                            <span>{{ answer.votes }}</span>
                            upvotes
                        </p>
                        <div class="voting-arrows-container">
                            <div class="voting-arrow arrow-up"></div>
                            <div class="voting-arrow arrow-down"></div>
                        </div>
                    </div>
                    <div class="respond-btn">
                        COMMENT
                    </div>
                </div>
                <div class="container answer-container comment-container" v-for="comment in answer.comments">
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
                                {{ comment.votes }}
                            </span>
                            upvotes
                        </p>
                        <div class="voting-arrows-container">
                            <div class="voting-arrow arrow-up"></div>
                            <div class="voting-arrow arrow-down"></div>
                        </div>
                    </div>
                    <div class="respond-btn">
                        CONTINUE discussion
                    </div>
                </div>
            </div>
<!--
           
            <div class="container answer-container">
                <div class="answer-photo-box">
                    <img class="user-photo" alt="" >
                </div>
                <div class="answer-box">
                    <p>
                        <span class="user-name">
                            Joseph's
                        </span>
                        COMMENTED IT
                        <span class="middle-dot">
                            &middot;
                        </span>
                        <span class="answer-time">
                            two days
                        </span>
                    </p>
                    <div class="longer-text">
                        Number or tingling in your feet should be reported to your doctor at your regular visits. 
                    </div>
                </div>
                <div class="votes-box">
                    <p>
                        <span>3</span>
                        upvotes
                    </p>
                    <div class="voting-arrows-container">
                        <div class="voting-arrow arrow-up"></div>
                        <div class="voting-arrow arrow-down"></div>
                    </div>
                </div>
                <div class="respond-btn">
                    COMMENT
                </div>
            </div>
-->
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
            id: this.$route.params.id
//            question: {}
        }
    },
//    created() {
//            this.question = this.questions.filter((quest) => {
//                return quest.idQ == this.id;
//            })[0];
//        
//    },
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
