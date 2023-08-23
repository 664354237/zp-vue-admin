
<template>
  <div class="containers">
    <div class="canvas" ref="canvas"></div>
    <div id="properties-panel"></div>
    <el-button @click="HandelWorkFlow" class="orange workbtn" type="primary">保存</el-button>
  </div>
</template>

<script>

// 引入相关的依赖
import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';
import customTranslate from './customTranslate/customTranslate'
import { getWorkFlowXml,AddWorkFlowXml } from '@/api/workflows/menu2'
export default {

  data() {
    return {
      bpmnModeler: null,
      canvas: null,
      xmlStr: "",
      xmlWorkFlow: "",
    };
  },
  methods: {
    async childWorkflud(){
      let data = await getWorkFlowXml({
        id: this.$store.state.work.workflowId
      })
      this.xmlStr = data.data.workflowXml
      this.init()
    },
    HandelWorkFlow(){
      if(this.xmlWorkFlow.length){
        this.$confirm('此操作将修改该流程图, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.addWorkData()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      }
    },
    async addWorkData(){
      let data = await AddWorkFlowXml({
        id: this.$store.state.work.workflowId,
        workflowXml: this.xmlWorkFlow
      })
    },
    init() {
      // 将汉化包包装成一个模块
      const customTranslateMolude = {
        translate: ['value', customTranslate]
      }
      this.bpmnModeler = new BpmnModeler({ // 建模
        container: this.$refs.canvas,
        propertiesPanel: { // 添加控制板
          parent: '#properties-panel'
        },
        additionalModules: [ // 右边的属性栏
          propertiesProviderModule,
          propertiesPanelModule,
          customTranslateMolude // 汉化模块
        ],
        moddleExtensions: {
          camunda: camundaModdleDescriptor
        }
      });
      this.createNewDiagram();
    },
    async createNewDiagram() { // 将字符串转换成图显示出来
      this.bpmnModeler.importXML(this.xmlStr).then((info) => {
        if (info.error) {
        } else {
          this.success();
        }
      });
    },
    success() {
      this.bpmnModeler.on('commandStack.changed', () => {
        this.getXML().then(xml => {
          this.xmlWorkFlow = xml
        });
      });
    },
    getXML () {
      return new Promise((resolve, reject) => {
        this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
          err ? reject(err) : resolve(xml);
        });
      });
    }
  },
};
</script>

<style lang="scss">
.workbtn{
  position: absolute;
  bottom: 0;
  left: 45%;
}
.containers {
	position: absolute;
	background-color: #ffffff;
	width: 100%;
	height: 100%;
}
.canvas{
	width: 100%;
	height: 100%;
}
#properties-panel {
	position: absolute;
	right: 0;
	top: 0;
	width: 300px;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #f99444;
  }
}
.bjs-powered-by{
  display: none;
}
</style>
