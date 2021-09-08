<template>
    <div>
        {{msg}}
        {{$attrs}}
        我是注入的{{trydata}}
        <button @click="click1">触发事件</button>
    </div>
</template>
<script>
export default({
    inject:['trydata'],
    data(){
        return{
            msg:'孙组件'
        }
    },
    mounted(){
        console.log('grandson被触发',this.$attrs)
    },
    methods:{
        click1(){
            this.$emit('grandsonfun')
        }
    }
})
</script>