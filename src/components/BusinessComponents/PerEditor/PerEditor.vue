<template>
  <div :class="$style.container">
    <!-- <div id="editor-container"></div> -->
    <div :class="[$style.border, $style['overflow-hidden'], $style['rounded-xs'], $style['z-9999']]">
      <Toolbar
        :class="$style['border-bottom']"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        :class="$style['editor-container']"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
        @onChange="onChange"
        @onBlur="onBlur"
      />
    </div>
  </div>
</template>

<script>
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

const MODEL = 'UpdateModel'
export default {
  components: { Editor, Toolbar },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: {
        excludeKeys: ['uploadVideo']
      },
      editorConfig: {
        MENU_CONF: {
          uploadImage: {
            base64LimitSize: 1 * 1024 * 1024
            // customUpload: this.uploadImage
          } 
        }
      },
      mode: 'default' // or 'simple'
    }
  },
  watch: {
    placeholder(str) {
      this.editorConfig = {
        ...this.editorConfig,
        placeholder: str
      }
    },
    value: {
      handler(html = '') {
        this.html = html
      },
      immediate: true
    }
  },
  model: {
    event: MODEL,
    prop: 'value'
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    onChange() {
      this.$emit(MODEL, this.html)
      this.$emit('change', this.html)
    },
    onBlur() {
      
    },
    beforeDestroy() {
      const editor = this.editor
      if (editor == null) return
      editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    uploadImage(file, insert) {
      // 创建FileReader实例
      const reader = new FileReader()

      reader.onload = (e) => {
        // 图片加载完毕后回调
        const image = new Image()
        image.src = e.target.result

        image.onload = () => {
          // 创建canvas元素
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          // 设置canvas尺寸与图片尺寸保持一致
          canvas.width = image.width
          canvas.height = image.height

          // 在canvas上绘制图片
          context.drawImage(image, 0, 0, image.width, image.height)

          // 压缩图片并转换为base64格式
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8)

          // 调用insert方法将压缩后的图片插入到编辑器中
          insert(compressedDataUrl)
        }
      }

      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
}
.editor-container {
  height: 500px;
  overflow: hidden;
  :global(.w-e-text-container [data-slate-editor]) {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }
  }
}
.border {
  border: 1px solid #dcdfe6;
}
.border-bottom {
  border-bottom: 1px solid #dcdfe6;
}
.rounded-xs {
  border-radius: 4px;
}
.overflow-hidden {
  overflow: hidden;
}
.z-9999 {
  z-index: 9999;
}
</style>
