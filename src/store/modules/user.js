// import { login, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

// const getDefaultState = () => {
//   return {
//     token: getToken(),
//     name: ''
//   }
// }

// const state = getDefaultState()

// const mutations = {
//   RESET_STATE: (state) => {
//     Object.assign(state, getDefaultState())
//   },
//   SET_TOKEN: (state, token) => {
//     state.token = token
//   },
//   SET_NAME: (state, name) => {
//     state.name = name
//   },
// }

// const actions = {
//   // user login 账号登陆
//   login({ commit, dispatch
//   }, userInfo) {
//     const { username, password } = userInfo
//     return new Promise((resolve, reject) => {
//       login({ username: username.trim(), password: password }).then(response => {
//         const { data } = response
//         commit('SET_TOKEN', data.token)
//         setToken(data.token)
//         dispatch('getInfo').then(() => {
//           resolve()
//         }).catch(error => {
//           reject(error)
//         })
//         // dispatch('permission/generateRoutes', data, { root: true }).then((accessRoutes) => {
//         //   router.addRoutes(accessRoutes)
//         // })

//         resolve()
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // get user info 获取用户权限信息
//   getInfo({ commit, state }) {
//     return new Promise((resolve, reject) => {
//       getInfo().then(response => {
//         const { data } = response

//         if (!data) {
//           return reject('验证失败，请重新登录.')
//         }

//         const { name } = data
//         console.log(data.id);
//         localStorage.setItem('userId', data.id);
//         commit('SET_NAME', name)
//         resolve(data)
//       }).catch(error => {
//         reject(error)
//       })
//     })
//   },

//   // user logout 账号退出
//   logout({ commit, state }) {
//     removeToken() // must remove  token  first
//     resetRouter()
//     commit('RESET_STATE')
//   },

//   // remove token
//   resetToken({ commit }) {
//     return new Promise(resolve => {
//       removeToken() // must remove  token  first
//       commit('RESET_STATE')
//     })
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

