<template>
    <div class="modal-arrow" 
         v-on:click="modalTrigger(user.authorID + direction)" 
         v-bind:class="{activeArrow: activeArr(direction)}">

        <slot></slot>
    </div>
</template>

<script>

    export default {
        props: {
            direction: {
                type: Number,
                required: true
            }
        },
        
        computed: {
            user() {
                return this.$store.state.chosenUser;
            },
            users() {
                return this.$store.state.users;
            }
        },
        
        methods: {
            modalTrigger(autID) {
                this.$store.commit("modalTrigger", autID);
            },
            
            activeArr(dir) {
                if (dir === 1) {
                    return (this.user.authorID + dir) <= this.users.length;
                } else {
                    return (this.user.authorID + dir) >= 1;
                }
            }
        } 
    }
</script>

<style lang="scss">

@import "../../assets/styles/scss/mixins.scss";
@import "../../assets/styles/scss/variables.scss";
    
    
.modal-arrow {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-family: "Courier", serif;
    color: #fff;
    font-size: 27px;
    line-height: 30px;
    background-color: $color-grey-light;
}


.arr-left {
    padding-left: 5px;
}


.arr-right {
    padding-left: 8px;
}
    
    
.activeArrow {
    background-color: $color-blue-dark;
    @include hoverEffect;
}
    
    
</style>