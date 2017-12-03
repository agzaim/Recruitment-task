<template>
  <transition name="modal">
    <div class="modal-background"  
         v-on:click.self="close">
        <div class="modal">
            <div class="close-mark" v-on:click="close">
                &times;
            </div>
            <div class="clearfix"></div>
            <div class="modal-container">
                <div class="modal-header">
                    <img class="user-profile-photo" 
                         alt="" 
                         v-bind:src="user.authorPhoto">
                    <div class="user-profile-name">
                            {{ user.author }}
                    </div>
                    <div class="user-data-box">
                        <user-data v-bind:dataValue="user.membershipPeriod">
                            MEMBER FOR 
                        </user-data>
                        <user-data v-bind:dataValue="user.lastVisit">
                            LAST SEEN 
                        </user-data>
                        <user-data v-bind:activityLevel="user.activityLevel">
                            ACTIVITY LEVEL 
                        </user-data>
                    </div>
                </div>  
                <div class="modal-navigation-container">
                        <!--<div class="modal-arrow arr-left" v-on:click="modalTrigger(user.userID - 1)" v-bind:class="{activeArrow: (user.userID - 1) >= 1}">
                            &lt;
                        </div>
                        <h2>How it all started</h2>
                        <div class="modal-arrow arr-right" v-on:click="modalTrigger(user.userID + 1)" v-bind:class="{activeArrow: user.userID + 1 <= this.users.length }">
                            &gt;
                        </div>-->
                </div>
                <modal-subtitle v-bind:membershipPeriod="user.membershipPeriod">
                    That's where we have been these 
                </modal-subtitle>
                   
                <div class="statistics-squares-container">
                    <stat-square v-bind:quantity="user.peersNumber"
                                 v-bind:description="peer">
                    </stat-square>
                    <stat-square v-bind:quantity="user.discussionNumber"
                                 v-bind:description="discussion">
                    </stat-square>
                    <stat-square v-bind:quantity="user.findingsNumber"
                                 v-bind:description="finding">
                    </stat-square>
                    <stat-square v-bind:quantity="user.questionNumber"
                                 v-bind:description="question">
                    </stat-square>
                    
                </div>
                
                <modal-subtitle>
                    Who joined the platform that same period
                </modal-subtitle>
                
                <div class="modal-user-container">
                    <modal-user-box v-for="peer in user.otherPeers" 
                                    v-bind:key="peer.authorID" 
                                    v-bind:peer="peer">
                    </modal-user-box>                     
                </div>
                
                <modal-subtitle>
                        The hottest discussion these days
                </modal-subtitle>
            </div>
            <div class="modal-footer">
                <user-photo v-bind:input="users[2]"></user-photo>
                <p class="modal-subtitle footer-subtitle">
                    <user-name v-bind:input="users[2]"></user-name> 
                    found the guardian article
                </p>
                <h4>Vegan diet to stop diabetes progress</h4>
                <div class="footer-statistics-container">
                        <div class="dupa">
                            <activities-summary 
                            v-bind:quantity="quantity"
                            v-bind:description="peer"
                        ></activities-summary>
                        </div>
<!--
                        <div class="footer-statistics-box">
                            <span>6</span> peers involved
                        </div>
-->
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
  </transition>
</template>

<script>
    
    import methodMixins from "../mixins/methodMixins";
    import userData from "./subcomponents/user-data.vue";
    import modalSubtitle from "./subcomponents/modal-subtitle.vue";
    import statSquare from "./subcomponents/stat-square.vue";
    import modalUserBox from "./subcomponents/modal-user-box.vue";
    import userPhoto from "./subcomponents/user-photo.vue";
    import userName from "./subcomponents/user-name.vue";
    import activitiesSummary from "./subcomponents/activities-summary.vue";


    export default {
        data () {
            return {
//                users: usersData.users,
                discussion: "discussion",
                peer: "peer",
                finding: "finding",
                question: "question",
                quantity: 7
//                showModal: false
            }
        },
        
        methods: {
            close() {
                return this.$store.commit("closingModal");
            }
        },

//        props: {
//            authorID: {
//                type: Number,
//                required: true
//            }
//        },

        computed: {
            user() {
                return this.$store.state.chosenUser;
            },
            users() {
                return this.$store.state.users;
            }
//            user: function() {
//                return this.users.filter((user) => {
//                    return user.userID == this.authorID;
//                })[0];
//            }
        },  
        
        components: {
            "userData": userData,
            "modalSubtitle": modalSubtitle,
            "statSquare": statSquare,
            "modalUserBox": modalUserBox,
            "userPhoto": userPhoto,
            "userName": userName,
            "activitiesSummary": activitiesSummary
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
    .dupa {
        display: inline-block;
    }
</style>
