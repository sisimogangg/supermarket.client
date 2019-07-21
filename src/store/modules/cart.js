import HttpService from '../../services/HttpService';


const httpService = new HttpService();

const state = {
    cartItems: []
};

const getters = {
    allCartItems: (state) => state.cartItems
};

const actions = {
    async fetchCartItems({commit}){
        const res = await httpService.getCartItems();
        commit('setCartItems', res);
    }
};

const mutations = {
    setCartItems: (state, items) => state.cartItems = items
};

export default {
    state,
    getters,
    actions,
    mutations
};