import HttpService from '../../services/HttpService';

const httpService = new HttpService();

const state = {
  products: []
};

const getters = {
    allProducts: (state) => state.products
};
const actions = {
    async fetchProducts({commit}){
        const res = await httpService.getAllProducts();

        commit('setProducts', res);

    }
};

const mutations = {
    setProducts: (state, products) => state.products = products
};

export default {
    state,
    getters,
    actions,
    mutations
};