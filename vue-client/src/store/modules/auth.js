import axios from 'axios';
const state = {
    users: null,
    user: null,
    orders: null,
    order: null
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateOrders: state => state.orders,
    StateOrder: state => state.order,
    StateUsers: state => state.users,
    StateUser: state => state.user,
};
const actions = {
    async Register({ dispatch }, form) {
        await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },
    async LogIn({ commit }, User) {
        await axios.post('login', User)
        await commit('setUser', User.get('username'))
    },
    // async CreateOrder({ dispatch }, order) {
    //     await axios.post('order', order)
    //     await dispatch('GetOrders')
    // },
    async GetOrders({ commit }) {
        let response = await axios.get('/orders')
        commit('setOrders', response.data)
    },
    async GetOrder({ commit }, id) {
        let response = await axios.get(`/orders/${id}`)
        commit('setOrder', response.data)
    },
    async GetUsers({ commit }) {
        let response = await axios.get(`/users`)
        commit('setUsers', response.data)
    },
    async GetUser({ commit }, id) {
        let response = await axios.get(`/users/${id}`)
        commit('setUser', response.data)
    },
    // async LogOut({ commit }) {
    //     let user = null
    //     commit('logout', user)
    // }
};
const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setUser(state, user) {
        state.user = user
    },
    setOrders(state, orders) {
        state.orders = orders
    },
    setOrder(state, order) {
        state.order = order
    },
    LogOut(state) {
        state.user = null
        state.orders = null
        state.order = null
    },
};
export default {
    state,
    getters,
    actions,
    mutations
};