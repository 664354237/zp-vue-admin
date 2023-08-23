// module文件夹下的所有文件批量引入
const requireAll = requireContext => requireContext.keys().map(requireContext)


const btns = require.context('@/views/btns', true, /\.js$/)

export const moduleList = [...requireAll(btns).map(module => module.default)]
export const moduleMapper = moduleList.reduce((total, current) => {
  const { code, ...other } = current
  if (code) {
    total[code] = { ...other }
  } else {
    console.error(`${JSON.stringify(current)}没有定义code参数`)
  }
  return total
}, {})
