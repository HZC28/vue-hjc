var http=require('http');
var querystring=require('querystring');
var request = require('request');
let tbs=''
let fid=''
let fname="互粉"
let replyAyy=[
    "23",
    "好的",
    "ok",
    "在寂静的古镇夜晚显得格外清晰，",
    "而且声音开的老远，估计附近的居民都听见了。",
    "回头看了一眼。",
    "周围没什么奇怪的",
    "也没有看见什么",
    "没有一个名字他是认识的",
    "等待反而是一件非常轻松的事情"
]
async function getTbs(){
    var options1 = {
        url: "http://tieba.baidu.com/dc/common/tbs",
        followRedirect: false,
        headers : {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'__yjs_duid=1_2354803a91ab3757a17422d0048e552f1619058953924; BAIDUID=1D356AD32CCBF60B81E63BEF97F0B158:FG=1; PSTM=1631171785; BIDUPSID=155B58698401AD7053C7A8E74E3A9FB1; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; BDSFRCVID=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; BDSFRCVID_BFESS=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; delPer=0; BDRCVFR[S_ukKV6dOkf]=mk3SLVN4HKm; PSINO=6; H_PS_PSSID=34380_34145_31254_34553_34004_34600_34585_34092_34293_26350_34556; Hm_lvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329264,1631329277,1631329282; video_bubble0=1; BAIDU_WISE_UID=wapp_1631329281589_79; USER_JUMP=-1; st_key_id=17; BDUSS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; BDUSS_BFESS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; STOKEN=100204e1e5ae4e67ac893981de0e9d66079f9d9b31c7852e8f860a156aa978a9; BA_HECTOR=2k208g2k8k2g010hg91gjo70f0r; 5559398896_FRSVideoUploadTip=1; video_bubble5559398896=1; wise_device=0; st_data=708c892659a8d7089c1a50a8074f3b9136cf353b3b78210a5b2cb9ad816076345a613ddd8b2a172fe2b3031d21c180c3e7506e6d0e3c86f90ee234b340551246596672087bb4466ea8e280bc87055bc9a598c72761cbcf6540fa7e61365879e5e4e31cbdb05fc3ff24c50e06100af24756e9e62513739066efbe32d00b49a569; st_sign=7b878692; ab_sr=1.0.1_YWM3ZTBmN2MxYTdjMzZjMTNmYTBiYTYwYzFlY2YyY2U0YzdhY2M5Yjc5ZDgxNzAxMTcwODNhZTIwNTkyYzJhODQwNWVkNTc1NWM5NTk3NjQ2MDAyMzRlODVlZmFjNTg0YzNjYjExM2MxNzgyM2QyOGUzMThjOGE3NTIzNGRiZjFkOWE5MzUwMmM2MzU2NDI3MjE4NDA3ZmMyNjAyNjRmNw==; Hm_lpvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329324',
        }
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
async function getFid(fname){
    var options1 = {
        url: "http://tieba.baidu.com/f/commit/share/fnameShareApi?ie=utf-8&fname="+encodeURI(fname),
        headers : {
        // 'Accept':'application/json, text/javascript, */*; q=0.01',
        // 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Cookie':'__yjs_duid=1_2354803a91ab3757a17422d0048e552f1619058953924; BAIDUID=1D356AD32CCBF60B81E63BEF97F0B158:FG=1; PSTM=1631171785; BIDUPSID=155B58698401AD7053C7A8E74E3A9FB1; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; BDSFRCVID=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; BDSFRCVID_BFESS=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; delPer=0; BDRCVFR[S_ukKV6dOkf]=mk3SLVN4HKm; PSINO=6; H_PS_PSSID=34380_34145_31254_34553_34004_34600_34585_34092_34293_26350_34556; Hm_lvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329264,1631329277,1631329282; video_bubble0=1; BAIDU_WISE_UID=wapp_1631329281589_79; USER_JUMP=-1; st_key_id=17; BDUSS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; BDUSS_BFESS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; STOKEN=100204e1e5ae4e67ac893981de0e9d66079f9d9b31c7852e8f860a156aa978a9; BA_HECTOR=2k208g2k8k2g010hg91gjo70f0r; 5559398896_FRSVideoUploadTip=1; video_bubble5559398896=1; wise_device=0; st_data=708c892659a8d7089c1a50a8074f3b9136cf353b3b78210a5b2cb9ad816076345a613ddd8b2a172fe2b3031d21c180c3e7506e6d0e3c86f90ee234b340551246596672087bb4466ea8e280bc87055bc9a598c72761cbcf6540fa7e61365879e5e4e31cbdb05fc3ff24c50e06100af24756e9e62513739066efbe32d00b49a569; st_sign=7b878692; ab_sr=1.0.1_YWM3ZTBmN2MxYTdjMzZjMTNmYTBiYTYwYzFlY2YyY2U0YzdhY2M5Yjc5ZDgxNzAxMTcwODNhZTIwNTkyYzJhODQwNWVkNTc1NWM5NTk3NjQ2MDAyMzRlODVlZmFjNTg0YzNjYjExM2MxNzgyM2QyOGUzMThjOGE3NTIzNGRiZjFkOWE5MzUwMmM2MzU2NDI3MjE4NDA3ZmMyNjAyNjRmNw==; Hm_lpvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329324',
        }
      }
      await new Promise(resolve=>{
        request(options1,async (error, response, body)=> {
            fid=JSON.parse(body).data.fid
            // console.log(body);
            resolve()
        })
      })
}
async function reply(){
    var postData=querystring.stringify({
        'ie':'utf-8',
        'kw':fname,
        'fid':fid,
        'tid':7527639783,
        'vcode_md5':'',
        // 'floor_num':3,
        'rich_text':1,
        'tbs':tbs,
        'content':replyAyy[Math.floor(Math.random() * 10)],
        'basilisk':1,
        'files':[],
        '__type__':'reply'
    });
    let options = {
        url: "https://tieba.baidu.com/f/commit/post/add",
        method: "POST",
        json: true,
        body:postData,
        headers : {
        // 'Accept':'application/json, text/javascript, */*; q=0.01',
        // 'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        // 'Cookie':'__yjs_duid=1_2354803a91ab3757a17422d0048e552f1619058953924; BAIDUID=1D356AD32CCBF60B81E63BEF97F0B158:FG=1; PSTM=1631171785; BIDUPSID=155B58698401AD7053C7A8E74E3A9FB1; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; BDSFRCVID=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; BDSFRCVID_BFESS=GiCOJeCAaxI5OiQHh5ygh-Bz_eKK0gOTH6HhQCElkCqVgO4VfM10EG0POf8g0KubKALAogKK3gOTH4DF_2uxOjjg8UtVJeC6EG0Ptf8g0M5; H_BDCLCKID_SF_BFESS=tb4JVCKyfCI3jtOY5-__-4_tbh_X5-RLf23iBh7F5l8-hC3_jqoYjfkIQJQWaIrG22FHKCQDbxjxOKQphPj53hK_5fnu5-nWHRb0bRjN3KJmDPP9bT3v5tDWXtFJ2-biWb7M2MbdJpbP_IoG2Mn8M4bb3qOpBtQmJeTxoUJ25DnJhbLGe6-2j5c0eau8q-ce26n-sJoq2RbhKROvhjR2yh4gyxomtjDfWJTP24odBl5BfbPzL4RPDx_-Wfr2LUkqKC88Bb0a5lThD45-BIFWMq__QttjQPROfIkja-5tbh6YMb7TyU45bU47yaOR0q4Hb6b9BJcjfU5MSlcNLTjpQT8r5MDOK5OhJRLH_ItXfI8KMIvuM-rf-tRH-xQ0KnLXKKOLVh3V0h7keqOq-J7zjf4t0t73tRcM2PjGXf7HWhk2ep72y5j1Mh_dQfvW3bop528J-JQztCJpsIJMXPDWbT8U5f5i3x7CaKviaKOjBMb1MhbDBT5h2M4qMxtOLR3pWDTm_q5TtUJMeCnTDMFhe4tX-NFeJjk8JxK; delPer=0; BDRCVFR[S_ukKV6dOkf]=mk3SLVN4HKm; PSINO=6; H_PS_PSSID=34380_34145_31254_34553_34004_34600_34585_34092_34293_26350_34556; Hm_lvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329264,1631329277,1631329282; video_bubble0=1; BAIDU_WISE_UID=wapp_1631329281589_79; USER_JUMP=-1; st_key_id=17; BDUSS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; BDUSS_BFESS=htV3NvcWM0YWhwMk9MeDBuRnEzc3ppS2lwUjA0VkN6VXdkVXltfk5ZWUxxV05oSVFBQUFBJCQAAAAAAQAAAAEAAADwsV1LaGprc3dkYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAscPGELHDxhWF; STOKEN=100204e1e5ae4e67ac893981de0e9d66079f9d9b31c7852e8f860a156aa978a9; BA_HECTOR=2k208g2k8k2g010hg91gjo70f0r; 5559398896_FRSVideoUploadTip=1; video_bubble5559398896=1; wise_device=0; st_data=708c892659a8d7089c1a50a8074f3b9136cf353b3b78210a5b2cb9ad816076345a613ddd8b2a172fe2b3031d21c180c3e7506e6d0e3c86f90ee234b340551246596672087bb4466ea8e280bc87055bc9a598c72761cbcf6540fa7e61365879e5e4e31cbdb05fc3ff24c50e06100af24756e9e62513739066efbe32d00b49a569; st_sign=7b878692; ab_sr=1.0.1_YWM3ZTBmN2MxYTdjMzZjMTNmYTBiYTYwYzFlY2YyY2U0YzdhY2M5Yjc5ZDgxNzAxMTcwODNhZTIwNTkyYzJhODQwNWVkNTc1NWM5NTk3NjQ2MDAyMzRlODVlZmFjNTg0YzNjYjExM2MxNzgyM2QyOGUzMThjOGE3NTIzNGRiZjFkOWE5MzUwMmM2MzU2NDI3MjE4NDA3ZmMyNjAyNjRmNw==; Hm_lpvt_98b9d8c2fd6608d564bf2ac2ae642948=1631329324',
        }
      }
      await new Promise(resolve=>{
        request(options,async (error, response, body)=> {
            // tbs=JSON.parse(body).tbs
            // console.log(JSON.parse(body));
            console.log(body.data.content);
            resolve()
        })
      })
    
}
 async function start(){
    await getFid(fname)
    await getTbs()
    reply()
 }
//  let random=Math.floor(Math.random() * 10);//返回8-17随机数
 let timer;
 function addTimerout(random){
    timer=setTimeout(res=>{
        start()
        clearTimeout(timer)
        addTimerout(Math.floor(Math.random() * 10))
        console.log("间隔"+random)
     },1000*random)
 }
 addTimerout(Math.floor(Math.random() * 10))