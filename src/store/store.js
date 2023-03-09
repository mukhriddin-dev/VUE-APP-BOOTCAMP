import {createStore} from "vuex";
import {auth} from './modules/auth/auth';
import { admin } from './modules/admin/createadmin';


const store = createStore({modules: {
        auth , admin
    }})


export default store;
