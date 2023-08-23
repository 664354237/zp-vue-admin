<template>
  <div class="container-home">
    <div class="header">
      <div class="header-left">
        <div class="header-title">
          <span>招聘管理系统</span>
        </div>
        <div class="header-muen" @click="HandelCommonMeun">
          <img src="@/assets/images/muen.png" alt="" />
          <span class="name">{{ name }}</span>
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
      <div class="meun-childer">
        <ul>
          <li v-for="(item, index) in oTopMenus.menus" :key="index" :class="oTopMenus.current === item.path ? 'active' : ''">
            <router-link :to="item.fullPath">
              <div class="img">
                <img :src="item.meta.icon" alt="" />
              </div>
              <span class="name">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <div class="head-message">
          <img src="@/assets/images/message.png" alt="" />
          <span class="number">1</span>
        </div>
        <el-dropdown>
          <div class="head">
            <img src="@/assets/images/user.jpg" alt="" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <span>用户: Admin</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span @click="HandleExitLogin">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-drawer direction="ltr" size="390px" :visible.sync="dialogTableVisible" :with-header="false">
      <div>
        <div class="commonmeun">
          <template v-for="(item, index) in RooterList">
            <div class="common-li" :key="index" v-if="!item.hidden && item.meta" @click="HandelRooter(item)">
              <router-link :to="item.path">
                <div class="img">
                  <img :src="item.meta.icon" alt="" />
                </div>
                <span class="name">{{ item.name }}</span>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

function isMatchRoute(cur, upper) {
  return [cur.path, `${upper?.parent?.path}/${cur.path.replace(/^\/+/, '')}`].includes(upper.path)
}

export default {
  data() {
    return {
      RooterList: [],
      dialogTableVisible: false,
      currentSubMenu: [],
      name: '首页'
    }
  },
  components: {
    Breadcrumb,
    Hamburger
  },
  created() {
    this.RooterList = this.$router.options.routes

    const storedSubMenu = localStorage.getItem('currentSubMenu')
    if (storedSubMenu) {
      // this.currentSubMenu = JSON.parse(storedSubMenu);
      const menus = JSON.parse(storedSubMenu)
      this.currentSubMenu = menus.filter((v) => !v.hidden)
    }
  },
  computed: {
    oTopMenus() {
      const [side, top] = this.$route.matched

      const oSideRoute = this.$router.options.routes.find((v) => isMatchRoute(v, side))
      if (!oSideRoute) {
        return []
      }

      let menus = []
      let current = ''

      if (top) {
        const oTopRoute = oSideRoute.children.find((v) => isMatchRoute(v, top))
        menus = oSideRoute.children.filter((v) => !v.meta.hidden)
        menus = menus.map(item => {
          if(item.path.startsWith('/')) {
            item.fullPath = item.path
          } else {
            item.fullPath = [oSideRoute.path, item.path].join('/')
          }
          return item
        })

        current = oTopRoute.path
      }

      return {
        current,
        menus
      }
    }
  },
  methods: {
    HandelCommonMeun() {
      this.dialogTableVisible = !this.dialogTableVisible
    },
    HandelRooter(item) {
      this.currentSubMenu = item.children || []
      localStorage.setItem('currentSubMenu', JSON.stringify(this.currentSubMenu)) //页面刷新保持二级菜单数据
      if (item.children[0].children != undefined) {
        this.$emit('HandelSlideData', item.children[0].children)
        localStorage.setItem('currentTowSubMenu', JSON.stringify(item.children[0].children))
      } else {
        this.$emit('HandelSlideData', [])
        localStorage.removeItem('currentTowSubMenu')
      }
      this.dialogTableVisible = false
    },
    HandelRooter2(item) {
      if (item.children && item.ischildren !== false) {
        this.$emit('HandelSlideData', item.children)
        localStorage.setItem('currentTowSubMenu', JSON.stringify(item.children))
      } else {
        this.$emit('HandelSlideData', [])
        localStorage.removeItem('currentTowSubMenu')
      }
    },
    async HandleExitLogin() {
      localStorage.removeItem('currentSubMenu')
      localStorage.removeItem('currentTowSubMenu')
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        cursor: pointer;
        .user-avatar {
          margin-right: 5px;
        }

        .el-icon-caret-bottom {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
