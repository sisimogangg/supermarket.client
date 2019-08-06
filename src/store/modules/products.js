import axios from 'axios';
const apiBaseUrl = 'http://localhost:8080/rpc';

const state = {
  products: [],
  selectedProduct: {},
  selectedProductDiscount: {}
};

const getters = {
    allProducts: (state) => state.products,
    selectedProduct: (state) => state.selectedProduct,
    selectedProductDiscount: (state) => state.selectedProductDiscount
};
const actions = {
    async fetchProducts({commit}){
        const response = await fetch(apiBaseUrl, {
            headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify({
                service: 'supermarket.product',
                method: 'ProductService.List'
        })
        })
        console.log('server response', response);
        commit('setProducts', response.products);

    },
    async fetchSelectedProduct({commit}, id){
        const res = await axios.get(`${apiBaseUrl}/${id}`);
        commit('setSelectedProduct', res.data.product);
    },
    async resetSelectedProduct({commit}){
        commit('resetSelectedProduct');
    },
    async filterProducts({commit}, name){
        const res = await fetch(`${apiBaseUrl}/${name}`);
        commit('setProducts', res);
    }
};

const mutations = {
    setProducts: (state, products) => state.products = products,
    setSelectedProduct: (state, product) => state.selectedProduct = product,
    resetSelectedProduct: (state) => state.selectedProduct = {}
};

export default {
    state,
    getters,
    actions,
    mutations
};