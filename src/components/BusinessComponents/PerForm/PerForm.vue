<template>
  <div :class="$style.container">
    <el-form
      :rules="rules"
      :model="form"
      ref="form"
      :label-width="labelWidth"
      @keyup.native.prevent
      @submit.native.prevent
    >
      <el-row
        :gutter="20"
        v-for="(fields, index) in rows"
        :key="index"
      >
        <el-col
          v-for="field in fields"
          :span="field.span || 24"
          :key="field.prop"
        >
          <el-form-item
            v-if="!field.enableSlot && canVisible(field.conditions)"
            :class="field.class"
            :label="field.label"
            :prop="field.prop"
          >
            <!-- 输入框 start -->
            <template v-if="field.type === 'input'">
              <el-input
                @input="(val) => handleChange(field.prop, val)"
                v-model="form[field.prop]"
                :disabled="field.disabled || disabled"
                :placeholder="field.placeholder"
              >
                <template v-if="field.additive">
                  <template v-for="(value, key) in field.additive">
                    <span
                      :slot="key"
                      :key="key"
                      >{{ value }}</span
                    >
                  </template>
                </template>
              </el-input>
              <span>{{ field.tip }}</span>
            </template>
            <!-- 输入框 end -->

            <!-- 多行输入框 start -->
            <template v-else-if="field.type === 'textarea'">
              <el-input
                @input="(val) => handleChange(field.prop, val)"
                :disabled="field.disabled || disabled"
                type="textarea"
                :rows="field.rows || 5"
                :maxlength="field.maxlength"
                :show-word-limit="field.showWordLimit"
                resize="none"
                v-model="form[field.prop]"
                :placeholder="field.placeholder"
              />
            </template>
            <!-- 多行输入框 end -->

            <!-- 选择器 start -->
            <template v-else-if="field.type === 'select'">
              <el-select
                @change="(val) => handleChange(field.prop, val)"
                v-model="form[field.prop]"
                :disabled="field.disabled || disabled"
                value-key="value"
                :multiple="field.multiple"
                :placeholder="field.placeholder"
                clearable
              >
                <el-option
                  v-for="opt in field.options"
                  :value="opt.value"
                  :key="opt.value"
                  :label="opt.label"
                />
              </el-select>
            </template>
            <!-- 选择器 end -->

            <!-- 日期选择器 start -->
            <template v-else-if="field.type === 'date'">
              <el-date-picker
                @change="(val) => handleChange(field.prop, val)"
                :disabled="field.disabled || disabled"
                v-model="form[field.prop]"
                :placeholder="field.placeholder"
                value-format="yyyy-MM-dd"
                type="date"
              >
              </el-date-picker>
            </template>
            <!-- 日期选择器 end -->

            <!-- 日期时间选择器 start -->
            <template v-else-if="field.type === 'datetime'">
              <el-date-picker
                @change="(val) => handleChange(field.prop, val)"
                :disabled="field.disabled || disabled"
                v-model="form[field.prop]"
                :placeholder="field.placeholder"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
              >
              </el-date-picker>
            </template>
            <!-- 日期选择器 end -->

            <!-- 多选框 start -->
            <template v-else-if="field.type === 'checkbox'">
              <per-checkbox
                @change="(val) => handleChange(field.prop, val)"
                :disabled="field.disabled || disabled"
                v-model="form[field.prop]"
                :options="field.options"
              />
              <!-- <el-checkbox-group
                @change="(val) => handleChange(field.prop, val)"
                v-model="form[field.prop]"
              >
                <el-checkbox
                  v-for="opt in field.options"
                  :key="opt.value"
                  :label="opt.label"
                  border
                  >{{ opt.label }}</el-checkbox
                >
              </el-checkbox-group> -->
            </template>
            <!-- 多选框 end -->

            <!-- 单选 start -->
            <template v-else-if="field.type === 'radio'">
              <el-radio-group
                @input="(val) => handleChange(field.prop, val)"
                :disabled="field.disabled || disabled"
                v-model="form[field.prop]"
              >
                <el-radio
                  v-for="opt in field.options"
                  :key="opt.value"
                  :label="opt.value"
                  >{{ opt.label }}</el-radio
                >
              </el-radio-group>
            </template>
            <!-- 单选 end -->

            <!-- 单选(按钮) start -->
            <template v-else-if="field.type === 'radiobutton'">
              <el-radio-group
                @input="(val) => handleChange(field.prop, val)"
                v-model="form[field.prop]"
                :disabled="field.disabled || disabled"
              >
                <el-radio-button
                  v-for="opt in field.options"
                  :key="opt.value"
                  :label="opt.value"
                  >{{ opt.label }}</el-radio-button
                >
              </el-radio-group>
            </template>
            <!-- 单选(按钮) end -->

            <!-- 文件上传 start -->
            <template v-else-if="field.type === 'file'">
              <per-upload
                @change="(val) => handleChange(field.prop, val)"
                :data="field.data || {}"
                v-model="form[field.prop]"
                :max="field.max"
                :disabled="field.disabled || disabled"
              />
              <!-- <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleUploadChange"
                :file-list="fileList"
              >
                <el-button
                  style="font-size: 16px"
                  size="small"
                  icon="el-icon-folder-opened"
                  plain
                ></el-button>
              </el-upload> -->
            </template>
            <!-- 文件上传 end -->

            <!-- 自定义树形选择器 start -->
            <template v-else-if="field.type === 'customtree'">
              <per-custom-tree-select
                @change="(val) => handleChange(field.prop, val)"
                v-model="form[field.prop]"
                :multiple="field.multiple"
                :type="field.sType"
                :disabled="field.disabled || disabled"
                :placeholder="field.placeholder"
              />
            </template>
            <!-- 自定义树形选择器 end -->

            <!-- 树形选择器 start -->
            <template v-else-if="field.type === 'tree'">
              <per-tree-select
                @change="(val, obj) => handleChange(field.prop, val, obj)"
                v-model="form[field.prop]"
                :request="field.request"
                :multiple="field.multiple"
                :disabled="field.disabled || disabled"
                :placeholder="field.placeholder"
              />
            </template>
            <!-- 树形选择器 end -->

            <!-- 富文本 start -->
            <template v-else-if="field.type === 'rich'">
              <per-editor
                @change="(val, obj) => handleChange(field.prop, val)"
                :class="$style['leading-none']"
                :disabled="field.disabled || disabled"
                v-model="form[field.prop]"
              />
            </template>
            <!-- 富文本 end -->

            <template v-else> 暂未支持类型:{{ field.type }} </template>
          </el-form-item>
          <slot
            v-if="field.enableSlot"
            :name="field.prop"
            :field="field"
          ></slot>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import PerCheckbox from '@/components/BasicComponents/PerCheckbox/PerCheckbox'

