<template>
  <div>
      <p>aometh</p>
      <b-col>
        <b-img :src="item.imageUrl" fluid alt="Fluid image" img-height="50" img-width="50"></b-img>
      </b-col>
      <b-col>
            <h3>{{item.name}}</h3>
            <p>{{item.promotion}}</p>
      </b-col>
       <b-col>
           {{item.price.amount.symbol+ ' ' + item.price.amount}}
       </b-col>
    <b-col>
        <input type="number" id="" placeholder="0">
    </b-col>
    <b-col>
         {{subtotal}}
    </b-col>
  </div>
</template>


<script>
export default {
    name: 'shopping-cart-item',
    data(){
        return {
            subtotal: 0
        }
    },
    props:['item']
}
</script>

