<template>
  <el-select
    @clear="handleClear"
    @remove-tag="handleRemove"
    ref="select"
    :class="$style.select"
    :placeholder="placeholder"
    :value="selectValue"
    :disabled="disabled"
    multiple
    clearable
  >
    <el-option
      :value="currentValue"
      :class="$style.option"
      disabled
    >
      <el-tree
        @check-change="handleCheckChange"
        @check="handleCheck"
        :data="data"
        :props="props"
        ref="tree"
        node-key="id"
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
  </el-select>
</template>

<script>
import { getInsTreehasUser } from '@/api/staff/menu1'
import { to } from '@/utils'
const MODEL_EVENT = 'UpdateModel'
export default {
  props: {
    value: {
      type: [String, Array],
      default: ''
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
    type: {
      type: String,
      default: 'user' // user | org
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
      currentValue: []
    }
  },
  created() {
    this.fetch()
  },
  watch: {
    value: {
      handler(val) {
        if (val === this.currentValue) return
        let keys = []
        if(typeof val === 'string') {
          keys = [val]
        } else if(Array.isArray(val)) {
          keys = val;
        }

        this.currentValue = val
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(keys)
          this.initSelectValue()
        })
      },
      immediate: true
    }
  },
  methods: {
    initSelectValue() {
      this.$nextTick(() => {
        const node = this.$refs.tree.getNode(
          this.currentValue
        )
        this.selectValue = (node && [node.data.name]) || []
      })
    },

    async fetch() {
      const [err, result] = await to(getInsTreehasUser())
      if (err) throw err
      const tree = this.format(result.data)
      this.data = tree
      this.initSelectValue()
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
      this.currentValue = ''
      this.selectValue = []
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys([])
      })
      this.trigger()
    },
    // TODO: 多选时候，需要精准删除
    handleRemove() {
      this.currentValue = ''
      this.selectValue = []
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys([])
      })
      this.trigger()
    },

    handleCheckChange(data, checked, indeterminate) {
      if (data.id !== this.currentValue && !checked) return

      this.currentValue = checked ? data.id : ''
      this.selectValue = checked ? [data.name] : []
      if (checked) {
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys([data.id])
        })
      }
      this.trigger()
    },

    handleCheck(node, tree) {
      //   this.$refs.tree.setCheckedKeys([]);
      //   this.$refs.tree.setCheckedKeys(node.checkedKeys);
      // console.log("handleCheck", node, tree);
    },
    trigger() {
      this.$emit(MODEL_EVENT, this.currentValue)
      this.$emit('change', this.currentValue)
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
