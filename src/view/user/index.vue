<template>
    <div>
        <img :src="imgCodeUrl" alt="">
    </div>
</template>
<script>
    export default{
        data(){
            return{
                imgCodeUrl:""
            }

        },
        methods:{
            load(){
                this.$http("http://192.168.1.99:3000/file/loadFile", {
                        params:{
                            fileId:"163264697060"
                        },
                        responseType: "blob", // 1.首先设置responseType对象格式为 blob: // 二进制流
                    }).then(res=>{
                        let data =res.data
                        let blob = new Blob([data])
                        let url = window.URL.createObjectURL(blob)
                        let link = document.createElement('a')
                        link.style.display = 'none'
                        link.href = url 
                        link.setAttribute('download',  '文件.png')
                        document.body.appendChild(link)
                        link.click()
                            // 然后移除
                        document.body.removeChild(link)
                })
            },
            getImg(){
                let self=this
                this.$http({
                    method: 'get',
                    url: "/express/file/loadFile?fileId=1632646974060",
                    responseType: 'blob',
                    }).then(function (response) {
                    //将从后台获取的图片流进行转换
                        console.log(response)
                        let blob = response.data;
                        self.imgCodeUrl = window.URL.createObjectURL(blob)//转换为图片路径
                        console.log(self.imgCodeUrl)
                    }).catch(function (err) {
                })
            },
            login(){
                let self=this
                this.$http({
                        method: 'post',
                        url: "http://192.168.1.99:3000/user/login",
                        params:{
                            name:"hjc123",
                            password:"126"
                        }
                    }).then(res=> {
                        console.log(res.data.data.token)
                        localStorage.setItem("token",res.data.data.token)
                    }).catch(function (err) {
                })
            }
        },
        created(){
            // this.load()
            // this.getImg()
            // console.log(localStorage.getItem("token"))
            if(!localStorage.getItem("token")){
                this.login()
            }else{
                this.getImg()
            }
            
        }
    }
</script>
<style scoped>

</style>