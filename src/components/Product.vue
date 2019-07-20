<template>
 <div>
  <b-card
    :title="name"
    img-src="https://images.unsplash.com/photo-1560769680-ba2f3767c785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=700&q=80"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{price}}
    </b-card-text>
  </b-card>
</div>
</template>

<script>
export default {
   name: 'product',
   data(){
       return{
           name: 'Coconut',
           price: 'R5.00',
       }
   }
}
</script>

<style>

</style>
