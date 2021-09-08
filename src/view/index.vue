<template>
    <div>
        <keep-alive>
            <component :is="componentName"></component>
        </keep-alive>
        <!-- <component :is="componentName"></component> -->
        <button @click="change(1)">切换组件A</button>
        <button @click="change(2)">切换组件B</button>
        <button @click="onevent">on</button>
        <hr>
        <refChild ref="refchild"></refChild>
        <!-- <child :attr1="attr1" :attr2="attr2" :attr3="attr3" v-on:childfun='func1' v-on:grandsonfun='func2'></child> -->
    </div>
</template>
<script>
import ComponentA from '../components/componenta.vue'
import ComponentB from '../components/componentb.vue'
import child from '../components/child.vue'
import refChild from '../components/refchild.vue'
import Bus from '../util/util'
export default({
    provide:{
        trydata:'parent'
    },
    components:{
        ComponentA,
        ComponentB,
        child,
        refChild
    },
    data(){
        return{
            componentName:'ComponentB',
            num:1,
            attr1:'1',
            attr2:'2',
            attr3:'3',
            msg:""
        }
    },
    mounted(){
        console.log(this.$children)
        console.log('$refs:',this.$refs.refchild.msg)
    },
    methods:{
        onevent(){
            Bus.$emit('combevent')
            setTimeout(function(){
                Bus.$off('combevent')
            },1000)
        },
        func1(){
            console.log("子组件触发父组件方法")
        },
        func2(){
            console.log('孙组件触发父组件方法')
        },
        change(name){
            let oldComponnet=this.componentName
            if(name==1){
                this.componentName='ComponentA'
            }else{
                this.componentName='ComponentB'
            }
            let i=0
            this.$nextTick().then(res=>{
                this.$children.forEach((val,index)=>{
                    if(val.type){
                        i=index
                    }
                })
                this.$children[i].count=this.num
                if(this.$children[i].type==1&&oldComponnet=='ComponentB'){
                    this.num++;
                    this.$children[i].count=this.num
                    this.$forceUpdate()
                }
            })
            
        }
    }
})
</script>
