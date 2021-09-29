var http=require('http');
var querystring=require('querystring');
var request = require('request');
// let get_bsk_data=require('./c.js')
// 要回复的帖子
let tid="7510509402"
let tbs=''
let fid=''
let ft=''
// 贴吧的名称
let fname="前端"
let Bsk=''
let mouse_pwd=''
let mouse_pwd_t=''
// 回复内容，随机数获取要回复的内容
let replyAyy=[
    'what',
    "131",
    "adsad",
    "asdaddfsdf",
    "dssf",
    'what',
    "131",
    "adsad",
    "asdaddfsdf",
    "dssf"
]
// 请求头最重要的是cookie，登录自己的百度账号，随便回复一下，复制下来cookie进去就可以了
let headers = {
    'Accept':'application/json, text/javascript, */*; q=0.01',
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie':'',
}
var n = {"tbs":"1e991777ca2d58a11632396959"};
    var t = {};
    _BSK.a("omzVouOACqkNljzDbdOB", {
        IN: n,
        OUT: t
    });
async function getTbs(){
    var options1 = {
        url: "http://tieba.baidu.com/dc/common/tbs",
        followRedirect: false,
        headers : headers
      }
      await new Promise(resolve=>{
        request(options1,async (error, response, body)=> {
            tbs=JSON.parse(body).tbs
            // console.log(JSON.parse(body));
            // console.log(tbs);
            resolve()
        })
      })
}
// 根据贴吧名获取贴吧id，id数字越前改吧越早建立
async function getFid(fname){
    var options1 = {
        url: "http://tieba.baidu.com/f/commit/share/fnameShareApi?ie=utf-8&fname="+encodeURI(fname),
        // headers : headers
      }
      await new Promise(resolve=>{
        request(options1,async (error, response, body)=> {
            fid=JSON.parse(body).data.fid
            // console.log(body);
            resolve()
        })
      })
}
// 回复接口
async function reply(){
    var postData=querystring.stringify({
        'ie':'utf-8',
        'kw':fname,
        'fid':fid,
        'tid':tid,
        'vcode_md5':'',
        'floor_num':3,
        'rich_text':1,
        'tbs':tbs,
        // replyAyy[Math.floor(Math.random() * 10)]
        'content':replyAyy[Math.floor(Math.random() * 10)],
        'basilisk':1,
        'files':[],
        // 'mouse_pwd':mouse_pwd,
        // 'mouse_pwd_t': mouse_pwd_t, //maybe time
        '__type__':'reply'
    });
    let options = {
        url: "https://tieba.baidu.com/f/commit/post/add",
        method: "POST",
        json: true,
        body:postData,
        headers : headers
      }
      await new Promise(resolve=>{
        request(options,async (error, response, body)=> {
            // tbs=JSON.parse(body).tbs
            // console.log(JSON.parse(body));
            console.log(body);
            resolve()
        })
      })
    
}
// 主函数
 async function start(){
    await getFid(fname)
    await getTbs()
    // let k=get_bsk_data(tbs)
    // Bsk=k.bsk
    // mouse_pwd=k.mouse_pwd
    // mouse_pwd_t=k.mouse_pwd_t
    reply()
 }
//  async function test(){
//     await getTbs()
//     console.log(tbs)
//     let k=get_bsk_data(tbs)
//     Bsk=k.bsk
//     mouse_pwd=k.mouse_pwd
//     mouse_pwd_t=k.mouse_pwd_t
//     console.log(k)
//  }
//  test()
//  start()
// getFt()
//  let random=Math.floor(Math.random() * 10);//返回8-17随机数
//  let timer;
// 间隔8-17秒钟回复一次
 function addTimerout(random){
    timer=setTimeout(res=>{
        start()
        clearTimeout(timer)
        addTimerout(Math.floor(Math.random() * 10)+8)
        console.log("间隔"+random+'分钟')
     },1000*random)
 }
 addTimerout(Math.floor(Math.random() * 10)+8)



//  贴吧自动回帖功能涉及的接口
//  根据吧名获取fid：http://tieba.baidu.com/f/commit/share/fnameShareApi?ie=utf-8&fname=吧名
//  回复的接口：https://tieba.baidu.com/f/commit/post/add
//  现在已经能够实现回帖功能了,但是会被系统秒删，知道是BSK这个加密参数的问题，有没有大神解决下
// 回复贴的id
let tid="7510509402"
// 贴吧的名称
let fname="前端"