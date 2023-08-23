import { getOneBycode, getListById, getListByIds } from '@/api/dictionary'

const MyMixin = {
  data() {
    return {
      Dictionary: {},
    };
  },
  methods: {
    fetchData() {
      var Dictionary = {}
      getOneBycode({ code: "getIdBycode" }).then(res => {
        let id = res.data.id
        getListById({ id: id }).then(parent => {
          let ids = parent.data.children.map(item => item.content)
          getListByIds({ ids: ids.join(",") }).then(item => {
            for (let index = 0; index < item.data.length; index++) {
              let d = item.data[index]
              Dictionary[d.code] = d

            }
            // item.data.forEach(d => {
            //   Dictionary[d.code] = d
            // })
          })

        })
      })
      return Dictionary
    },
  },
  created() {
    // 在组件创建时调用 fetchData 方法，并将返回值存储在组件数据中
    this.Dictionary = this.fetchData();
  },
};


export default MyMixin
