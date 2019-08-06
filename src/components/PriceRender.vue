<template>
  <div class="price-now">
    <span>
      R{{firstPart}}
      <span class="price-small">.{{secondPart}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "price",
  data() {
    return {
      firstPart: "4",
      secondPart: "20"
    };
  },
  props: ["price"],
  created(){
     var arr = this.price.split(".")
     this.firstPart = arr[0];
     this.secondPart = arr[1];
  }
};
</script>


<style scoped>
.price-now, .price-now span {
  color:#ff5406;
}

 .price-now span {
  font-size:32px;
}

.price-small {
    font-size: 18px !important;
    position: relative;
    top: -11px;
    left: -6px;
}
</style>
