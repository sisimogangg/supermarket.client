<template>
    <b-container>
        <h3>Shopping cart</h3>
        <b-row :key="item.id" v-for="item in allItems">
             <ShoppingCartItem :item="item"/>
        </b-row>
    </b-container>
</template>

<script>
import ShoppingCartItem from '../components/ShoppingCartItem';
import {mapGetters, mapActions} from 'vuex';


export default {
    name: 'shopping-cart',
    components: {
        ShoppingCartItem
    },
    methods: mapActions(['fetchItems']),
    computed: mapGetters(['allItems']),
    created(){
        this.fetchItems();
        console.log(this.allItems);
    }
}
</script>

<style>

</style>
