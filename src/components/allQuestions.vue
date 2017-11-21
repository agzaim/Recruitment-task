<template>
<div>
    <header>
        <div class="left-arrow">&lt;</div>
        <div class="container">
            <div class="header-title-box">
                <h3>QUESTIONS</h3> 
                <div class="plus-mark">+</div>
            </div>
            <div class="header-view-buttons">
                <input type="radio" name="viewType" value="myShelf" checked> 
                <label>My shelf</label>
                <input type="radio" name="viewType" value="allQuestions"> 
                <label>All questions</label>
            </div>
            <p class="header-sorting-box">
                Sort by:
                <a class="sorting-choice" v-on:click="sortByDate" v-bind:class="{active: activeDateBtn}">
                    recent
                </a> 
                or 
                <a class="sorting-choice" v-on:click="sortByVotes" v-bind:class="{active: activeVoteBtn}">
                    hot
                </a>
            </p>
            <div class="clearfix"></div>
            <input class="search-input" type="search" placeholder="Search questions" v-model="search">
            <input class="search-btn" type="submit" value="SEARCH" v-on:click="searchQuestions">
            <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
    </header>
    <div class="page-container">
        <div class="container">
            <div class="question-box" v-for="question in visibleQuestions">
                <div class="question-box-header">
                    <img class="user-photo" alt="" v-bind:src="question.authorPhoto" v-on:click="modalTrigger(question.authorID)">    
                    <div class="question-box-header-content">
                        <p>
                            <span class="user-name" v-on:click="modalTrigger(question.authorID)"> 
                                {{ question.author }}
                            </span>
                            IS ASKING:
                        </p>
                        <router-link v-bind:to="'/question/' + question.questionID">
                            <h4>
                                {{ question.question }}
                            </h4>
                        </router-link>
                    </div>
                </div>
                <div class="question-box-content">
                    <div class="user-activities-container">
                        <div class="question-box-element">
                            <div class="user-activity-desription">
                                ASKED
                            </div>
                        </div>
                        <div class="question-box-element">
                            <span>
                                {{ question.moreActivities }}
                            </span>
                            <p> 
                                more <br> 
                                activities
                            </p>
                            <div class="question-box-element-dot"></div>
                        </div>
                        <div class="question-box-element" v-for="activity in question.activities">
                            <img class="user-photo" alt="" v-bind:src="activity.authorPhoto" v-on:click="modalTrigger(activity.authorID)">
                            <div class="user-activity-desription">
                                {{ activity.type }}
                                <div class="question-box-element-dot"></div>
                            </div>
                        </div>                       
                    </div>
                    <div class="question-box-summary">
                        <p>
                            <span> 
                                {{ question.relatedDiscussions }}
                            </span> 
                            related 
                            {{ activitiesQuantity(question.relatedDiscussions, discussion) }}
                        </p> 
                        <p>
                            <span>
                                {{ question.peersInvolved }}
                            </span> 
                            {{ activitiesQuantity(question.peersInvolved, peer) }} 
                            involved
                        </p> 
                        <p>
                            <span>
                                {{ question.conversations }}
                            </span> 
                            {{ activitiesQuantity(question.conversations, conversation) }} 
                        </p>
                    </div>
                </div>
            </div>
            <div class="pagination-btn-container" v-if="moreToLoad">
                    <a class="pagination-btn" v-on:click="loadingMore">
                        load more questions
                    </a>
            </div>
        </div>
    </div>

<profileView v-if="showModal" v-on:close="showModal = false" v-bind:authorID="authorID"></profileView>
    
</div>
</template>

<script>
    
    import methodMixins from "../mixins/methodMixins";

    export default {
        props: {
            questions: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                search: "",
                discussion: "discussion",
                peer: "peer",
                conversation: "conversation",
                showModal: false,
                authorID: 0,
                activeDateBtn: true,
                activeVoteBtn: false,
                visibleQuestions: this.questions,
                slicer: 3,
                moreToLoad: true
            }
        },
        methods: {
            loadingMore: function() {
                //button for more loading won't be necessary when all questions will be shown
                if(this.slicer >= this.questions.length) {
                    this.moreToLoad = false;
                }
                this.visibleQuestions = this.questions.slice(0, this.slicer);
                this.sortByDate();
                this.slicer+=3;
            },
            
            searchQuestions: function() {
                this.visibleQuestions = this.visibleQuestions.filter((quest) => {
                    return quest.question.toUpperCase().indexOf(this.search.toUpperCase()) > -1;
                });
            },
            sortByDate: function() {
                this.activeDateBtn = true;
                this.activeVoteBtn = false;
                this.visibleQuestions = this.visibleQuestions.sort((a, b) => {
                    return b.publicationDate.localeCompare(a.publicationDate); 
                });
            },
            sortByVotes: function() {
                this.activeDateBtn = false;
                this.activeVoteBtn = true;
                this.visibleQuestions = this.visibleQuestions.sort((a, b) => {
                    return b.votes - a.votes;
                });
            }
        },
        mixins: [methodMixins],

        // I assumed that the default display of the questions should be listed by "recent" as this option is active in the sent view  
        beforeMount() {
            this.loadingMore();
        }
    }

</script>

<style>
</style>
