<template>
 <div>
  <b-card @click="showDetails()"
    :title="product.name"
    :img-src="product.imageURL"
    img-alt="Image"
    img-top
    img-height="250"
    img-width="100"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
       <Price :price="product.price.amount"/>
      <br>
      <div v-if="product.discount !== undefined"><b-badge variant="danger">On Sale</b-badge></div>
    </b-card-text>
  </b-card>
</div>
</template>

<script>
import Price from '../components/PriceRender';

export default {
   name: 'product',
   props: ["product"],
   methods:{
       showDetails(){
         this.$router.push({name: 'details', params:{id: this.product.id}});
       }
   },
   components:{
     Price
   }
}
</script>

<style>

</style>
