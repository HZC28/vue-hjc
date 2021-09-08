var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
    let fs = require('fs');
import { CONNECTING } from 'eventsource';
import './jquery/jq.js'
import $html from './loadhtml'
import axios from 'axios'
// 主start程序

let allChapter=[]
function start(){
    let html='123'
    // axios.get('/api/read/155133/62641792.html').then(res=>{
    //     console.log(res.data)
    // })
    let arr=$html('.chaw_c>li>a')
    arr.each(function (index, item){
        let obj={}
        obj.chapterName=item.children[0].data
        obj.href=item.attribs.href
        allChapter.push(obj)
    })
    console.log(allChapter)
    for(let i=0;i<allChapter.length;i++){
        setTimeout(function(){
            Request(i)
        },100*i)
    }
    return html
}
function Request(i){
    axios.get(`/api${allChapter[i].href}`).then(res=>{
        let $cheeiro=cheerio.load(res.data)
        allChapter[i].chapterContent=''
        $cheeiro('.txtnav p').each(function(index,item){
            allChapter[i].chapterContent=allChapter[i].chapterContent+$(item).text()+'\n'
        })
        console.log(i,allChapter.length-1)
        if(i==allChapter.length-1){
            console.log(JSON.stringify(allChapter))
        }
    })
}
// writeJson()
// start()
export default start