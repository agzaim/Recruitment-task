<template>
    <div class="header-view-buttons">
            <input type="radio" 
                   name="viewType" 
                   value="value"
                   :checked="checked"> 
            <label>
                <slot></slot>
            </label>
    </div>
</template>

<script>
export default {
    props: {
            value: {
                type: String
            },
            checked: {
                type: Boolean
            }
        }
}
</script>
<style>
    
</style>