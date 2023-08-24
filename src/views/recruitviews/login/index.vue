<template>
  <div class="login-container">
    <div class="form-login">
      <div class="login-title">
        <span>广东技术师范大学人才招聘系统</span>
      </div>
      <div class="login-box">
        <div class="btn-item">
          <div
            class="item"
            :class="is_active === 1 ? 'active' : ''"
            @click="PhoneClick(1)"
          >
            手机登录
          </div>
          <div
            class="item"
            :class="is_active === 2 ? 'active' : ''"
            @click="EmailClick(2)"
          >
            邮箱登录
          </div>
        </div>
        <div class="item-input">
          <div class="item">
            <div class="name">手机号：</div>
            <div class="input">
              <el-input
                v-model="nameValue"
                placeholder="请输入手机号"
              ></el-input>
            </div>
          </div>
          <div class="item">
            <div class="name">密码：</div>
            <div class="input">
              <el-input
                v-model="passwordValue"
                show-password
                placeholder="请输入密码"
              ></el-input>
            </div>
          </div>
          <div class="item">
            <div class="name">短信验证码：</div>
            <div class="input-code">
              <el-input
                v-model="codeValue"
                placeholder="请输入验证码"
                disabled
              ></el-input>
              <el-button
                :disabled="sending"
                :class="sending === false ? 'orange' : 'grey'"
                type="primary"
                @click="HandleCodeSend"
                >{{ codeSendValue }}</el-button
              >
            </div>
          </div>
          <div class="btn">
            <div class="login" @click="HandleLogin">立即登录</div>
            <div class="register" @click="HandleRooter">
              未注册账号？点击立即注册
            </div>
          </div>
        </div>
      </div>
      <div class="login-info1">
        广东技术师范大学 版权所有 ©2016 Guangdong Polytechinc Normal University
      </div>
      <div class="login-info2">粤ICP备05008838 粤ICP备10076626号</div>
    </div>
  </div>
</template>

<script>
import { GetsendSmsCode, GetUserLogin, GetUserProfile } from '@/api/recruitviews/login/index.js'
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    return {
      nameValue: '',
      passwordValue: '',
      codeValue: '',
      is_active: 1,
      sending: false,
      codeSendValue: '发送短信验证码',
      countdown: 60,
    }
  },
  methods: {
    PhoneClick(index) {
      this.is_active = index
    },
    EmailClick(index) {
      this.is_active = index
    },
    async HandleLogin() {
      // 点击提交登录信息
      let res = await GetUserLogin({ username: this.nameValue, password: this.passwordValue, })
      if (res.code === 200) {
        setToken(res.data.token)
        this.$router.push({ path: '/recruitviews/home' })
      }
      let user = await GetUserProfile()
      console.log(user);
      if (res.code === 200) {
        localStorage.setItem('userId', user.id);
      }
    },
    HandleRooter() {
      this.$router.push({ path: '/register' })
    },
    HandleCodeSend() {
      // 防止重复点击
      if (this.sending) {
        return;
      }
      // 点击发送验证码 --- 先触发手机号验证
      this.checkPhoneNumber()
    },
    // 手机号验证
    async checkPhoneNumber() {
      const phoneNumberRegex = /^1[3456789]\d{9}$/; // 手机号正则表达式

      if (phoneNumberRegex.test(this.nameValue)) {
        // 手机号格式正确
        let res = await GetsendSmsCode({ phone: this.nameValue })
        if (res.code === 200) {
          this.$message({ message: '正在发送验证码中....', type: 'success' });
        }
        // 暂时写死验证码
        this.codeValue = res.data;
        // 进行发送验证码等操作
        this.sending = true; // 设置按钮状态为发送中
        this.startCountdown(); // 开始倒计时
      } else {
        // 手机号格式不正确
        // 提示用户手机号格式不正确
        this.$message.error('手机号格式不正确');
      }
    },
    // 倒计时
    startCountdown() {
      let timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
          this.codeSendValue = '正在发送验证码 ' + this.countdown;
        } else {
          // 倒计时结束
          this.sending = false; // 恢复按钮状态
          this.countdown = 60; // 重置倒计时秒数
          this.codeSendValue = '发送短信验证码';
          clearInterval(timer); // 清除定时器
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
.login-container {
  min-height: 100%;
  min-width: 1600px;
  width: 100%;
  background: url("/images/login-banner.jpg") no-repeat;
  background-size: 100% 100%;
  background-position: center;
  overflow: auto;
  .form-login {
    width: 900px;
    margin: 0 auto;
    .login-title {
      padding-top: 60px;
      padding-bottom: 40px;
      span {
        display: block;
        text-align: center;
        font-size: 40px;
        color: #ffffff;
      }
    }
    .login-box {
      background-color: #fff;
      border-radius: 15px;
      overflow: hidden;
      .btn-item {
        display: flex;
        align-items: center;
        .item {
          width: calc(100% / 2);
          height: 80px;
          line-height: 80px;
          text-align: center;
          background-color: #f4f4f4;
          color: #333333;
          font-size: 24px;
          cursor: pointer;
        }
        .active {
          background-color: #ed8035;
          color: #ffffff;
        }
      }
      .item-input {
        padding: 50px 85px 85px;
        .item {
          margin-top: 25px;
          .name {
            color: #333333;
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: bold;
          }
          .input {
            width: 100%;
            .el-input {
              width: 100%;
            }
          }
          .el-input__inner {
            height: 50px;
          }
          .input-code {
            width: 100%;
            position: relative;
            .input {
              width: 100%;
              .el-input {
                width: 100%;
              }
            }
            .el-button {
              position: absolute;
              right: 0;
              top: 0;
              width: 150px;
              height: 50px;
              color: #fff;
              border: 0;
              border-radius: 0;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            }
            .orange {
              background-color: #ed8035;
            }
            .grey {
              background-color: #c5c5c5;
            }
          }
        }
        .item:first-child {
          margin-top: 0;
        }
      }
      .btn {
        margin-top: 65px;
        .login {
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          width: 100%;
          height: 50px;
          color: #fff;
          background-color: #19134a;
          border-radius: 8px;
          cursor: pointer;
        }
        .login:hover {
          transition: 0.6s;
          opacity: 0.7;
        }
        .register {
          margin-top: 25px;
          text-align: center;
          line-height: 50px;
          font-size: 16px;
          width: 100%;
          height: 50px;
          color: #fff;
          background-color: #ed8035;
          border-radius: 8px;
          cursor: pointer;
        }
        .register:hover {
          transition: 0.6s;
          opacity: 0.7;
        }
      }
    }
    .login-info1 {
      color: #ffffff;
      margin-top: 40px;
      text-align: center;
    }
    .login-info2 {
      color: #ffffff;
      text-align: center;
      margin-top: 5px;
    }
  }
}
</style>