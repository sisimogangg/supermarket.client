<template>
  <div>
      <b-container>
          <b-row>
              <b-col cols="4" :key="p.id" v-for="p in products">
                   <Product :product="p"/>
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
   },
   props: ["products"]
}
</script>

