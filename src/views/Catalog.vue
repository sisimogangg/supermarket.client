<template>
  <div class="home">
    <b-card>
      <b-container>
          <h3> Catalog </h3>
          <hr>
      </b-container>
      
      <ProductList />
  </b-card>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '../components/ProductList';

export default {
  name: 'catalog',
  components: {
    ProductList
  }
}
</script>
