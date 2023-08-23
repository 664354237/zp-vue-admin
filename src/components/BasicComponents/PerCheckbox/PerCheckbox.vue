<template>
  <div :class="$style.checkbox">
    <per-button
      v-for="opt in selectOptions"
      :disabled="disabled"
      :plain="!opt.checked"
      @click.stop="onItemClick(opt)"
      :type="opt.checked ? 'warning' : 'info'"
      :key="opt.value"
      >{{ opt.label }}</per-button
    >
  </div>
</template>

<script>
import PerButton from '@/components/BasicComponents/PerButton/PerButton'

const MODEL = 'UpdateModel'

export default {
  components: { PerButton },
  props: {
    value: {
      type: Array,
      default: () => []
    },

    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    event: MODEL,
    prop: 'value'
  },
  computed: {
    selectOptions() {
      let options = this.options.map((opt) => {
        return { ...opt, checked: this.value.includes(opt.value) }
      })
      return options
    }
  },

  data() {
    return {}
  },
  methods: {
    onItemClick(item) {
      let values = [...this.value]
      const iValueIndex = values.findIndex((val) => val === item.value)
      if (~iValueIndex) {
        values.splice(iValueIndex, 1)
      } else {
        values.push(item.value)
      }
      this.$emit(MODEL, values)
      this.$emit('change', values)
    }
  }
}
</script>

<style lang="scss" module>
.checkbox {
  width: 100%;
}
</style>
