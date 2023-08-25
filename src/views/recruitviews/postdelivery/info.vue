<template>
  <div class="home-container">
    <recruitviews-header :topActive="topActive"></recruitviews-header>
    <div class="home-content">
      <div class="home-info-box">
        <div class="info-title">
          <span>{{ info.position }}</span>
          <router-link to="/recruitviews/postdelivery">
            <p class="backroot">返回列表</p></router-link
          >
        </div>
        <p class="info-time">发布于 {{ info.releaseTime }}</p>
        <div class="position">
          <div class="posi-title">职位信息</div>

          <p class="li">职位福利:{{ info.positionBenefits }}</p>
          <p class="li">聘用方式:{{ info.employmentMethod }}</p>
          <p class="li">报名截止时间:{{ info.registrationDeadline }}</p>
          <p class="li">说明:{{ info.remark }}</p>
        </div>
        <div class="responsi">
          <div class="res-item">
            <div class="resp-title">岗位职责</div>
            <p class="li">{{ info.responsibility }}</p>
          </div>
          <div class="res-item">
            <div class="resp-title">任职要求</div>
            <p class="li">基本要求:{{ info.positionDes }}</p>
            <p class="li">学历要求:{{ info.educationalRequirements }}</p>
            <p class="li">学位要求:{{ info.degreeRequirements }}</p>
            <p class="li">
              年龄范围:{{ info.degreeRequirements }}-{{
                info.degreeRequirements
              }}
            </p>
            <p class="li"></p>
          </div>
        </div>
        <div class="btnclick">
          <router-link
            :to="'/recruitviews/notes/index/' + this.$route.params.id"
          >
            <span>申请职位</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue';
import { GetDataTableInfoList } from '@/api/recruitviews/postdelivery/index.js';
export default {
  name: 'delivery',
  data() {
    return {
      info: {},
      topActive: 2,
    }
  },
  created() {
    this.HandleDataTableInfoList(this.$route.params.id)
  },
  methods: {
    async HandleDataTableInfoList(TableId) {
      let res = await GetDataTableInfoList({ id: TableId })
      if (res.code === 200) {
        this.info = res.data
      }
    }
  },
  components: {
    RecruitviewsHeader,
  }
}
</script>

<style lang="scss" scope>
.home-container {
  height: 100%;
  width: 100%;
  min-width: 1600px;
  overflow: auto;
  .home-content {
    padding: 25px;
    height: calc(100% - 100px);
    background-color: #f0eff6;
    .home-info-box {
      height: 100%;
      background-color: #fff;
      padding: 20px;
      border-radius: 20px;
      .btnclick {
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #19134a;
        font-size: 16px;
        color: #ffffff;
        border-radius: 40px;
        margin: 0 auto;
        cursor: pointer;
      }
      .btnclick:hover {
        transition: 0.6s;
        opacity: 0.6;
      }
      .position {
        .posi-title {
          font-size: 18px;
          color: #333333;
          font-weight: bold;
          margin-bottom: 15px;
          margin-top: 35px;
        }
      }
      .responsi {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-bottom: 50px;
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 50px;
        .res-item {
          width: calc(100% / 2 - 5px);
          margin-right: 10px;
          .resp-title {
            font-size: 18px;
            color: #333333;
            font-weight: bold;
            margin-top: 40px;
            margin-bottom: 5px;
          }
          .li {
            font-size: 16px;
            line-height: 35px;
            color: #999999;
          }
        }
        .res-item:last-child {
          margin-right: 0;
        }
      }
      .info-time {
        color: #999999;
        font-size: 16px;
        margin-top: 15px;
      }
      .info-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 1px solid #e1e1e1;
        span {
          font-size: 24px;
          color: #333333;
        }
        .backroot {
          width: 120px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          color: #ffffff;
          border-radius: 40px;
          background-color: #ed8035;
          cursor: pointer;
        }
        .backroot:hover {
          transition: 0.6s;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>