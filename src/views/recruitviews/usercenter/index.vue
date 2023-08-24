<template>
  <div class="home-container">
    <recruitviews-header :topActive="topActive"></recruitviews-header>
    <div class="home-content">
      <div class="content">
        <!-- 标题 start -->
        <div class="recru-title"><span>个人中心</span></div>
        <!-- 标题 end -->

        <div class="personal">
          <div class="item-input">
            <span class="name">姓名：</span>
            <div class="input">
              <el-input placeholder="请输入姓名" v-model="name"></el-input>
            </div>
          </div>
          <div class="item-input">
            <span class="name">手机号：</span>
            <div class="input">
              <el-input placeholder="请输入手机号" v-model="phone"></el-input>
            </div>
          </div>
          <div class="item-input">
            <span class="name">邮箱：</span>
            <div class="input">
              <el-input placeholder="请输入邮箱" v-model="email"></el-input>
            </div>
          </div>
          <div class="item-input">
            <span class="name">密码：</span>
            <div class="input">
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="password"
              ></el-input>
            </div>
          </div>
          <div class="item-input">
            <span class="name">确认密码：</span>
            <div class="input">
              <el-input
                placeholder="请确认密码"
                show-password
                v-model="password1"
              ></el-input>
            </div>
          </div>
          <div class="item-input">
            <span class="name"></span>
            <div class="input" @click="HandleSaveChanges">
              <el-button type="primary">保存修改</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import { GetSaveChanges, GetUserProfile } from '@/api/recruitviews/login/index.js'
export default {
  name: 'personal',
  data() {
    return {
      topActive: 6,
      name: '',
      phone: '',
      email: '',
      password: '',
      password1: '',
    }
  },
  created() {
    this.HandleUserProfile()
  },
  methods: {
    async HandleUserProfile() {
      let res = await GetUserProfile()

      if (res.code === 200) {

        localStorage.setItem('userId', res.data.id);
        this.name = res.data.name
        this.phone = res.data.phone
        this.email = res.data.email
        this.password = res.data.password
        this.password1 = res.data.password
      }
    },
    HandleSaveChanges() {
      if (this.name == '') {
        this.$message.error('请填写您的姓名');
        return false
      }
      const phoneNumberRegex = /^1[3456789]\d{9}$/; // 手机号正则表达式
      if (phoneNumberRegex.test(this.phone)) {
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (regex.test(this.email)) {
          // 触发接口
          this.HandleSave()
        } else {
          this.$message.error('邮箱格式不正确');
          return false
        }
      } else {
        this.$message.error('手机号格式不正确');
        return false
      }
    },
    async HandleSave() {
      if (this.password === this.password1 && this.password != '') {
        let res = await GetSaveChanges({
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password
        })
        if (res.code === 200) {
          this.$message({ message: '修改成功', type: 'success' });
        }
      } else {
        this.$message({ message: '两次密码输入不一致', type: 'error' });
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
    .content {
      height: 100%;
      padding: 25px;
      background-color: #fff;
      border-radius: 20px;
      .recru-title {
        font-size: 24px;
        color: #333333;
        padding-bottom: 15px;
        font-weight: bold;
        border-bottom: 1px solid #e1e1e1;
        margin-bottom: 65px;
      }
      .personal {
        width: 660px;
        margin: 0 auto;
        .item-input {
          display: flex;
          align-items: center;
          margin-bottom: 28px;
          width: 100%;
          .name {
            display: block;
            width: 90px;
            margin-right: 5px;
            font-size: 16px;
            color: #333333;
            font-weight: bold;
            text-align: right;
          }
          .input {
            width: calc(100% - 95px);
            .el-button {
              width: 100%;
              background-color: #19134a;
              border: 0px;
            }
          }
        }
      }
    }
  }
}
</style>