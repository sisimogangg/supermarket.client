<template>
  <div id="app">
    <HeaderNav />
    <b-container class="content">
      <b-row>
        <b-col cols="2">
          <ProductFilter />
        </b-col>
        <b-col cols="8">
          <Content />
        </b-col>
        <b-col cols="2">
          <Sale />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderNav from "./components/HeaderNav";
import Content from "./components/Content";
import ProductFilter from "./components/ProductFilter";
import Sale from "./components/Sale";

export default {
  name: "app",
  components: {
    HeaderNav,
    Content,
    ProductFilter,
    Sale
  }
};
</script>


<style>
#app {
}
.content{
  padding-top: 20px;
}
</style>
