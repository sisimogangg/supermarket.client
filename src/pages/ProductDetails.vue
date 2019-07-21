<template>
  <div id="details">
    <b-container>
      <h3>Product Details</h3>
      <hr />

      <b-row>
        <b-col>
          <b-img :src="selectedProduct.imageUrl" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col>
          <h3>{{selectedProduct.name}}</h3>
          <p>Buy 2 for the price of 1</p>
          <h2>{{selectedProduct.price.symbol + ' ' + selectedProduct.price.amount}}</h2>

          <b-button variant="info">
            Add to Cart
            <i class="fas fa-cart-plus"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "productDetails",
  methods: mapActions(['fetchSelectedProduct']),
  computed: mapGetters(["selectedProduct"]),
  props: ["id"],
  created() {
    this.fetchSelectedProduct(this.id);
  }
};
</script>

<style scoped>
</style>
