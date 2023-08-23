// 输入型组件 【左面板】
export const inputComponents = [{
        type: 'el-input',
        inputType: 'text',
        label: '单行文本',
        value:'',
        tagIcon: 'input',
        placeholder: '请输入',
        style: { width: '100%' },
    },
    {
        type: 'el-input',
        inputType: 'text',
        label: '电话',
        tagIcon: 'input',
        value:'',
        placeholder: '请输入',
    },
    {
        type: 'el-input',
        label: '邮箱',
        value:'',
        tagIcon: 'input',
        placeholder: '请输入',
    },
    {
        label: '多行文本',
        type: 'el-textarea',
        tagIcon: 'input',
        value:'',
        placeholder: '请输入',
        rows: 4,
    },
]