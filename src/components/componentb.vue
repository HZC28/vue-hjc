<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
import Bus from '../util/util'
export default({
    data(){
        return{
            msg:'我是子组件B'
        }
    },
    mounted(){
        Bus.$on('combevent',function(){
            console.log('监听到combevent事件触发')
            
        })
    }
})
</script>