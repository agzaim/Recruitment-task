<template>
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
</template>

<script>

</script>

<style>

</style>