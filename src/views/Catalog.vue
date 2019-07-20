<template>
  <div class="home">
    <b-card>
      <b-container>
          <h3> Catalog </h3>
          <hr>
      </b-container>
      
      <ProductList :products="products"/>
  </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList.vue';
import HttpService from '../services/HttpService';

const httpService = new HttpService();
export default {
  name: 'catalog',
  data(){
    return {
      products: []
    }
  },
  components: {
    ProductList
  },
  methods: {

  },
  created(){
    this.products = httpService.getAllProducts();
    console.log(this.products);
  }
}
</script>
