<template>
  <div>
    <b-container>
      <h3> Catalog </h3>
      <b-row>
        <b-col cols="4" :key="p.id" v-for="p in allProducts">
          <ProductListItem :product="p" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import ProductListItem from "../components/ProductListItem";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "product-list",
  components: {
    ProductListItem
  },
  methods: mapActions(['fetchProducts']),
  computed: mapGetters(['allProducts']),
  created() {
     this.fetchProducts();
  }
};
</script>

