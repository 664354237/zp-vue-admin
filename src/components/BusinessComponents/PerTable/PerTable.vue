<template>
  <div
    :class="[$style.container, inside ? $style.inside : '']"
    v-loading="loading"
  >
    <!-- 标题 start -->
    <div
      v-if="title"
      :class="$style.title"
    >
      <span
        :class="$style.txt"
        v-text="title"
      ></span>
      <slot name="title-add" />
    </div>
    <!-- 标题 end -->

    <!-- 主体 start -->
    <div :class="$style['main-container']">
      <div :class="$style.aside">
        <slot name="aside" />
      </div>
      <div :class="$style.main">
        <!-- 搜索表单 start -->
        <div
          v-if="enableSearch"
          :class="$style.search"
        >
          <div :class="$style['form-container']">
            <slot name="search-perfix" />
            <el-form
              v-if="fields.length"
              inline
              :model="params"
              @keyup.native.prevent
              @submit.native.prevent
            >
              <template v-for="field in fields">
                <el-form-item
                  :label="field.label"
                  :key="field.name"
                >
                  <!-- input start -->
                  <template v-if="isInput(field.type)">
                    <el-input
                      :style="{ width: field.width }"
                      @keyup.enter="onInputEnter(field)"
                      :placeholder="field.placeholder"
                      v-model="params[field.name]"
                    >
                    </el-input>
                  </template>
                  <!-- input end -->

                  <!-- select start -->
                  <template v-else-if="isSelect(field.type)">
                    <el-select
                      v-model="params[field.name]"
                      value-key="value"
                      clearable
                      :class="$style.select"
                      :placeholder="field.placeholder"
                    >
                      <el-option
                        v-for="item in field.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </template>
                  <!-- select end -->

                  <!-- date start -->
                  <template v-else-if="isDate(field.type)">
                    <el-date-picker
                      clearable
                      v-model="params[field.name]"
                      :type="field.dateType"
                      :value-format="valueFormat(field.dateType)"
                      :placeholder="field.placeholder"
                    >
                    </el-date-picker>
                  </template>
                  <!-- date end -->
                </el-form-item>
              </template>
              <el-form-item>
                <per-button
                  @click="onSearchClick"
                  type="warning"
                  >搜索</per-button
                >
                <slot name="search-suffix" />
              </el-form-item>
            </el-form>
          </div>

          <div :class="$style.append">
            <slot
              name="search-append"
              :selected="selected"
            />
          </div>
        </div>
        <!-- 搜索表单区域 end -->

        <!-- table start -->
        <el-table
          :data="data"
          @selection-change="handleSelectionChange"
          @submit.prevent
          :border="table.border"
          height="250"
          :class="[$style.table, 'customer-table']"
          stripe
        >
          <el-table-column
            v-if="table.selection || table.selection === undefined"
            type="selection"
            width="55"
          ></el-table-column>

          <template v-for="column in columns">
            <el-table-column
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
              :key="column.prop"
            >
              <template slot-scope="scope">
                <slot
                  v-if="column.enableSlot"
                  :name="column.prop"
                  :row="scope.row"
                  :index="scope.$index"
                ></slot>
                <template v-else>
                  <!-- Select type start -->
                  <template v-if="column.type === 'Select'">
                    <el-select
                      v-model="scope.row[`${column.prop}_model`]"
                      placeholder="请选择"
                    >
                      <el-option
                        v-for="opt in scope.row[column.prop]"
                        :value="opt[column.vKey]"
                        :label="opt[column.tKey]"
                        :key="opt[column.vKey]"
                      />
                    </el-select>
                  </template>
                  <!-- Select type start -->

                  <!-- Subset type start -->
                  <template v-else-if="column.type === 'Subset'">
                    <template v-for="opt in scope.row[column.parent]">
                      <template v-if="opt[column.vKey] === scope.row[`${column.parent}_model`]">
                        {{ (column.before && column.before(opt, column)) || opt[column.prop] }}
                      </template>
                    </template>
                  </template>
                  <!-- Subset type start -->

                  <!-- Default start -->
                  <template v-else>{{ scope.row[column.prop] }}</template>
                  <!-- Default end -->
                </template>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <!-- table end -->

        <!-- footer start -->
        <div :class="$style.footer">
          <slot name="footer" :selected="selected" :total="total" :size="params.size">
            <per-table-pagination
              hide-on-single-page
              @current-change="handleCurrentChange"
              :total="total"
              :page-size="params.size"
              background
              layout="prev, pager, next"
            >
              <template slot="perfix">
                <per-button
                  v-if="!table.disableBulkDelete && (table.selection || table.selection === undefined)"
                  @click="onDeleteClick"
                  :disabled="!selected.length"
                  size="small"
                  icon="el-icon-delete"
                  type="danger"
                  >删除</per-button
                >
              </template>
            </per-table-pagination>
          </slot>
        </div>
        <!-- footer end -->
      </div>
    </div>
    <!-- 主体 end -->
  </div>
