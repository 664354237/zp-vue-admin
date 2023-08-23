<template>
  <div :class="classObj" class="app-wrapper">
    <navbar v-on:HandelSlideData="HandelSlideData" />

    <div class="container-fuild">
      <div class="container-slider" v-if="!isExclusive && oSubMenus.menus.length">
        <div class="showslide">
          <ul>
            <li v-for="(item, index) in oSubMenus.menus" :key="index">
              <router-link :to="item.path">
                <div class="list" :class="item.path === oSubMenus.current ? 'active' : ''">
                  <span class="name">{{ item.name }}</span>
                  <span class="icon">
                    <i class="el-icon-arrow-right"></i>
                  </span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="container-main" :style="mainContainerStyle">
        <app-main />
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

function isMatchRoute(cur, upper) {
  return [cur.path, `${upper?.parent?.path}/${cur.path.replace(/^\/+/, '')}`].includes(upper.path)
}

export default {
  name: 'Layout',
  data() {
    return {
      showSlideChilder: false,
      DataProps: [],
      id: 0
    }
  },
  components: {
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    oSubMenus() {
      const [side, top, sub] = this.$route.matched

      const oSideRoute = this.$router.options.routes.find((v) => isMatchRoute(v, side))

      let menus = []
      let current = ''
      if (top && sub) {
        const oTopMenu = oSideRoute.children.find((v) => isMatchRoute(v, top))
        menus = oTopMenu.children.filter((v) => {
          if (v.meta === undefined) {
            return true
          } else if (v.meta && !v.meta.hidden) {
            return true
          }
          return false
        })

        const oCurrent = menus.find((item) => isMatchRoute(item, sub)) || {}

        current = oCurrent.path || ''
      }

      return {
        current,
        menus
      }
    },

    // 是否为独占，显示侧边
    isExclusive() {
      return !!this.$route.meta.exclusive
    },

    mainContainerStyle() {
      const oStyle = {
        width: '100%'
      }
      if (!this.isExclusive && this.oSubMenus.menus.length) {
        oStyle.width = 'calc(100% - 250px)'
      }
      return oStyle
    },

    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    HandleActive(index) {
      this.id = index
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    },
    HandelSlideData(val) {
      if (!this.isExclusive && val.length) {
        this.DataProps = val.filter((v) => !v.hidden)
        localStorage.setItem('currentTowSubMenu', JSON.stringify(val)) //页面刷新保持二级菜单数据
        // this.$refs.AppMainWidth.style.width = 'calc(100% - 250px)'
        this.id = 0
      } else {
        this.DataProps = []
        localStorage.removeItem('currentTowSubMenu') //页面刷新保持二级菜单数据
        // this.$refs.AppMainWidth.style.width = '100%'
        this.id = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container-fuild {
  display: flex;
  padding: 20px;
  width: 100%;
  height: calc(100% - 92px);
  background-color: #e8e8ed;
  .container-slider {
    width: 230px;
    height: 100%;
    margin-right: 20px;
    border-radius: 15px;
    background-color: #fff;
  }
  .container-main {
    border-radius: 15px;
    height: 100%;
    .app-main {
      height: 100%;
    }
  }
}
.app-wrapper {
  height: 100%;
  width: 100%;
  min-width: 1760px;
  overflow-x: auto;
  overflow-y: auto;
  background-color: #e8e8ed;
}
.showslide {
  width: 100%;
  ul {
    width: 100%;
    padding: 20px;
    li {
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: #19134a;
        font-size: 16px;
        .list {
          display: flex;
          align-content: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 20px;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          .icon {
            display: flex;
            justify-content: center;
            align-content: center;
            width: 20px;
            height: 20px;
            border: 2px solid #f1f1f2;
            border-radius: 50%;
            i {
              font-size: 14px;
              line-height: 17px;
              color: #f1f1f2;
              font-weight: bold;
            }
          }
        }
        .active {
          background-color: #ed8035;
          .name {
            color: #fff;
          }
          .icon {
            border: 2px solid #fff;
            i {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
