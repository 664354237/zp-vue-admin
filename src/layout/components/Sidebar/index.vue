<template>
  <div class="showslide">
    <ul>
      <li v-for="(item,index) in DataProps" :key="index">
        <router-link :to='item.path'>
          <div class="list" :class="id===index?'active':''" @click="HandleActive(index)">
            <span class="name">{{item.name}}</span>
            <span class="icon">
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    DataProps: {
      type: Array,
      default: [],
    }
  },
  data() {
    return {
      id: 0,
    }
  },
  methods:{
    HandleActive(index){
      this.id = index
    }
  }
}
</script>
<style lang="scss" scoped>
.showslide{
  width: 100%;
  ul{
    width: 100%;
    padding: 20px;
    li{
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
      a{
        display: block;
        width: 100%;
        height: 100%;
        color: #19134a;
        font-size: 16px;
        .list{
          display: flex;
          align-content: center;
          justify-content: space-between;
          cursor: pointer;
          padding: 20px;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          .icon{
            display: flex;
            justify-content: center;
            align-content: center;
            width: 20px;
            height: 20px;
            border: 2px solid #f1f1f2;
            border-radius: 50%;
            i{
              font-size: 14px;
              line-height: 17px;
              color: #f1f1f2;
              font-weight: bold;
            }
          }
        }
        .active{
          background-color: #ed8035;
          .name{
            color: #fff;
          }
          .icon{
            border: 2px solid #fff;
            i{
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