</template>

<script>
import PerTablePagination from '@/components/BusinessComponents/PerTable/PerTablePagination'
import PerButton from '@/components/BasicComponents/PerButton/PerButton'
import { deepClone } from '@/utils/cvClone'

const isPromise = (e) => e instanceof Promise
const isFunction = (e) => typeof e === 'function'

export default {
  props: {
    /**
     * 是否启用请求方法 - 默认为启用
     */
    enableRequest: {
      type: Boolean,
      default: true
    },

    /**
     * 请求方法选项
     * 请求之前传递的为请求参数
     * 请求之后传递的为响应数据
     * interface Option {
     *  event: function,
     *  before?: function,
     *  after?: function,
     * }
     */
    request: {
      type: Object
      // required: true,
    },

    /* 标题 */
    title: {
      type: String
    },

    /**
     * 搜索表单字段
     * type FieldType = "input" | "select"
     *
     * type Keyup = "enter"
     *
     * type SelectOption = {
     *     prop: string,
     *     label: string
     * }
     *
     * inrerface FieldOption {
     *    type: FieldType,
     *    name: string,
     *    label?: string,
     *    placeholder?: string,
     *    keyup?: Keyup,
     *    defaultValue: string | number,
     *    options?: SelectOption
     * }
     */
    fields: {
      type: Array,
      default: () => {
        return []
      }
    },

    /**
     * table字段与配置
     */
    table: {
      type: Object,
      default: () => {
        return {
          disableBulkDelete: false,
          border: false,
          selection: true,
          columns: [],
          data: []
        }
      }
    },

    /**
     * 隐藏列的关键字
     */
    columnHiddenKey: {
      type: String,
      default: 'hidden'
    },

    /**
     * 是否在表格里面 - 主要是把padding置空
     */
    inside: {
      type: Boolean,
      default: false
    },

    /**
     * 启用搜索
     */
    enableSearch: {
      type: Boolean,
      default: true
    }

    /**
     * table数据
     */
    // data: {
    //     type: Array,
    //     required: true,
    //     default: []
    // }
  },
  data() {
    return {
      // 是否加载中
      loading: false,
      // 总数据数
      total: 0,
      // table data数据
      data: [],

      // 已选择数据
      selected: [],

      // 请求接口参数
      params: {
        current: 1,
        size: 20
      }
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    columns() {
      const key = this.columnHiddenKey
      return this.table.columns.filter((item) => item[key] === undefined || item[key])
    }
  },
  watch: {
    'table.data': {
      handler(data) {
        data = data || []
        if (!this.enableRequest) {
          this.data = data
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    valueFormat(type) {
      if (type === 'year') {
        return 'yyyy'
      }
      return 'yyyy-MM-dd'
    },
    onDeleteClick() {
      this.$emit('delete', deepClone(this.selected))
    },
    getSelected() {
      return deepClone(this.selected)
    },
    reload() {
      this.params = {
        current: 1,
        size: 20
      }
      this.fetch()
    },

    onSearchClick() {
      this.fetch()
    },

    /**
     * 请求数据
     */
    async fetch(payload = {}) {
      if (!this.enableRequest) return
      const { event: request, before, after } = this.request

      if (isFunction(request) || isPromise(request)) {
        try {
          if (this.loading) return
          this.loading = true
          let params = {
            ...this.params,
            ...payload
          }

          if (isFunction(before)) {
            params = await before(params)
          }
          const { data } = await request(params)
          let { total, records } = data
          if (isFunction(after)) {
            records = await after(records)
          }
          this.params = {
            ...this.params,
            current: data.current
          }
          this.total = total
          this.data = records
          this.initSelectValue()
        } catch (error) {
          // console.error('---PreTable---', error);
          throw error
        } finally {
          setTimeout(() => {
            this.loading = false
          }, 300)
        }
      }
    },

    handleCurrentChange(current) {
      this.params.current = current
      this.fetch()
    },

    /**
     * 输入框enter事件
     * 触发enter事件，传递当前字段信息与form的值
     */
    onInputEnter(field) {
      if (field.keyup !== 'enter') return
      this.$emit('enter', {
        field,
        form: this.form
      })
    },

    handleSelectionChange(selected) {
      this.selected = selected
    },

    initSelectValue() {
      const columns = this.table.columns

      const isNeedToInit = columns.some(({ type }) => type === 'Select')

      if (isNeedToInit) {
        const cols = columns.reduce((arr, current) => {
          if (current.type === 'Select') {
            arr.push(current)
          }
          return arr
        }, [])
        this.data.forEach((item) => {
          cols.forEach((col) => {
            const arr = item[col.prop]
            if (Array.isArray(arr) && arr.length) {
              item[`${col.prop}_model`] = arr[0][col.vKey]
            }
          })
        })
      }
    },

    isInput(type) {
      return type === 'input'
    },
    isSelect(type) {
      return type === 'select'
    },
    isDate(type) {
      return type === 'date'
    }
  },
  components: {
    PerButton,
    PerTablePagination
  }
}
</script>

<style lang="scss" module>
@import '@/styles/mixin.scss';

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
  overflow: hidden;
  // box-sizing: border-box;
  // overflow: hidden;
  &.inside {
    padding: 0;
  }
  .title {
    flex: 0 0 auto;
    margin-bottom: 20px;

    .txt {
      font-size: 18px;
      color: #ed8035;
      font-weight: bold;
    }
  }

  .main-container {
    display: flex;
    flex: 1;
    width: 100%;
    overflow: hidden;

    .aside {
      flex: 0 0 auto;
    }

    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .search {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
        background-color: #f7f7f7;
        padding: 8px 20px;
        border-radius: 8px;

        .form-container {
          flex: 1;
        }

        .append {
          flex: 0 0 auto;
        }

        :global(.el-form-item) {
          margin-bottom: 0;
        }
      }

      .table {
        flex: 1;
        width: 100%;
        height: 100%;

        :global(.el-checkbox__input.is-checked .el-checkbox__inner),
        :global(.el-checkbox__input.is-indeterminate .el-checkbox__inner) {
          background-color: #f99444;
          border-color: #f99444;
        }

        :global(.el-checkbox__inner:hover) {
          border-color: #f99444;
        }

        :global(.el-table__body-wrapper) {
          &::-webkit-scrollbar-track-piece {
            background: #f4ebe6;
            border-radius: 4px;
          }

          &::-webkit-scrollbar {
            width: 6px;
          }

          &::-webkit-scrollbar-thumb {
            background: #ed8035;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .footer {
    flex: 0 0 auto;
  }
}
</style>
