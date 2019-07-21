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

           <hr>
          <b-button @click="addToCart" variant="info">
            <div v-if="clicked"><i class="fas fa-check-circle"></i> Added to Cart</div>
            <div v-else><i class="fas fa-cart-plus"></i> Add to Cart</div>
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
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    ...mapActions(["fetchSelectedProduct", "addItemToCard"]),
    addToCart() {
      // get list of cart items
      // check if this item already exist
      // increment
      var product = {
        id: this.selectedProduct.id,
        imageUrl: this.selectedProduct.imageUrl,
        name: this.selectedProduct.name,
        quantity: 1,
        promotion: "3 for 2",
        price: this.selectedProduct.price
      };

      this.addItemToCard(product);

      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 1000);

      // check if this product is in discount
    }
  },
  computed: mapGetters(["selectedProduct"]),
  props: ["id"],
  created() {
    this.fetchSelectedProduct(this.id);
  }
};
</script>

<style scoped>
b-button{
  width: 100%;
}
</style>
