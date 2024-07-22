
export default {
    // module 명시적
    namespaced: true,
    //데이터를 의미
    state: () => ({
       movies: []
    }),

    // computed
    getters:{
        movieIds(state) {
            return state.movies.map(m=>m.imdbID);
        }
    },

    // methods
    // state를 변경할 때 사용
    _mutations: {
        resetMovies(state) {
            state.movies = [];
        }
    },
    // 비동기 동작
    actions: {
        searchMovies({state, getters, commit}) {
        }
    }

}