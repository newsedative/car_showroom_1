import axios from "axios";


export const store = {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token')||"",
    }),
    getters: {
        isLoggedIn: state => !!state.token
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        removeToken(state) {
            state.token = ""
            localStorage.setItem('token', "")
        }
    },
    actions: {
        async login({commit}, {username, password, router}) {
            try {
                const response = await axios.post("https://newsedative.pythonanywhere.com/api-token-auth/", {
                  username: username,
                  password: password
                })
                const token = response.data.token
                await commit("setToken", token, username, password)
                router.push("/user")
            } catch (error) {
                alert("Пароль или логин неверны!")
            }
        }
    },
}