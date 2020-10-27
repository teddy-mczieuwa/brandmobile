import UserService from '@/services/UserService'
const db = require('../../services/data.json')
const state = {

    user: window.localStorage.getItem('user'),
    subUsers: JSON.parse( window.localStorage.getItem('sub_user')),
    token: window.localStorage.getItem('token')
}
const getters = {
    getUserInfo(state) {
        return state.user
    },
    getSubUsers(state) {
        return state.subUsers
    }
}
const mutations = {
    ADD_USER(state, payload) {
        state.user = payload
    },
    SET_USER(state, payload) {
        state.user = {...state.user,...payload}
    },
    SET_SUB_USER(state, payload) {
        state.subUsers = payload
    },
    SET_TOKEN(state, payload) {
        state.token = payload
    },
    ADD_SUB_USER(state, payload) {
        state.subUsers.push(payload)
    }
    
}
const actions = {
    fetchUser({ commit }) {
        // const { data: { data, token } } = await UserService.getUser()

        const { data: { data, token } } = db
        commit('SET_SUB_USER', data.sub_users)
        window.localStorage.setItem('sub_users', JSON.stringify(data.sub_users))

        delete data.sub_users
        commit('ADD_USER', data)
        window.localStorage.setItem('user', JSON.stringify(data))

        commit('SET_TOKEN', token)
        window.localStorage.setItem('token', token)
    },

    // edit user
    editUser({ commit }, payload) {
        commit('SET_USER', payload)
        window.localStorage.removeItem('user')
        window.localStorage.setItem('user', JSON.stringify(payload))
    },

    // add sub user 
    addSubUser({ commit },payload) {
        commit('ADD_SUB_USER', payload)
    },

    // set token or password
    setToken({ commit }, payload) {
        commit('SET_TOKEN', payload)
        window.localStorage.setItem('token',payload)
    }

    
}

export default {
    state,
    getters,
    mutations,
    actions
}