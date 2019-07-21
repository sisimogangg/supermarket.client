import HttpService from '../../services/HttpService';


const httpService = new HttpService();

const state = {
    items: []
};

const getters = {
    allItems: (state) => state.items
};

const actions = {
    async fetchItems({commit}){
        const res = await httpService.getCartItems();
        commit('setCartItems', res);
    }
};

const mutations = {
    setCartItems: (state, items) => state.items = items
};

export default {
    state,
    getters,
    actions,
    mutations
};