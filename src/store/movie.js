import axios from "axios";

export default {
    // module 명시적
    namespaced: true,
    //데이터를 의미
    state: () => ({
        movies: [],
        message: 'Search for the movie title!',
        loading: false
    }),

    // computed
    getters: {},

    // methods
    // state를 변경할 때 사용
    _mutations: {
        updateState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key];
            });
        },
        resetMovies(state) {
            state.movies = [];
        }
    },
    // 비동기 동작
    actions: {
        async searchMovies({commit}, payload) {
            const {title, type, year, number} = payload
            const OMDB_API_KEY = "7035c60c"
            const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            const {Search, totalResults} = res.data;
            commit('updateState', {
                movies:Search,
            });
        }
    }

}