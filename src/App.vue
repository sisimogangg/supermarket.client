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
          <Promotion />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HeaderNav from "./components/layout/HeaderNav";
import Content from "./components/layout/Content";
import ProductFilter from "./components/layout/ProductFilter";
import Promotion from "./components/layout/Promotion";

export default {
  name: "app",
  components: {
    HeaderNav,
    Content,
    ProductFilter,
    Promotion
  }
};
</script>


<style>
#app {
  background-color: #FCF8F7;
}
.content{
  padding-top: 20px;
}
</style>
