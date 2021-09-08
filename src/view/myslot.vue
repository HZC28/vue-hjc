<template>
    <div>
        thesum:{{sum}}
        <van-button size="small" type="primary" @click="changea">changeA</van-button>
        <van-button size="small" type="primary" @click="changeb">changeB</van-button>
        <van-button size="small" type="primary" @click="changec">changeC</van-button>
        <componentSlot>
            <template v-slot:default='obj'>{{obj}}</template>
        </componentSlot>
        <h1>{{obj}}</h1>
        <van-button size="small" type="primary" @click="changeobj">changeObj</van-button>
        <van-button size="small" type="primary" @click="changearr">changearr</van-button>
    </div>
</template>
<script>
import componentSlot from '@/components/componentSlot.vue'
export default({
    components:{
        componentSlot
    },
    data(){
        return{
            msg:"传入插槽的信息",
            a:1,
            b:2,
            c:3,
            obj:{
                arr:[1,2,3,4],
                arr1:[
                    {key:1},
                    {key:2}
                ],
                list:{
                    a:2,
                    b:6
                }
            }
        }
    },
    computed:{
        sum:function(){
            return this.a+this.b
        }
    },
    watch:{
        sum:function(){
            console.log("sum change")
        },
        obj:{
            handler:function(){
                console.log("obj change")
            },
            deep:true
        }
    },
    mounted(){
        console.log(this.$refs.slot,123)
    },
    methods:{
        click1(){
            this.msg='new msg'
        },
        click2(k){
            console.log(k)
        },
        changea(){
            this.a++
        },
        changeb(){
            this.b++
        },
        changec(){
            this.c++
        },
        changeobj(){
            this.obj.list.a++
            // this.$set()
        },
        changearr(){
            this.obj.arr1[0]=100
            // this.$set(this.obj.arr1,0,100)
            console.log(this.obj.arr[0])
        }
    }
})
</script>
<style scoped>
</style>