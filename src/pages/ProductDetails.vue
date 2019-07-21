<template>
  <div id="details">
    <b-container>
      <h3>Product Details</h3>
      <hr>

      <b-row>
        <b-col>
          <b-img :src="product.imageUrl" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col>
          <h3>{{product.name}}</h3>
          <p>Buy 2 for the price of 1</p>
          <h2>{{product.price.symbol+ ' ' + product.price.amount}}</h2>

          <b-button variant="info">
            Add to Cart <i class="fas fa-cart-plus"></i>
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HttpService from "../services/HttpService";

const httpService = new HttpService();

export default {
  name: "productDetails",
  data() {
    return {
      product: {}
    };
  },
  props: ["id"],
  created() {
    this.product = httpService.getProductById(this.id);
  }
};
</script>

<style scoped>
</style>
