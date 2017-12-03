<template>
    <p class="modal-subtitle">
        <slot></slot>
    
        <span v-if="membershipPeriod"> 
            {{ membershipPeriod }} ago
        </span>
        
    </p>
</template>

<script>
    export default {
        props: {
            membershipPeriod: {
                type: String
            }
        }
    }
</script>

<style>

    .modal-subtitle {
    font-size: 13px;
    font-family: lunchtype24expanded_medium, sans-serif;
    color: $color-grey-blue;
    text-transform: uppercase;
    margin: 17px 0;
    margin-top: 40px;
    text-align: center;
    letter-spacing: 1.2px;
        @include mobiles {
            padding: 0 50px;
        }
    }
    
</style>