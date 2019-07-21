<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-img :src="item.imageUrl" fluid alt="Fluid image" height="120" width="120"></b-img>
        </b-col>
        <b-col>
          <h3>Name</h3>
          <p>{{item.name}}</p>
          <h3>Promotion</h3>
          <p>{{item.promotion}}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "shopping-cart-item",
  props: ["item"]
};
</script>

<style scoped>
col {
  width: 50% !important;
}

h3 {
  font-weight: 700;
  font-size: 16px;
}
</style>




