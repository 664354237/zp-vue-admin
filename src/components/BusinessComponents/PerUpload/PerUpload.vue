<template>
  <div :class="$style.container">
    <!-- 头像模式 start -->
    <div
      v-if="type === 'avatar'"
      :class="$style.avatar"
    >
      <div
        v-if="avatar.isUploading"
        :class="$style.loading"
      >
        <i class="el-icon-loading" />
        <p>上传中</p>
      </div>

      <img
        :src="avatar.url ? avatar.url : defaultAvatar"
        :class="[!avatar.url ? $style.default : '']"
      />
      <el-upload
        v-if="files.length < max"
        :class="$style.upload"
        ref="upload"
        action="#"
        :disabled="disabled"
        :show-file-list="false"
        :http-request="handleFileUpload"
      >
        <per-button
          size="small"
          type="warning"
          :disabled="disabled"
          >选择文件</per-button
        >
      </el-upload>
    </div>
    <!-- 头像模式 end -->

    <!-- 文件模式 start -->
    <template v-else-if="type === 'file'">
      <!-- v-if="files.length < max" -->
      <el-upload
        
        :class="$style.upload"
        ref="upload"
        action="#"
        :show-file-list="false"
        :disabled="disabled"
        :http-request="handleFileUpload"
      >
        <slot :uploading="uploading">
          <el-button
            style="font-size: 16px"
            size="small"
            :disabled="disabled"
            icon="el-icon-folder-opened"
            plain
          ></el-button>
        </slot>
      </el-upload>

      <ul
        :class="$style.files"
        v-if="showFileList"
      >
        <li
          :class="$style.item"
          :key="file.name"
          v-for="file in files"
        >
          <template v-if="file.isUploading">
            <i class="el-icon-loading" />
          </template>
          <template v-else>
            <i class="el-icon-document" />
          </template>
          <span>{{ file.name }}</span>
          <i
            v-if="!file.isUploading && !disabled"
            @click="onRemoveClick(file, index)"
            class="el-icon-close"
          />
        </li>
      </ul>
    </template>
    <!-- 文件模式 end -->

    <template v-else> 未知上传类型: {{ type }} </template>
  </div>
</template>

<script>
import PerButton from '@/components/BasicComponents/PerButton/PerButton.vue'

import { upload } from '@/api/common'
import { to, uuid, isEmptyObject, isFunction, isPromise } from '@/utils'

const MODEL = 'UpdateModel'
export default {
  components: {
    PerButton
  },
  props: {
    request: {
      type: Object,
      default: () => {
        return {
          event: upload,
          before: (params) => params,
          after: (data) => data
        }
      }
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    },
    // 最多可上传文件数量
    max: {
      type: Number,
      default: 5
    },
    type: {
      type: String,
      default: 'file' // file || avatar
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showFileList: {
      type: Boolean,
      default: true
    }
  },
  model: {
    prop: 'value',
    event: MODEL
  },
  data() {
    return {
      defaultAvatar: require('@/assets/images/default-head.png'),
      files: []
    }
  },
  computed: {
    avatar() {
      let result = {}
      if (this.type === 'avatar' && this.files.length) {
        result = this.files[0]
      }
      return result
    },
    uploading() {
      
      return this.files.some(v => v.isUploading)
    }
  },
  watch: {
    value: {
      handler(value) {
        if (!value) return
        this.files = Array.isArray(value) ? value : [value]
      },
      immediate: true
    }
  },
  methods: {
    createFormData() {
      const form = new FormData()
      const data = this.data
      if (data && !isEmptyObject(data)) {
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            const value = data[key]
            form.append(key, value)
          }
        }
      }
      return form
    },
    getRenderBase64(file) {
      return new Promise((resolve, reject) => {
        try {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = function (e) {
            resolve(e.target.result)
          }
          reader.onerror = function (error) {
            reject(error)
          }
        } catch (error) {
          reject(error)
        }
      })
    },

    onRemoveClick(file, index) {
      this.files.splice(index, 1)
      this.$emit(MODEL, this.files)
      this.$emit('change', this.files)
    },

    async handleFileUpload(file) {
      const { event: request, before, after } = this.request
      if (!isFunction(request) && !isPromise(request)) {
        throw new Error('不是可用上传函数')
      }

      let params = this.createFormData()
      params.append('file', file.file)

      const children = {
        type: 'file',
        id: uuid(),
        name: file.file.name,
        isUploading: true
      }
      if (this.type === 'avatar') {
        const [error, result] = await to(this.getRenderBase64(file.file))
        if (!error) {
          children.url = result
        }
        this.files = [children]
      } else {
        this.files.push(children)
      }

      if (isFunction(before)) {
        params = await before(params)
      }

      let [err, result] = await to(request(params))
      const index = this.files.findIndex((v) => v.id === children.id)
      if (err) {
        this.$emit('failed', params)
        this.files.splice(index, 1)
        return
      }
      if (isFunction(after)) {
        result = await after(result)
      }
      setTimeout(() => {
        this.files.splice(index, 1, {
          ...this.files[index],
          type: 'file',
          id: result.data,
          name: file.file.name,
          isUploading: false
        })
        this.$emit('success', params)
        this.$emit(MODEL, this.files)
        this.$emit('change', this.files)
      }, 500)
    }
  }
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
}
.upload {
  :global(.el-upload) {
    text-align: left;
  }
}

.avatar {
  position: relative;
  width: 190px;
  height: 100%;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  text-align: center;
  overflow: hidden;
  .loading {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.8);
    color: #fff;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
    }
    p {
      margin-top: 6px;
    }
  }
  img {
    width: 100%;
    height: 140px;
    margin-bottom: 10px;
    object-fit: cover;
  }
  img.default {
    object-fit: contain;
  }
}
.files {
  width: 300px;
  margin-top: 6px;
  overflow: hidden;
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px;
    line-height: 1.2;
    border-radius: 4px;
    &:hover {
      background-color: #f5f7fa;
      cursor: default;
    }
    i {
      color: #999;
      padding: 2px;
      font-size: 16px;
      transition: all 0.2s;
      &:global(.el-icon-close) {
        border-radius: 50%;
        &:hover {
          cursor: pointer;
          color: #fff;
          background-color: rgb(255, 93, 93);
        }
      }
    }

    span {
      flex: 1;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
.px-10 {
  padding-left: 10px;
  padding-right: 10px;
}
.mr-10 {
  margin-right: 10px;
}
.text-left {
  text-align: left;
}
</style>
