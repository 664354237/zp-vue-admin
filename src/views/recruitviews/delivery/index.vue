<template>
  <div class="home-container">
    <recruitviews-header :topActive="topActive"></recruitviews-header>
    <div class="home-content">
      <table-content :AllTitle="AllTitle" :tableData="tableData" :table="table">
        <template slot="search-headswitch">
          <div class="search-flex-item">
            <div class="search-item">
              <div class="name">状态：</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in selectSex"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="search-item">
              <div class="name">投递时间：</div>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in selectSex"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </template>

        <template slot="operate" slot-scope="{ row }">
          <el-button
            icon="el-icon-user"
            class="btnblue"
            size="mini"
            type="primary"
            @click="handleDiagram(row)"
            >查看进度</el-button
          >
        </template>
      </table-content>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import TableContent from '../components/TableContent.vue'
import { GetDataPageData } from '@/api/recruitviews/delivery/index.js'
const COLUMNS = [
  { prop: 'title', label: '岗位' },
  { prop: 'applyTime', label: '投递时间' },
  { prop: 'status', label: '状态' },
  { prop: 'operate', label: '操作', enableSlot: true, width: 180 }
]
export default {
  name: 'delivery',
  data() {
    return {
      search: {
        current: 1,
        size: 10,
        userId: localStorage.getItem("userId")
      },
      AllTitle: '我的投递',
      tableData: [],
      table: {
        columns: COLUMNS
      },
      topActive: 3,
      value: '',
      selectSex: [
        {
          id: 1,
          value: "男",
          label: "男"
        },
        {
          id: 2,
          value: "女",
          label: "女"
        }
      ],
    }
  },
  created() {
    this.HandleDataList()
  },
  methods: {
    async HandleDataList() {
      let res = await GetDataPageData(this.search)
      if (res.code === 200) {
        this.tableData = res.data.records
      }
    },
    handleDiagram() { }
  },
  components: {
    RecruitviewsHeader,
    TableContent
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
    .search-flex-item {
      display: flex;
      align-items: center;
      .search-item {
        display: flex;
        align-items: center;
        margin-right: 25px;
        .name {
          font-weight: bold;
        }
      }
    }
  }
}
</style>