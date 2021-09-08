<template>
    <div>
        <el-table class="mytable" :data="lists" style="width: 96%;margin-left:2%">
             <el-table-column
                prop="nickName"
                label="昵称"
                 width="220"
                align="center">
            </el-table-column>
            <el-table-column
                prop="articleTitle"
                align="center"
                show-overflow-tooltip
                label="标题">
            </el-table-column>
            <el-table-column
                prop="viewCount"
                align="center"
                label="浏览"
                width="80">
            </el-table-column>
             <el-table-column
                prop="commentCount"
                align="center"
                width="80"
                label="评论">
            </el-table-column>
             <el-table-column
                align="center"
                show-overflow-tooltip
                label="链接">
                 <template slot-scope="scope">
                     <a target="_blank" :href="scope.row.articleDetailUrl">{{scope.row.articleDetailUrl}}</a>
                 </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[10, 20, 30, 40,50]"
            :page-size="size"
            :total="100"
            layout="sizes, prev, pager, next, jumper">
        </el-pagination>
        <div v-html="html"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[],
            tableData:[],
            page:1,
            size:10,
            html:`<p><img src=\"https://excel.toofun.top/image/858bf4c4913980fe4dde9ff4f4d2fb2c\" title=\"1618904446944852.png\" alt=\"04.UI体验课.png\"/></p>`
        }
    },
    mounted(){
        this.request()
    },
    methods:{
        request(){
            this.$http.get("/csdn/phoenix/web/blog/hot-rank",{
                params:{
                    pageSize:this.size,
                    page:this.page
                }
            }).then(res=>{
                console.log(res.data)
                this.lists=res.data.data
            })
        },
        handleSizeChange(val){
            this.size=val
            this.request()
        },
        handleCurrentChange(val){
            this.page=val
            this.request()
        }
    }
}
</script>
<style scoped>
    *{
        margin:0px;
        padding: 0px;
    }
    .pagination{
        display: flex;
        justify-content: flex-end;
        padding-right:0px;
        margin-top:20px;
        margin-right: 2%;
        margin-bottom: 40px;
    }
    /* .el-pagination__jump{
        margin-right:30px !important;
    } */
</style>

"https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwMzIzOTIwNw==&scene=124&uin=&key=&devicetype=Windows+10+x64&version=6302019c&lang=zh_CN&a8scene=7&fontgear=2