<template>
  <div class="home-container">
    <recruitviews-header :topActive="topActive"></recruitviews-header>
    <div class="home-content">
      <div class="home-notes-box">
        <div class="notes-top">
          <div class="no-item">
            <div class="download">
              <i class="el-icon-download"></i>
            </div>
            <div class="btn">下载简历模板</div>
          </div>
          <div class="iconfont">
            <span class="ic">········</span>
            <!-- <span class="icon">
              <i class="el-icon-arrow-right"></i>
            </span> -->
            <span class="ic">········</span>
          </div>
          <div class="no-item">
            <div class="download">
              <i class="el-icon-download"></i>
            </div>

            <el-upload
              ref="upload"
              action="#"
              :show-file-list="false"
              :http-request="handleFileUpload"
            >
              <el-button size="small">
                <div class="btn2">上传简历</div>
              </el-button>
            </el-upload>
          </div>
          <!-- <div class="iconfont">
            <span class="ic">········</span>
            <span class="icon">
              <i class="el-icon-arrow-right"></i>
            </span>
            <span class="ic">········</span>
          </div> -->
          <!-- <div class="no-item">
                        <div class="download">
                            <i class="el-icon-download"></i>
                        </div>
                        <div class="btn3">在线填表单</div>
                    </div> -->
        </div>
        <notes-info></notes-info>
      </div>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import NotesInfo from './components/info.vue'
export default {
  name: 'delivery',
  data() {
    return {
      topActive: 2,
    }
  },
  methods: {
    handleFileUpload() { }
  },
  components: {
    RecruitviewsHeader,
    NotesInfo
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
    .home-notes-box {
      height: 100%;
      background-color: #fff;
      padding: 20px;
      border-radius: 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 8px;
        background-color: #f2f2f2;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #f99444;
      }
      .notes-top {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 50px;
        .no-item {
          .download {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #f3f3f3;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            i {
              font-size: 50px;
              color: #b0afb5;
            }
          }
          .btn {
            margin-top: 28px;
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #19134a;
            color: #fff;
            font-size: 16px;
            border-radius: 40px;
          }
          .btn2 {
            margin-top: 28px;
            width: 120px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #ed8035;
            color: #fff;
            font-size: 16px;
            border-radius: 40px;
          }
          .btn3 {
            width: 120px;
            height: 40px;
            line-height: 40px;
            margin-top: 28px;
            color: #333333;
            font-size: 16px;
            text-align: center;
          }
        }
        .iconfont {
          margin-top: 30px;
          display: flex;
          .ic {
            font-size: 25px;
            color: #d3d2dd;
          }
          .icon {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f0e5dd;
            border-radius: 50%;
            margin: 0 5px;
            margin-top: 3px;
            i {
              font-size: 26px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>