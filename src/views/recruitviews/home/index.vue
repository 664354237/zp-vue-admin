<template>
  <div class="home-container">
    <recruitviews-header :topActive='topActive'></recruitviews-header>
    <div class="home-content">
      <div class="flex-home-top">
        <div class="item">
          <home-swiper></home-swiper>
        </div>
        <div class="item">
          <div class="item-title">
            <p class="title">岗位投递</p>
          </div>
          <div class="it-flex-icon">
            <div class="it-icon">
              <div class="img">
                <img src="@/assets/images/recru/home-icon1.png" alt="">
              </div>
              <p class="name">学者和骨干岗位</p>
            </div>
            <div class="it-icon">
              <div class="img">
                <img src="@/assets/images/recru/home-icon2.png" alt="">
              </div>
              <p class="name">青年人才岗位</p>
            </div>
            <div class="it-icon">
              <div class="img">
                <img src="@/assets/images/recru/home-icon3.png" alt="">
              </div>
              <p class="name">其他</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-home-bottom">
        <div class="item">
          <div class="item-title">
            <p class="title">公告</p>
            <a href="#" class="more">查看更多+</a>
          </div>
          <notice-announ :notice="notice"></notice-announ>
        </div>
        <div class="item">
          <div class="item-title">
            <p class="title">通知</p>
            <a href="#" class="more">查看更多+</a>
          </div>
          <notice-announ :notice="notice"></notice-announ>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import HomeSwiper from '../components/HomeSwiper.vue'
import NoticeAnnoun from '../components/NoticeAnnoun.vue'
export default {
  name: 'home',
  data() {
    return {
      topActive: 1,
      notice:[]
    }
  },
  created(){
    this.notice = [
      {
        title: '学校校友会召开第一届第九次理事会会议',
        time: '2023.06.27'
      },
      {
        title: '学校校友会召开第一届第九次理事会会议',
        time: '2023.06.27'
      },
      {
        title: '学校校友会召开第一届第九次理事会会议',
        time: '2023.06.27'
      }
    ]
  },
  methods: {
  
  },
  components:{
    RecruitviewsHeader,
    HomeSwiper,
    NoticeAnnoun
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  width: 100%;
  min-width: 1600px;
  overflow: auto;
  .home-content{
    padding: 25px;
    height: calc(100% - 100px);
    background-color: #f0eff6;
    .flex-home-top{
      display: flex;
      align-items: center;
      height: calc(100%/2 - 5px);
      margin-bottom: 10px;
    }
    .flex-home-bottom{
      display: flex;
      align-items: center;
      height: calc(100%/2 - 5px);
    }
    .item{
      width: calc(100%/2 - 5px);
      padding: 25px;
      height: 100%;
      background-color: #fff;
      border-radius: 20px;
      .it-flex-icon{
        height: calc(100% - 47px);
        display: flex;
        align-items: center;
        justify-content: space-around;
        .it-icon{
          .img{
            width: 150px;
            height: 150px;
            background-color: #f4f4f4;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            img{
              display: block;
              max-height: 90%;
              max-width: 90%;
            }
          }
          .name{
            text-align: center;
          }
        }
      }
      .item-title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e1e1e1;
        .title{
          font-size: 24px;
          color: #333333;
          font-weight: bold;
          padding-bottom: 5px;
          border-bottom: 5px solid #ed8035;
        }
        .more{
          font-size: 14px;
          color: #e97e34;
        }
      }
    }
    .item:first-child{
      margin-right: 10px;
    }
  }
}
</style>