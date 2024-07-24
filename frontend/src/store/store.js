import axios from "axios";


export const store = {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token')||"",
        username: localStorage.getItem('username')||"",
        password: localStorage.getItem('password')||"",
    }),
    getters: {
        isLoggedIn: state => !!state.token
    },
    mutations: {
        setToken(state, token, username, password) {
            state.token = token
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
        },
        removeToken(state) {
            state.token = ""
            state.username = ""
            state.password = ""
            localStorage.setItem('token', "")
            localStorage.setItem('username', null)
            localStorage.setItem('password', null)
        }
    },
    actions: {
        async login({commit}, {username, password, router}) {
            try {
                const response = await axios.post("https://nneewday.pythonanywhere.com/api-token-auth/", {
                  'username': username,
                  'password': password,
                })
                const token = response.data.token
                await commit("setToken", token, username, password)
                router.push('/')
            } catch (error) {
                alert("Пароль или логин неверны!")
            }
        }
    },
}