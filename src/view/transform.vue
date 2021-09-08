<template>
    <div>
        <transition name="slide-fade" :duration='5000'>
        <div v-if="show">1234543</div>
        </transition>
        <button @click="show=!show">change</button>
    </div>
</template>
<script>
export default({
    data(){
        return{
            msg:'我是子组件B',
            show:true
        }
    },
})
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translate(100px,100px);
  opacity: 0;
}
</style>