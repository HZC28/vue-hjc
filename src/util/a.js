// var request = require('request');
// var r = request.get('https://aweme.snssdk.com/aweme/v1/play/?video_id=v0d00fg10000c4nom4jc77u3ev61ut70&ratio=720p&line=0', function (err, res, body) {
//   console.log(r.uri.href);
//   console.log(res.request.uri.href);

//   // Mikael doesn't mention getting the uri using 'this' so maybe it's best to avoid it
//   // please add a comment if you know why this might be bad
//   console.log(this.uri.href);
// });
async function a(){
  var request = require('request');

// async function find_link (link, collback) {
//     console.log(131313)
//     async function f(link) {
//       console.log(1231323345)
//         var options = {
//             url: link,
//             followRedirect: false,
//             headers : {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 'Accept-Charset': 'UTF-8;',
//                 'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8',
//             }
//         }
//         await new Promise(resolve => {
//           request(options,async (error, response, body)=> {
//             console.log(response.statusCode);
//             if (response.statusCode == 301 || response.statusCode == 302) {
//                 var location = response.headers.location;
//                 console.log('location: ' + location);
//                 f(location);
//             } else {
//                 //console.log(body);
//                 resolve("123")
//                 collback(link);
                
//             }
//           })
//         });
        
//     }
//     await f(link);
// }

// await find_link("https://aweme.snssdk.com/aweme/v1/play/?video_id=v0d00fg10000c4nom4jc77u3ev61ut70&ratio=720p&line=0", function(link){
//     console.log(link);
// });
var options = {
  url: "https://aweme.snssdk.com/aweme/v1/play/?video_id=v0d00fg10000c4nom4jc77u3ev61ut70&ratio=720p&line=0",
  followRedirect: false,
  headers : {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept-Charset': 'UTF-8;',
      'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN; rv:1.9.2.8) Firefox/3.6.8',
  }
}
await new Promise(resolve => {
  request(options,async (error, response, body)=> {
    console.log(response.statusCode);
    if (response.statusCode == 301 || response.statusCode == 302) {
        var location = response.headers.location;
        console.log('location: ' + location);
        url=response.headers.location
        resolve("13213")
    } 
  })
});
console.log("return")
}
let str="5.66 XzG:/ 狗子我就是故意的 %搞笑视频   https://v.douyin.com/d2jonUC/ 复制此链接，哒开Dou音搜索，直接观看视pin"
let s1=str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g);
var reg=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
let s2=str.match(reg)
let k=str.match(/(http:\/\/|https:\/\/)(\S*)com/)
console.log(k)
console.log(s1)
console.log(s2)