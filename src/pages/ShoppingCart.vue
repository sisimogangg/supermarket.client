<template>
  <b-container>
    <div class="alert alert-dark" role="alert">
      <h3>Shopping cart</h3>
    </div>
    <b-row>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in allCartItems">
            <td class="col-lg-3">
              <ShoppingCartItem :item="item" />
            </td>
            <td>{{item.price.amount}}</td>
            <td>
              <b-form-input type="number" :value="subtotal" id="subtotal"></b-form-input>
            </td>
            <td>{{subtotal}}</td>
            <td>
              <b-button variant="danger">
                  <i class="fas fa-trash-alt"></i>
                  </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </b-row>
    <hr />
    <b-row>
      <b-col offset="9">
        <b-button id="total" disabled  size="lg" squared variant="outline-secondary">Total: {{total}}</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ShoppingCartItem from "../components/ShoppingCartItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "shopping-cart",
  data() {
    return {
      subtotal: 0,
      total: 0
    };
  },
  components: {
    ShoppingCartItem
  },
  methods: {
      ...mapActions(["fetchCartItems"]),
      computeTotal(){}
  },
  computed: mapGetters(["allCartItems"]),
  created() {
    this.fetchCartItems();
  }
};
</script>

<style scoped>
input {
  padding-top: 0px;
}

#total {
    width: 100%;
}
</style>
