<template>
  <div class="home-container">
    <recruitviews-header :topActive="topActive"></recruitviews-header>
    <div class="home-content">
      <table-content :AllTitle="AllTitle" :tableData="tableData" :table="table">
        <template slot="search-headswitch">
          <div class="search-flex-item">
            <div class="search-item">
              <div class="name">聘用方式：</div>
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
              <div class="name">岗位类别：</div>
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
              <div class="name">学历要求：</div>
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

        <template slot="status" slot-scope="{ row }">
          <el-button
            icon="el-icon-user"
            class="btnblue"
            size="mini"
            type="primary"
            @click="handleDiagram(row)"
            >查看更多</el-button
          >
        </template>
      </table-content>
    </div>
  </div>
</template>

<script>
import RecruitviewsHeader from '../components/header.vue'
import TableContent from '../components/TableContent.vue'
import { GetDataTableList } from '@/api/recruitviews/postdelivery/index.js'
const COLUMNS = [
  { prop: 'position', label: '岗位' },
  { prop: 'department', label: '学院/单位' },
  { prop: 'educationalRequirements', label: '学历要求' },
  { prop: 'maxAgeRange', label: '年龄范围' },
  { prop: 'recruitingNum', label: '人数' },
  { prop: 'employmentMethod', label: '聘用方式' },
  { prop: 'releaseTime', label: '截止时间' },
  { prop: 'status', label: '查看更多', enableSlot: true, width: 180 }
]
export default {
  name: 'delivery',
  data() {
    return {
      AllTitle: '岗位投递',
      tableData: [],
      table: {
        columns: COLUMNS
      },
      topActive: 2,
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
    this.HandleDataTableList()
  },
  methods: {
    async HandleDataTableList() {
      let res = await GetDataTableList({ current: "1", size: "10" })
      if (res.code) {
        this.tableData = res.data.records
      }
    },
    handleDiagram(row) {
      this.$router.push('/recruitviews/postdelivery/' + row.id)
    }
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