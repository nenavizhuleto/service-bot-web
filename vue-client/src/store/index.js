import auth from './modules/auth';
import Vuex from 'vuex'

// Create store
export default new Vuex.Store({
    modules: {
        auth
    },
    plugins: []
});
