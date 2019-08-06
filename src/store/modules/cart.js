import HttpService from '../../services/HttpService';


const httpService = new HttpService();


const state = {
    cartItems: [],
    itemCount: 0
};

const getters = {
    allCartItems: (state) => state.cartItems,
    itemCount: (state) => state.itemCount
};

const actions = {
    async fetchCartItems({commit}){
        const res = await httpService.getCartItems();
        commit('setCartItems', res);
    },
    async addItemToCard({commit}, item){
        const res = httpService.addToCart(item);

        commit('incrementCount');
        commit('setCartItems', res);
    },
    async removeItemFromCard({commit}, id){
      await httpService.removeFromCard(id);
      commit('removeFromCard', id);
    }
};

const mutations = {
    setCartItems: (state, items) => state.cartItems = items,
    incrementCount: (state) => state.itemCount++,
    removeFromCard: (state, id) => state.cartItems = state.cartItems.filter(r => r.id !== id)
};

export default {
    state,
    getters,
    actions,
    mutations
};