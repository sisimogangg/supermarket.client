<template>
  <div id="details">
    <b-card>
      <b-container>
        <h3>Product Details</h3>
        <b-row>
          <b-col>
            <b-img :src="product.imageUrl" fluid alt="Fluid image"></b-img>
          </b-col>
          <b-col>
            <h3>{{product.name}}</h3>
             <p>Buy 2 for the price of 1</p>
            <h2>{{getSymbol() + ' ' + product.price.amount}}</h2>

            <b-button variant="success">Add to Cart</b-button>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
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
  methods: {
    getSymbol() {
      return httpService.getCurrencySymbol(this.product.price.currency);
    }
  },
  created() {
    this.product = httpService.getProductById(this.id);
    console.log("details", this.product);
  }
};
</script>

<style scoped>
</style>
