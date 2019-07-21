import HttpService from '../../services/HttpService';

const httpService = new HttpService();

const state = {
  products: [],
  selectedProduct: {}
};

const getters = {
    allProducts: (state) => state.products,
    selectedProduct: (state) => state.selectedProduct
};
const actions = {
    async fetchProducts({commit}){
        const res = await httpService.getAllProducts();

        commit('setProducts', res);

    },
    async fetchSelectedProduct({commit}, id){
        const res = await httpService.getProductById(id);

        commit('setSelectedProduct', res);
    },
    async filterProducts({commit}, name){
        const res = await httpService.filterProductByName(name);
        commit('setProducts', res);

    }
};

const mutations = {
    setProducts: (state, products) => state.products = products,
    setSelectedProduct: (state, product) => state.selectedProduct = product
};

export default {
    state,
    getters,
    actions,
    mutations
};