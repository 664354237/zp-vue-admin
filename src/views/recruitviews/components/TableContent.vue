<template>
  <div class="MessContent">
    <!-- 标题 start -->
    <div class="common-title"><span>{{ AllTitle }}</span></div>
    <!-- 标题 end -->

    <!-- 表格 start -->
    <div class="TableContent">
      <!-- 表格头部搜索 start -->
      <div class="HeaderSearch">
        <slot name="search-headswitch"></slot>
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
          <el-table-column
            :prop="column.prop"
            :label="column.label"
            :width="column.width"
            :key="index2">
            <template slot-scope="scope">
              <slot
                v-if="column.enableSlot"
                :name="column.prop"
                :row="scope.row"
              ></slot>
              <template v-else>{{ scope.row[column.prop] }}</template>
            </template>
          </el-table-column>
        </template>
      </el-table>

      <!-- Table end -->
    </div>
    <!-- 表格 end -->
  </div>
</template>
<script>
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
};
</script>
<style scoped lang="scss">
.MessContent {
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  height: 100%;
  .common-title{
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 20px;
  }
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
