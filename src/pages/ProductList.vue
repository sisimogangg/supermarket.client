<template>
  <div>
    <b-container>
      <h3>Catalog</h3>
      <hr />
      <b-row>
        <b-col v-if="allProducts.length == 0">
          <Spinner />
        </b-col>
        <b-col v-else cols="4" :key="p.id" v-for="p in allProducts">
          <ProductListItem :product="p" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import ProductListItem from "../components/ProductListItem.vue";
import Spinner from "../components/Spinner.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "product-list",
  components: {
    ProductListItem,
    Spinner
  },
  methods: mapActions(["fetchProducts"]),
  computed: mapGetters(["allProducts"]),
  created() {
    if (this.allProducts.length === 0) this.fetchProducts();
  }
};
</script>


