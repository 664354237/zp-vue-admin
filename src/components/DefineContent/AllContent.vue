<template>
  <div class="MessContent">
    <!-- 标题 start -->
    <div class="common-title"><span>{{ AllTitle }}</span></div>
    <!-- 标题 end -->

    <!-- 表格 start -->
    <div class="TableContent">
      <slot name="search-headswitch"></slot>
      <!-- 表格头部搜索 start -->
      <div class="HeaderSearch">
        <div class="srarch" v-for="(item, index) in SrarchFields" :key="index">
          <div class="item" v-if="item.type === 'el-input'">
            <div class="name" v-if="item.name">{{ item.name }}</div>
            <el-input :style="{ width: item.width }" :placeholder="item.placeholder" v-model="item.defaultValue"></el-input>
            <el-button class="sraBtn orange" type="primary" @click="search">搜索</el-button>
          </div>
          <div class="item" v-if="item.type === 'el-select'">
            <div class="name" v-if="item.name">{{ item.name }}</div>
            <el-select :style="{ width: item.width }" v-model="item.defaultValue" :placeholder="item.placeholder">
              <el-option v-for="(item1, index1) in item.option" :key="index1" :label="item1.label" :value="item1.value"></el-option>
            </el-select>
          </div>
        </div>
        <slot name="search-suffix"></slot>
      </div>
      <!-- 表格头部搜索 end -->

      <!-- Table start -->
      <el-table
        @selection-change="handleSelectionChange"
        class="customer-table"
        stripe
        :data="tableData"
        row-key="id"
        default-expand-all
        :border="false"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column v-if="selection" type="selection" width="55"></el-table-column>
        <template v-for="(column, index2) in table.columns">
          <el-table-column :prop="column.prop" :label="column.label" :width="column.width" :key="index2">
            <template slot-scope="scope">
              <slot v-if="column.enableSlot" :name="column.prop" :row="scope.row"></slot>
              <template v-else>{{ scope.row[column.prop] }}</template>
            </template>
          </el-table-column>
        </template>
      </el-table>

      <paging :total="condition.total" :pageSize="condition.size" :search="search" :enableDelete="selection" @delete="handleBatchDelete"></paging>

      <!-- Table end -->
    </div>
    <!-- 表格 end -->
  </div>
</template>
<script>
import paging from "@/views/components/paging.vue";
export default {
  props: {
    selection: { type: Boolean, default: true },
    AllTitle: {
      type: String,
      default: () => {
        return "";
      },
    },
    condition: {
      type: Object,
      default: () => {
        return {
          current: 1,
          size: 10,
          total: 0,
        };
      },
    },
    search: {
      type: Function,
    },
    SrarchFields: {
      type: Array,
      default: () => {
        return [];
      },
    },
    table: {
      type: Object,
      default: () => {
        return {
          border: false,
          columns: [],
        };
      },
    },
    tableData: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      selectedItems: [],
    };
  },
  methods: {
    handleBatchDelete() {
      this.$emit("delete", JSON.parse(JSON.stringify(this.selectedItems)));
    },
    handleSelectionChange(rows) {
      this.selectedItems = rows;
    },
  },
  components: { paging },
};
</script>
<style scoped lang="scss">
.MessContent {
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  height: 100%;
  .TableContent {
    .customer-table{
      max-height: 85%;
      overflow: auto;
    }
    height: calc(100% - 50px);
    .HeaderSearch {
      height: 60px;
      background-color: #f7f7f7;
      border-radius: 10px;
      display: flex;
      padding: 0 20px;
      align-items: center;
      .srarch {
        margin-right: 10px;
        .item {
          display: flex;
          align-items: center;
          .name {
            margin-right: 8px;
            font-size: 14px;
            color: #19134a;
          }
          .sraBtn {
            margin-left: 10px;
          }
          .orange {
            background-color: #f99444;
            border-color: #f99444;
          }
        }
      }
      .AddButton {
        margin-left: auto;
      }
      .srarch:last-child {
        margin-right: 0;
      }
    }
  }
}
// 表格底部全部删除按钮与 ---  分页
.tab-footer{
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
