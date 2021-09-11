<template>

</template>
<script>
export default {
    data() {
        return{

        }
    },
    created(){
        this.$http.get("/list").then(res=>{
            console.log(res)
        })
    }
}
</script>