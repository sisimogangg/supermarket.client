<template>
 <div>
  <b-card @click="showDetails()"
    :title="product.name"
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    img-height="250"
    img-width="100"
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ product.price.symbol + ' ' + product.price.amount}}
    </b-card-text>
  </b-card>
</div>
</template>

<script>


export default {
   name: 'product',
   props: ["product"],
   methods:{
       showDetails(){
         this.$router.push({name: 'details', params:{id: this.product.id}});
       }
   }
}
</script>

<style>

</style>
