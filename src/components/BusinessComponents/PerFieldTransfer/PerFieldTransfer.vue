<template>
  <el-dialog
    :title="title"
    @close="handleClose"
    :visible.sync="copyVisible"
    append-to-body
  >
    <div :class="$style.container">
      <!-- 主体 start -->
      <div :class="$style.main">
        <!-- 左边面板 start -->
        <div :class="$style.panel">
          <div :class="$style['panel-head']">
            <span :class="$style.txt">待选列&nbsp;({{ notChoices.length }})</span>
            <span
              :class="$style.btn"
              @click="onCheckAllClick"
              >全选</span
            >
          </div>
          <div :class="$style['panel-body']">
            <div :class="$style['panel-list']">
              <div
                v-for="(field, index) in copyfields"
                :key="field.value"
                @click="onFieldItemClick(field, index)"
                :class="[$style['panel-item'], field.checked ? $style['panel-item__active'] : '']"
              >
                <span>{{ field.label }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 左边面板 end -->
        <div :class="$style.buttons">
          <img
            src="@/assets/images/transfer-arrow.png"
            alt
          />
        </div>

        <!-- 右边面板 start -->
        <div :class="$style.panel">
          <div :class="$style['panel-head']">
            <span :class="$style.txt">已选列&nbsp;({{ choices.length }})</span>
            <span
              :class="$style.btn"
              @click="onClearClick"
              >清空</span
            >
          </div>
          <div :class="$style['panel-body']">
            <div :class="$style['panel-list']">
              <div
                v-for="field in choices"
                :key="field.value"
                :class="[$style['panel-item'], $style['panel-item__active']]"
              >
                <span>{{ field.label }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 右边面板 end -->
      </div>
      <!-- 主体 end -->

      <!-- 尾部按钮 start -->
      <div :class="$style.footer">
        <per-button
          @click="onCancelClick"
          :class="$style['w-160']"
          type="warning"
          plain
          >{{cancelText}}</per-button
        >
        <per-button
          @click="onSaveClick"
          :class="$style['w-160']"
          type="warning"
          >{{okText}}</per-button
        >
      </div>
      <!-- 尾部按钮 end -->
    </div>
  </el-dialog>
</template>

<script>
import PerButton from '@/components/BasicComponents/PerButton/PerButton'
import { deepClone } from '@/utils/cvClone'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    expdata: {
      type: Function
    },
    fields: {
      type: Array,
      required: true,
      default: () => []
    },
    title: {
      type: String,
      default: '显示字段设置'
    },
    okText: {
      type: String,
      default: '保存'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {
      copyVisible: false,
      copyfields: []
    }
  },
  watch: {
    visible: {
      handler(val) {
        this.copyVisible = val
      }
    },
    fields: {
      handler(val) {
        if (val) {
          this.copyfields = JSON.parse(JSON.stringify(val)).map((item) => {
            if (item.checked === undefined) {
              item.checked = true
            }
            return item
          })
        }
      },
      immediate: true
    }
  },
  computed: {
    choices() {
      return this.copyfields.filter(({ checked }) => checked)
    },

    notChoices() {
      return this.copyfields.filter(({ checked }) => !checked)
    }
  },
  methods: {
    onCancelClick() {
      this.$emit('update:visible', false)
    },
    onSaveClick() {
      if (!this.choices || !this.choices.length) {
        this.$message.warning('请至少选择一列')
        return
      }
      const fields = [...this.copyfields]

      if (this._props.expdata) {
        this._props.expdata(this.choices)
      }
      this.$emit('change', fields, deepClone(this.choices))
      this.$emit('update:fields', fields)
      this.$emit('update:visible', false)
    },
    onFieldItemClick(field, index) {
      this.copyfields.splice(index, 1, {
        ...field,
        checked: !field.checked
      })
    },
    onCheckAllClick() {
      this.setFieldsCheckStatus(true)
    },
    onClearClick() {
      this.setFieldsCheckStatus(false)
    },

    handleClose() {
      this.$emit('update:visible', false)
    },

    setFieldsCheckStatus(checked) {
      this.copyfields = this.copyfields.map((field) => ({ ...field, checked }))
    }
  },
  components: {
    PerButton
  }
}
</script>

<style lang="scss" module>
.container {
  .main {
    display: flex;

    .panel {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 10px;
      max-height: 620px;
      overflow: hidden;

      &-head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 14px 20px;
        background-color: #f7f1f1;

        .txt {
          flex: 1;
        }

        .btn {
          cursor: pointer;
          color: #ed8035;
        }
      }

      &-body {
        .panel-list {
          padding: 10px 20px;

          .panel-item {
            line-height: 2.5;
            cursor: pointer;

            &__active {
              color: #ed8035;
            }
          }
        }
      }
    }

    .buttons {
      align-self: center;
      padding: 50px;
    }
  }

  .footer {
    padding-top: 20px;
    text-align: center;
  }
  .w-160 {
    width: 160px;
  }
}
</style>
