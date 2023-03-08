import {createStore} from "vuex";
import {auth} from './modules/auth/auth';


const store = createStore({modules: {
        auth
    }})


export default store;
