<template>
  <div id="sale">
    <b-card>
      <!--To DO: Need to stop the carousel from emitting events -->
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" background="#ababab">
        <b-carousel-slide img-blank img-alt="Blank image" :key="s.id" v-for="s in sales">
          <h3>{{s.msg}}</h3>
        </b-carousel-slide>
      </b-carousel>
    </b-card>
  </div>
</template>


<script>
export default {
  name: "promotion",
  data() {
    return {
      slide: 0,
      sliding: null,
      sales: [
        { id: 1,
          msg: "3 Apples for price of 2"
        },
        {
          id: 2,
          msg: "2 Coconut for 1"
        }
         ]
    };
  }
};
</script>

<style scoped>
.card-body {
  padding: 0rem !important;
}

.carousel {
  height: 350px !important;
  padding-top: 100px !important;
}
</style>

