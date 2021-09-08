<template>
  <div class="login_content">
    <!-- 头部 -->
    <div class="header_container">
      <div class="logo_content">
        <h2 class="title">长沙逗兔网络科技有限公司</h2>
        <!-- <div class="logo"></div> -->
        <!-- <div class="login_btn" @click.stop="goLogin">登录</div> -->
      </div>
    </div>
    <!-- IE浏览器提示 -->
    <div class="ie_tips" v-if="showTips">
      <img src="../../src/assets/tips_img.png" alt="" />
      由于版本兼容问题，IE浏览器不可登录，建议同学们使用谷歌或者火狐浏览器登录哦！
    </div>

    <div class="content">
      <div class="container_1" ref="container_1">
        <!-- slogen -->
        <div class="describe_content">
          <!-- <p class="first_level_title">小万，让学习更简单</p> -->
          <p class="secondary_title">简易快捷的工具APP</p>
          <!-- <div class="go_study" @click="goLogin">马上学习</div> -->
        </div>
        <section class="banner_arear">
          <el-carousel height="150px">
            <el-carousel-item v-for="item in courseMessage" :key="item">
              <img
                class="header_banner"
                :src="item.courseUrl"
                alt=""
                @click="openScan(item)"
              />
            </el-carousel-item>
          </el-carousel>
        </section>
      </div>
      <div class="login_center_content">
        <div class="container_2">
          <div class="main_top_title">
            <div class="course_header">
              <span class="login_line"></span>
              <p class="course_name">精品APP</p>
              <span class="login_line"></span>
            </div>
          </div>

          <div class="course_container">
            <div class="course_content">
              <div
                class="course_message"
                v-for="(item, index) in courseMessage"
                :key="index"
                @click="openScan(item)"
              >
                <div class="course_img">
                  <div class="xiazhai_btn" @click="xiazhaiEvent(index)">下载</div>
                  <img :src="item.courseUrl" alt="" />
                </div>
                <div class="course_bottom">
                  <div class="course_bottom_top">
                    <p class="course">{{ item.courseName }}</p>
                    <span class="people_num">查看详情</span>
                  </div>
                  <div class="course_describe">
                    <div>
                      <p class="course_lable">{{ item.course_lable1 }}</p>
                      <p class="course_lable last_lable">
                        {{ item.course_lable2 }}
                      </p>
                      <p class="course_lable last_lable">
                        {{ item.course_lable3 }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分割线渐变 -->
        <div class="dividing_line"></div>
        <div class="container_3">
          <div class="bottom_content">
            <div class="bottom_content_header">
              <div class="course_header">
                <span class="login_line course_featuers_line"></span>
                <p class="course_name course_features">APP特色</p>
                <span class="login_line course_featuers_line"></span>
              </div>
            </div>

            <div class="banner_content">
              <div class="banner_bg">
                <div class="banner">
                  <el-carousel
                    :autoplay="isautoplay"
                    ref="carousel"
                    :initial-index="initial"
                    :interval="5000"
                    @change="changeSlice"
                  >
                    <el-carousel-item
                      v-for="(item, index) in bannerImg"
                      :key="index"
                    >
                      <div class="banner_item">
                        <img :src="item.url" alt="" />
                      </div>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer_top">
          <router-link
            class="agreement footer_top_left"
            :to="{ path: '/user_agreement' }"
            target="_blank"
            >用户协议</router-link
          >
          <router-link
            class="agreement footer_top_right"
            :to="{ path: '/privacy_policy' }"
            target="_blank"
            >隐私政策</router-link
          >
        </div>
        <div class="footer_center">
          <span>公司名称：广州指梦科技有限公司</span>
          <span style="margin-left: 20px">客服热线：020-87066990</span>
        </div>
        <div class="footer_botton">
          <!-- <div class="public_security">
            <img src="../assets/gongantubiao.png" alt="" />
            <a style="margin-left: 5px">粤公网安备 44010602008493号</a>
          </div> -->
          <!-- 中国广东省广州市广东省天河区棠东毓南路8号314房 -->
          <a style="margin-left: 15px">湘ICP备19021977号-1</a>
          <span style="margin-left: 15px">Copyright ©2020 </span>
        </div>
      </div>
    </div>
    <scan-login v-show="isShowScan" @btnState="btnState" :scanData="scanData"></scan-login>
  </div>
</template>
<script>
import ScanLogin from "../components/scan";
import courseUrl1 from "../assets/class_2.png";
import courseUrl2 from "../assets/class_1.png";
import courseUrl3 from "../assets/class_3.png";
// import courseUrl4 from "../assets/class_4.png";
import courseUrl4 from "../assets/scxznew.png";
// import banner1_gif from "../assets/banner1_gif.jpg";
// import banner2_gif from "../assets/banner2_gif.jpg";
// import banner3_gif from "../assets/banner3_gif.jpg";
// import banner4_gif from "../assets/banner4_gif.jpg";
import banner1_gif from "../assets/new1.jpg";
import banner2_gif from "../assets/new2.jpg";
import banner3_gif from "../assets/new3.jpg";
import banner4_gif from "../assets/new4.jpg";
import Bus from "../utils/bus";
export default {
  components: {
    ScanLogin,
  },
  data() {
    return {
      deg: 0,
      select: 1,
      courseMessage: [
        {
          id: 1,
          courseUrl: courseUrl1,
          courseName: "我的简易钟表",
          course_lable1:
            "我的简易钟表是一款工具类型APP，提供不同时区时间查询功能。具体操作为选择不同城市，查询对应城市所在时区的时间",
          course_lable2: "",
          course_lable3: "",
        },
        {
          id: 2,
          courseUrl: courseUrl4,
          courseName: "我的诗词小站",
          course_lable1: "内容包含唐诗宋词元曲原文，翻译以及注释解析，可根据作者或者根据诗词类型查询进行查询赏析。从首页可进入到不同类型诗词列表，可根据名称查询并进入诗词详情页查看赏析。",
          course_lable2: "",
          course_lable3: "",
        },

        {
          id: 3,
          courseUrl: courseUrl2,
          courseName: "我的mini计算器",
          course_lable1: "我的mini计算器APP，集合全新数据库，快速查询链接数据库信息，高速运转，进行有效云端计算，给你最人性化的数据结果。",
          course_lable2: "",
          course_lable3: "",
        },
        {
          id: 4,
          courseUrl: courseUrl3,
          courseName: "我的远程闹钟",
          course_lable1: "我的远程闹钟APP，集日程提醒、日程管理的提醒软件，具有远程多端控制功能，不仅可以提醒个人日程，还能通过设置提醒他人行程。",
          course_lable2: "",
          course_lable3: "",
        },
      ],
      bannerImg:[{url:banner1_gif},{url:banner2_gif},{url:banner3_gif},{url:banner4_gif}],
      initial: 0,
      isShowScan: false,
      timer: "",
      scrollTop: "",
      isautoplay: true,
      showTips: false,
      scanData:'',
    };
  },
  created() {
    
  },
  mounted() {
    
  },
  methods: {
    clickEvent(index) {
      this.setActiveItem(index - 1);
      this.isautoplay = false;
    },
    removeAutoplay() {
      this.isautoplay = true;
    },
    //获取当前banner索引
    setActiveItem(index) {
      this.$refs.carousel.setActiveItem(index);
    },
    changeSlice(index) {
      this.initial = index;
    },
    scanCodeLogin() {
      this.isShowScan = true;
    },
    openScan(data) {
      this.scanData=data;
      this.isShowScan = true;
    },
    xiazhaiEvent(index){
       if(index==1){
           window.location.href='https://excel.toofun.top/%E8%AF%97%E8%AF%8D%E5%B0%8F%E7%AB%99.apk'
       }else{
           let a = document.createElement("a");
            a.style.display = "none";
            a.href ='https://excel.toofun.top/%E6%88%91%E7%9A%84%E7%AE%80%E6%98%93%E9%92%9F%E8%A1%A8.apk';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
       }
    },
    goLogin() {
      this.isShowScan = true;
    },
    btnState(btnState) {
      this.isShowScan = btnState;
    },
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //兼容不同的浏览器
    },
  },
};
</script>
<style lang="less" scoped>
@px:1 /19.2vw;
.container_1 {
  width: 100%;
  height: 600 * @px;
  background: url("../assets/login_bg1.png");
  background-position: center center;
  position: relative;
  overflow: hidden;
  margin-top: -150px;
}
.header_container {
  width: 100%;
  margin: auto;
  height: 60 * @px;
  background: rgba(14, 25, 36, 0.75);
  position: fixed;
  margin-top: 150px;
  z-index: 999999;
}
.logo_content {
  padding-left: 250px;
  // padding: 0px 80 * @px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  color: #fff;
  line-height: 60px;
}
.logo {
  width: 135 * @px;
  height: 31 * @px;
  background: url("../assets/logo.png");
  background-size: 100% 100%;
}
.login_btn {
  width: 72 * @px;
  height: 34 * @px;
  line-height: 34 * @px;
  background: #ffffff;
  border-radius: 8 * @px;
  font-size: 18 * @px;
  color: #0f1923;
  font-weight: bold;
  &:hover {
    background: #cccccc;
  }
}