import PerEditor from '@/components/BusinessComponents/PerEditor/PerEditor'
import PerUpload from '@/components/BusinessComponents/PerUpload/PerUpload.vue'
import PerTreeSelect from '@/components/BusinessComponents/PerTreeSelect/PerTreeSelect'
import PerCustomTreeSelect from '@/components/BusinessComponents/PerCustomTreeSelect/PerCustomTreeSelect'

import { isEmptyObject } from '@/utils'
import { deepClone } from '@/utils/cvClone'
const MODEL = 'UpdateModel'
export default {
  components: {
    PerEditor,
    PerUpload,
    PerCheckbox,
    PerTreeSelect,
    PerCustomTreeSelect
  },
  props: {
    fields: {
      type: Array,
      required: true
    },
    values: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: String,
      default: '140px'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'values',
    event: MODEL
  },
  data() {
    return {
      form: {},
      fileList: []
    }
  },
  watch: {
    fields: {
      handler(fields) {
        // const form = {}
        // fields.forEach(({ type, prop, defaultValue }) => {
        //   if (defaultValue) {
        //     form[prop] = defaultValue
        //   } else if (type === 'checkbox') {
        //     form[prop] = form[prop] || []
        //   }
        // })

        this.$nextTick(() => {
          const form = { ...this.getInitParams(), ...this.form }

          this.form = form
          this.$emit(MODEL, form)
        })
      },
      immediate: true
    },
    values: {
      handler(values, oldValues) {
        if (!values || typeof values !== 'object' || values === this.form) return

        const oInitParams = this.getInitParams()

        if (isEmptyObject(values)) {
          // this.form = {}
          this.form = oInitParams
          this.$nextTick(() => {
            this.$refs.form.clearValidate()
          })
          return
        }

        values = deepClone(values)
        // const form = { ...this.form }
        const form = { ...oInitParams }
        for (const key in values) {
          if (Object.hasOwnProperty.call(values, key)) {
            const value = values[key]
            if (this.fields.some(({ prop }) => prop === key)) {
              form[key] = value
            }
          }
        }
        this.form = form
        this.$emit(MODEL, this.form)
      },
      immediate: true
    }
  },

  computed: {
    rules() {
      const rules = {}
      this.fields.forEach((field) => {
        if (field.rules && field.rules.length) {
          rules[field.prop] = field.rules
        }
      })
      return rules
    },
    rows() {
      const rows = []
      let row = []
      let iRowSpan = 0
      this.fields.forEach((field) => {
        const span = field.span || 24
        if (iRowSpan + span <= 24) {
          row.push(field)
          iRowSpan += span
        } else {
          rows.push(row)
          row = [field]
          iRowSpan = span
        }
      })

      if (row.length > 0) {
        rows.push(row)
      }

      return rows
    }
  },

  methods: {
    getInitParams() {
      const form = {}
      const defaultArrayTtpes = ['checkbox', 'file']
      this.fields.forEach(({ type, prop, defaultValue }) => {
        if (defaultValue) {
          form[prop] = defaultValue
        } else if (defaultArrayTtpes.includes(type)) {
          form[prop] = form[prop] || []
        }
      })
      return form
    },

    canVisible(conditions) {
      if (!conditions || !conditions.length) return true
      const form = this.form
      const isVisible = conditions.every((cond) => form[cond.key] === cond.equal)

      return isVisible
    },
    async validate() {
      await this.$refs.form.validate()
      const form = {}

      this.fields.forEach(field => {
        if(!field.exclude) {
          form[field.prop] = this.form[field.prop] || ''
        }
      })
      // return deepClone(this.form)
      return form
    },
    getData() {
      // TODO:在获取数据之前需要再验证
      // if (!this.validate()) return null
      const form = deepClone(this.form)
      // console.log("🚀 ~ file: PerForm.vue:374 ~ getData ~ form:", form)

      // this.form = {}
      return form
    },

    handleChange(key, value, object) {
      this.$emit('change', {
        key,
        value,
        object
      })
    }
  }
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  :global(.el-date-editor.el-input) {
    width: 100%;
  }
  :global(.el-form-item__label) {
    line-height: 40px;
  }
  :global(.el-select) {
    width: 100%;
  }

  :global(.el-checkbox-group) {
    line-height: 1;
  }
}
.leading-none {
  line-height: 1;
}
</style>
