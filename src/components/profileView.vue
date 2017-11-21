<template>
  <transition name="modal">
    <div class="modal-background"  v-on:click.self="$emit('close')">
        <div class="modal">
                <div class="close-mark" v-on:click="$emit('close')">
                    &times;
                </div>
                <div class="clearfix"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        
                        <img class="user-profile-photo" alt="" v-bind:src="user.userPhoto">
                        <div class="user-profile-name">
                            {{ user.userName }}
                        </div>
                        <div class="user-data-box">
                            <div class="user-data">
                                MEMBER FOR 
                                <span>
                                    {{ user.membershipPeriod }}
                                </span>
                            </div>
                            <div class="user-data">
                                LAST SEEN 
                                <span>
                                    {{ user.lastVisit }}
                                </span>
                            </div>
                            <div class="user-data">
                                ACTIVITY LEVEL 
                                <div class="ribbon-container">
                                    <img class="ribbon" src="../../items/fullRibbon.png" v-for="item in user.activityLevel">
                                    <img class="ribbon" src="../../items/emptyRibbon.png" v-for="item in (3 - user.activityLevel)">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-navigation-container">
                        <div class="modal-arrow arr-left" v-on:click="modalTrigger(user.userID - 1)" v-bind:class="{activeArrow: (user.userID - 1) >= 1}">
                            &lt;
                        </div>
                        <h2>How it all started</h2>
                        <div class="modal-arrow arr-right" v-on:click="modalTrigger(user.userID + 1)" v-bind:class="{activeArrow: user.userID + 1 <= this.users.length }">
                            &gt;
                        </div>
                    </div>
                    <p>
                        That's where we have been these 
                        <span>
                            {{ user.membershipPeriod }}
                        </span> ago
                    </p>
                    <div class="statistics-squares-container">
                        <div class="statistics-square">
                            <div class="statistics-square-content">
                                <span>
                                    {{ user.peersNumber }}
                                </span>
                                {{ activitiesQuantity(user.peersNumber, peer) }} 
                            </div>
                        </div>
                        <div class="statistics-square">
                            <div class="statistics-square-content">
                                <span>
                                    {{ user.discussionNumber }}
                                </span>
                                {{ activitiesQuantity(user.discussionNumber, discussion) }} 
                            </div>
                        </div>
                        <div class="statistics-square">
                            <div class="statistics-square-content">
                                <span>
                                    {{ user.findingsNumber }}
                                </span>
                                {{ activitiesQuantity(user.findingsNumber, finding) }} 
                            </div>
                        </div>
                        <div class="statistics-square">
                            <div class="statistics-square-content">
                                <span>
                                    {{ user.questionNumber }}
                                </span>
                                {{ activitiesQuantity(user.questionNumber, question) }} 
                            </div>
                        </div>
                    </div>
                    <p>
                        Who joined the platform that same period
                    </p>
                    <div class="modal-user-container">
                        <div class="modal-user-box" v-for="peer in user.otherPeers">
                            <div class="user-photo-frame">
                                <img class="user-photo" alt="" v-bind:src="peer.userPhoto" v-on:click="modalTrigger(peer.userID)">
                            </div>
                            <div class="user-name" v-on:click="modalTrigger(peer.userID)">
                                {{ peer.userName }}
                            </div>
                        </div>                       
                    </div>
                    <p>
                        The hottest discussion these days
                    </p>
                </div>
                <div class="modal-footer">
                    <img class="user-photo" alt="" src="../../users_photos/user3.png" v-on:click="modalTrigger(3)">
                    <p>
                        <span class="user-name" v-on:click="modalTrigger(3)">
                            Joseph
                        </span> 
                        found the guardian article
                    </p>
                    <h4>Vegan diet to stop diabetes progress</h4>
                    <div class="footer-statistics-container">
                        <div class="footer-statistics-box">
                            <span>6</span> peers involved
                        </div>
                        <div class="footer-statistics-box">
                            <span>3</span> related discussions
                        </div>
                        <div class="footer-statistics-box">
                            <span>3</span> conversations
                        </div>
                        <div class="footer-statistics-box">
                            <span>19</span> upvotes
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <profileView v-if="showModal" v-on:close="showModal = false" v-bind:authorID="authorID"></profileView>
       </transition>
</template>

<script>
    
    import usersData from "../data/users.json";
    import methodMixins from "../mixins/methodMixins";


    export default {
        data () {
            return {
                users: usersData.users,
                discussion: "discussion",
                peer: "peer",
                finding: "finding",
                question: "question",
                showModal: false
            }
        },

        props: {
            authorID: {
                type: Number,
                required: true
            }
        },

        computed: {
            user: function() {
                return this.users.filter((user) => {
                    return user.userID == this.authorID;
                })[0];
            }
        },     
            
        
        //following 2 functions hiding and showing the main page scroll when modal is visible
        created() {
            window.document.body.classList.add("hideScroll");
        },
        
        beforeDestroy() {
            window.document.body.classList.remove("hideScroll");
        },
        
        mixins: [methodMixins]
    }

</script>

<style>
</style>