.describe_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.banner_arear {
  width: 350px;
  height: 180px;
  margin-top: 350px;
  margin-left: 40%;
  position: relative;
}
.header_banner {
  width: 350px;
  height: 180px;
  border-radius: 10px;
  overflow: hidden;
}
.first_level_title {
  font-family: Bold;
  font-size: 40 * @px;
  color: #ffffff;
  letter-spacing: 4 * @px;
  text-align: justify;
}
.secondary_title {
  font-family: Normal;
  font-size: 28 * @px;
  color: #ffffff;
  letter-spacing: 7 * @px;
  margin-top: 12 * @px;
  text-align: justify;
}
.go_study {
  width: 192px;
  height: 48px;
  line-height: 48px;
  border-radius: 4px;
  background: #ff5800;
  font-size: 24px;
  color: #ffffff;
  margin-top: 46px;
  font-family: Bold;
  &:hover {
    background: #d8400d;
  }
}
.universe_content {
  width: 100%;
  height: 600 * @px;
  background: url("../assets/xuanzhuan.png");
  background-size: 100% 100%;
}
.login_center_content {
  width: 100%;
  height: 100%;
  background: url("../assets/login_bg2.png");
  background-size: 100% 100%;
}

.dividing_line {
  width: 1380 * @px;
  height: 2 * @px;
  background: linear-gradient(270deg, #16164a 0%, #4134a3 50%, #16164a 100%);
  margin: 59 * @px auto 0 * @px;
}
.main_top_title {
  display: flex;
  justify-content: center;
  padding-top: 60 * @px;
  box-sizing: border-box;
}
.login_line {
  display: inline-block;
  width: 22 * @px;
  height: 3 * @px;
  background: #fff;
}

.course_featuers_line {
  background: #fff;
}
.course_name {
  font-size: 30 * @px;
  color: #ffffff;
  font-family: Bold;
  margin: 0 * @px 15 * @px;
}
.course_english_name {
  font-size: 24 * @px;
  color: #666666;
  font-family: Normal;
  margin-top: 10 * @px;
}
.course_container {
  width: 100%;
  height: 100%;

  box-sizing: border-box;
}
.course_content {
  width: 1284 * @px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.course_message {
  width: 306 * @px;
  border-radius: 10 * @px;
  margin: 30 * @px 20 * @px 0 0;
  overflow: hidden;
  position: relative;
}
.course_message:nth-child(4n) {
  margin-right: 0px;
}
.course_message:hover {
  box-shadow: 0 * @px 5 * @px 20 * @px #bcbdff;
  cursor: pointer;
  transition: 0.7s;
  transform: translateY(-5px);
}
.course_img {
  width: 100%;
  height: 220 * @px;
  background: #ffffff;
}
.course_img > img {
  width: 100%;
  height: 100%;
  border-radius: 10 * @px;
}
.xiazhai_btn{
  width: 70px;
  height:35px;
  line-height: 35px;
  color: #fff;
  font-size: 16px;
  background: cornflowerblue;
  border-radius: 6px;
 position: absolute;
 right: 10px;
 top: 10px;
}
.course_bottom {
  background: #182838;
  height: 140px;
  padding: 20 * @px;
  box-sizing: border-box;
  .course_bottom_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.course {
  font-size: 20 * @px;
  font-family: Bold;
  color: #ffffff;
  text-align: left;
}
.course_line {
  width: 569 * @px;
  border: 1px solid #fff;
}
.course_describe {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15 * @px;
}
.people_num {
  font-family: Medium;
  width: 86 * @px;
  height: 36 * @px;
  line-height: 36 * @px;
  border-radius: 5 * @px;
  background: #ff5800;
  font-size: 16 * @px;
  color: #ffffff;
  padding: 0 * @px 5 * @px;
}
.course_lable {
  font-size: 13 * @px;
  line-height: 20 * @px;
  text-align: left;
  color: #ffffff;
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3; overflow: hidden;
}
.last_lable {
  margin-top: 14 * @px;
}
.container_3 {
  width: 100%;
  padding: 60 * @px 0px 48 * @px;
  box-sizing: border-box;
}
.bottom_content {
  .bottom_content_header {
    display: flex;
    justify-content: center;
  }
}
.course_header {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course_features_eng {
  color: #fff;
}
.banner_content {
  width: 1280 * @px;
  margin: 30 * @px auto;
}
.banner_bg {
  width: 700 * @px;
  height: 1100 * @px;
  background: url("../assets/banner_bg.png");
  background-size: 100% 100%;
  margin: auto;
}
.el-carousel {
  width: 100% !important;
  margin: auto;
}
.banner_item {
  width: 100%;
  height: 100%;
  border-radius: 60px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}

.banner_text_content {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item_text {
  width: 292 * @px;
  height: 86 * @px;
  font-size: 30 * @px;
  font-family: Medium;
  color: #ffffff;
  border-radius: 6 * @px;
  line-height: 86 * @px;
  background: rgba(137, 78, 166, 0.8);
  opacity: 0.8;
}
.item_text:nth-child(2) {
  background: rgba(59, 148, 96, 0.8);
}
.item_text:nth-child(3) {
  background: rgba(178, 141, 49, 0.8);
}
.item_text:nth-child(4) {
  background: rgba(167, 54, 88, 0.8);
}
.item_text:hover {
  cursor: pointer;
}
.text_active {
  transition: 0.2s;
  transform: translateY(-5px);
}
.text_active:nth-child(1) {
  background: #c16fee;
  opacity: 1;
}
.text_active:nth-child(2) {
  background: #54d38a;
  opacity: 1;
}
.text_active:nth-child(3) {
  background: #feca46;
  opacity: 1;
}
.text_active:nth-child(4) {
  background: #ef4d7e;
  opacity: 1;
}
.footer {
  width: 100%;
  height: 180px;
  background: #000;
  padding: 30px 0px;
  box-sizing: border-box;
  color: #fff;
  font-family: "Bold";
}
.agreement {
  color: #fff;
  font-size: 14px;
}
.footer_center,
.footer_botton {
  font-size: 10px;
  font-family: "Normal";
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  font-size: 10px;
  color: #fff;
  text-decoration: none;
}
.public_security {
  display: flex;
  align-items: center;
}
.ie_tips {
  position: absolute;
  top: 73px;
  left: 50%;
  font-size: 16px;
  color: yellow;
  transform: translate(-50%, 0px);
  display: flex;
  align-items: center;
  z-index: 2;
  img {
    margin-right: 20px;
  }
}

@media screen and (max-width: 1440px) {
  .go_study {
    width: 166px;
    height: 45px;
    line-height: 45px;
  }
}
@media screen and (max-width: 1366px) {
  .go_study {
    width: 160px;
    height: 44px;
    line-height: 44px;
  }
}
</style>
<style scoped>
.banner_arear .el-carousel__container{
  margin-top: 0px;
  height: 180px !important;
}
</style>
