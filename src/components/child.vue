<template>
    <div>
        {{msg}}
        {{$attrs}}
        <button @click="click1">子组件触发按钮</button>
        <hr>
        <grandson v-bind.sync="$attrs" v-on="$listeners"></grandson>
    </div>
</template>
<script>
import grandson from '../components/grandson.vue'
export default({
    data(){
        return{
            msg:'子组件'
        }
    },
    props:["attr1"],
    components:{
        grandson
    },
    mounted(){
        console.log(this.$attrs)
        console.log(this.attr1)
        console.log(this.listeners)
    },
    methods:{
        click1(){
            this.$emit('childfun')
        }
    }
})
</script>