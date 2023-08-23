<template>
    <div class="header">
        <div class="head-logo">
            <img src="@/assets/images/recru/logo.png" alt="">
        </div>
        <div class="head-title">人才招聘</div>
        <div class="menu-item">
            <div class="item" :class="topActive === 1 ? 'active' : ''">
                <router-link to="/recruitviews/home">
                    <span class="name">首页</span>
                </router-link>
            </div>
            <div class="item" :class="topActive === 2 ? 'active' : ''">
                <router-link to="/recruitviews/postdelivery">
                    <span class="name">岗位投递</span>
                </router-link>
            </div>
            <div class="item" :class="topActive === 3 ? 'active' : ''">
                <router-link to="/recruitviews/delivery">
                    <span class="name">我的投递</span>
                </router-link>
            </div>
            <div class="item" :class="topActive === 4 ? 'active' : ''">
                <router-link to="/recruitviews/personal">
                    <span class="name">个人信息</span>
                </router-link>
            </div>
            <div class="item" :class="topActive === 5 ? 'active' : ''">
                <router-link to="/recruitviews/notice">
                    <span class="name">通知公告</span>
                </router-link>
            </div>
        </div>
        <div class="header-right">
            <el-dropdown>
                <div class="head">
                    <img src="@/assets/images/user.jpg" alt="" />
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <span @click="HandleToUserCenter">个人中心</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <span @click="HandleExitLogin">退出登录</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <div class="name">Franklin</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    props:{
        topActive:{
            type: Number,
            default: 1
        }
    },
    data() {
        return {

        }
    },
    methods: {
        HandleToUserCenter(){
            this.$router.push({ path: '/recruitviews/usercenter' })
        },
        HandleExitLogin(){}
    }
}
</script>

<style lang="scss" scope>
.header{
    display: flex;
    align-items: center;
    height: 100px;
    background-color: #19134a;
    padding: 0 30px;
    color: #fff;
    .head-title{
        font-size: 24px;
        margin-left: 30px;
        margin-right: 220px;
    }
    .menu-item{
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: bold;
        .item{
            margin-right: 45px;
        }
        .active{
            color: #ed8035;
        }
        .item:last-child{
            margin-right: 0;
        }
    }
    .header-right{
        display: flex;
        align-items: center;
        margin-left: auto;
        .head{
          margin-left: 40px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .name{
            margin-left: 5px;
            font-weight: bold;
        }
    }
}
</style>