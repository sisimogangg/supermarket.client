<template>
  <div>
      <b-container>
          <b-row>
              <b-col>
                   <Product />
              </b-col>
              <b-col>
                   <Product />
              </b-col>
              <b-col>
                   <Product />
              </b-col>
          </b-row>
      </b-container>
     
  </div>    
</template>


<script>
import Product from './Product';

export default {
   name: 'productList',
   components: {
       Product
   }
}
</script>

<style>

</style>
