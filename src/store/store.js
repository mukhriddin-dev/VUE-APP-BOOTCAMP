import {createStore} from "vuex";
import {auth} from './modules/auth/auth';
import { admin } from './modules/admin/createadmin';
import { category } from './modules/category/createcategory';
import { post } from './modules/post/addpost';


const store = createStore({modules: {
        auth , admin , category , post
    }})


export default store;
