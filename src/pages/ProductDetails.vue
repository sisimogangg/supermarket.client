<template>
  <div id="details">
    <b-container>
      <h3>Product Details</h3>
      <hr />
       
      <b-row v-if="selectedProduct"> 
        <b-col>
          <b-img :src="selectedProduct.imageUrl" fluid alt="Fluid image"></b-img>
        </b-col>
        <b-col>
          <h3>{{selectedProduct.name}}</h3>
          <p v-if="selectedProduct.discount.discount !== null">{{selectedProduct.discount.discount.summary}}</p>
          <Price :price="selectedProduct.price.amount" />
          <hr />
          <b-button @click="addToCart" variant="info">
            <div v-if="clicked">
              <i class="fas fa-check-circle"></i> Added to Cart
            </div>
            <div v-else>
              <i class="fas fa-cart-plus"></i> Add to Cart
            </div>
          </b-button>
        </b-col>
      </b-row>
      <b-row v-else><Spinner /></b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Price from "../components/PriceRender.vue";
import Spinner from '../components/Spinner.vue';

export default {
  name: "productDetails",
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    ...mapActions(["fetchSelectedProduct", "addItemToCard", "resetSelectedProduct"]),
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
  components: {
    Price,
    Spinner
  },
  created() {
    this.fetchSelectedProduct(this.id);
  },
  beforeDestroy(){
    this.resetSelectedProduct();
  }
};
</script>

<style scoped>
b-button {
  width: 100%;
}
</style>
