<template>
    <div>
        <slot name="db" v-bind:obj="obj">
            123
        </slot>
        <slot v-bind:obj="obj">
            123
        </slot>
    </div>
</template>
<script>
export default{
    data(){
        return{
            msg:'插槽',
            obj:{
                left:"这边",
                right:"右边"
            }
        }
    }
}
</script>
