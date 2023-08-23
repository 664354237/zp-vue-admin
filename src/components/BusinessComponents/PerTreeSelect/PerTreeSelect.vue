<template>
  <el-select
    @clear="handleClear"
    @remove-tag="handleRemove"
    ref="select"
    :class="$style.select"
    :placeholder="placeholder"
    :value="currentValue"
    :disabled="disabled"
    multiple
    clearable
  >
    <el-option
      :value="selectValue"
      :class="$style.option"
      disabled
      v-loading="loading"
    >
    <!-- @check-change="handleCheckChange" -->
      <el-tree
        @check="handleCheck"
        :data="data"
        :props="props"
        ref="tree"
        :node-key="nodeKey"
        show-checkbox
        check-strictly
        check-on-click-node
      >
        <div slot-scope="{ data }">
          <svg-icon :icon-class="data.type"></svg-icon>
          <span>{{ data.name }}</span>
        </div>
      </el-tree>
    </el-option>
    <el-option v-for="v in selectValue" :key="v.id" style="display: none" :value="v[nodeKey]" :label="v[props.label]">
    </el-option>
  </el-select>
</template>

<script>
import { to, isPromise, isFunction, isString } from '@/utils'
const MODEL_EVENT = 'UpdateModel'
export default {
  props: {
    /**
     * 请求方法选项
     * params: 请求参数
     * before: 请求之前传递的为请求参数
     * after: 请求之后传递的为响应数据
     * interface Option {
     *  event: function,
     *  params?: any,
     *  before?: function,
     *  after?: function,
     * }
     */
    request: {
      type: Object
    },
    value: {
      type: [String, Array],
      default: () => {
        return ''
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    props: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'name'
      })
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    }
  },

  model: {
    prop: 'value',
    event: MODEL_EVENT
  },

  data() {
    return {
      data: [],
      selectValue: [],
      currentValue: [],
      loading: false
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    value: {
      handler(val) {
        if (isString(val) && val === this.currentValue) return
        const values = isString(val) ? (val && [val]) || [] : val
        this.currentValue = values
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(values)
        })
        this.initSelectValue()
      },
      immediate: true
    }
  },
  methods: {
    initSelectValue() {
      this.$nextTick(() => {
        this.selectValue = this.currentValue.map((v) => this.getNode(v).data)
      })
    },
    getNode(value) {
      const node = this.$refs.tree.getNode(value)
      return node || { data: {} }
    },

    async fetch() {
      const { event: request, before, after, params = '' } = this.request
      if (isFunction(request) || isPromise(request)) {
        try {
          if (this.loading) return
          this.loading = true

          if (isFunction(before)) {
            params = await before(params)
          }
          const result = await request(params)
          let { data } = result
          if (isFunction(after)) {
            data = await after(data)
          }

          this.data = data
          this.initSelectValue()
        } catch (error) {
          throw error
        } finally {
          setTimeout(() => {
            this.loading = false
          }, 300)
        }
      }

      // request
      //   const [err, result] = await to(getInsTreehasUser())
      //   if (err) throw err
      //   const tree = this.format(result.data)
      //   this.data = tree
      //   this.initSelectValue()
    },

    /**
     * 格式化参数
     */
    format(data, result = []) {
      if (!Array.isArray(data)) return result

      const targetType = this.type || 'user'

      for (let i = 0; i < data.length; i++) {
        const { id, name, type, children } = data[i]
        const disabled = type === targetType
        const item = { id, name, type, disabled }
        result.push(item)

        if (children && children.length) {
          item.children = []
          this.format(children, item.children)
        }
      }

      return result
    },

    handleClear() {
      this.currentValue = []
      this.selectValue = []
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys([])
      })
      this.trigger()
    },
    // TODO: 多选时候，需要精准删除
    handleRemove(item) {
      const index = this.currentValue.findIndex((v) => v === item.id)
      this.currentValue.splice(index, 1)
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.currentValue)
      })
      this.trigger()
    },

    handleCheck(node, tree) {
      const isChecked = this.currentValue.some((v) => v === node[this.nodeKey])
      if (this.multiple) {
        this.currentValue = tree.checkedKeys
      } else {
        const value = isChecked ? [] : [node[this.nodeKey]]
        this.$refs.tree.setCheckedKeys(value)
        this.currentValue = value
      }
      this.initSelectValue()
      
      this.trigger(node)
    },
    trigger(obj) {
      let value = this.currentValue
      if (!this.multiple) {
        value = this.currentValue[0] || ''
      }
      this.$emit(MODEL_EVENT, value)
      this.$emit('change', value, obj)
    }
  }
}
</script>

<style lang="scss" module>
.select {
  width: 100%;
}
.option {
  min-height: 200px;
  padding: 0 !important;
  margin: 0;
  overflow: auto;
  cursor: default !important;
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
</style>
