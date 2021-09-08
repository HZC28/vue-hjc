<template>
    <div>
        <!-- <el-table
      :data="tableData"
      style="width: 100%">
        <div v-for="(key,index) in keyarr" :key='index'> 
            <el-table-column
                :prop="key.value"
                :label="key.name"
                width="180">
            </el-table-column>  
        </div>
    </el-table> -->
    <!-- {{html}} -->
    <el-button @click="openNew">打开窗口</el-button>
    </div>
</template>
<script>
import children from '../util/test'
import start from '../util/gethtml'
export default{
    data(){
        return{
            obj:{
                a:1,
                b:2,
                c:3,
                d:4,
                e:function(){
                    console.log(123)
                }
            },
            html:'',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            keyarr:[
                {name:'名字1',value:'name'},
                {name:'日期1',value:'date'},
                {name:'地址1',value:'address'}
            ]
        }
    },
    mounted(){
        // let child=new children(1,2,3)
        // console.log(child.getSum())
        // this.test()
        // this.arres6()
        // this.getKey()
        // this.forin()
        start()
        // this.getKey1()
    },
    methods:{
        openNew(){
            window.open('/transform')
        },
        forin(){
            this.obj.prototype.name='n'
            for(let i in this.obj){
                if(this.obj.hasOwnProperty(i)){
            　　　　console.log(i);
            　　}
                console.log(i)
            }
        },
        getKey1(){
            for(let i=0;i<10;i++){
                setTimeout(function(){
                    console.log(i)
                },1000*i)
            }
        },
        getKey(){
            let tableData= [{
                lable:''
            }]
            let arr=[{name:'张三',value:'1',c:4},{a:2,b:1,c:4},{a:2,b:1,c:4},{a:2,b:1,c:4}]
            let key=[
                {name:'名字',value:'name'},
                {name:'年龄',value:'age'},
                {name:'性别',value:'sex'}
            ]
            for (var o in this.obj){
                console.log(o)
                arr[arr.length]=o
            }
            console.log(arr)
        },
        getDate(){
            console.log("tb,zhihu,ttiao,")
        },
        test(){
            new Promise(function(resolve,reject){
                // resolve('123')
                // reject('reject')
                // return resolve('fulfilled')
                resolve(resolve)
                console.log("触发project")
            }).then(res=>{
                console.log(res,"fulfilled状态回调")
            },function(res){
                console.log(res,'rejected状态回调')
            }).then(res=>{
                setTimeout(function(){
                    console.log(res,'.then定时器')
                },0)
                console.log(res,5)
            })
            console.log('同步任务')
        },
        arres6(){
            let arr=[1,2,3,4,5]
            let arr1=[5,6,7,8,9]
            let arr2=[...arr,...arr1]
            let set=new Set(arr2)
            console.log([...set])
            let obj={a:1,b:2,c:3}
            let {a,b}=obj
            console.log(a,b)
        }
    }
}
</script>
<style scoped lang="less">
@import '../style/public.less';
button{
    width: 100px;
}
.default{
    width: 20vw;
    background: green;
}
.error{
    width: .gethw(75px)[@hw];
    background: red;
}
</style>