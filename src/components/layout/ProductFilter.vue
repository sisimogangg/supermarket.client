<template>
  <div id="filter">
    <b-card>
      <h3>Product Filter</h3>

      <!-- <b-button size="lg" variant="primary" @click="handleClick">Apple</b-button> -->
      <b-form-group id="form" @change="handleClick">
        <b-form-radio v-model="selected" name="some-radios" value="All">All</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="Apple">Apple</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="Banana">Banana</b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="Coconut">Coconut</b-form-radio>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "app-filter",
  data(){
      return {
          selected: 'All'
      }
  },
  methods: {
    ...mapActions(['filterProducts']),
    handleClick(checked) {
       console.log('Selected :', this.selected);
    }
  }
};
</script>

<style scoped>

.card-body {
    padding: 0.6rem !important;
}

#form {
    padding-left: 5px;
}

#filter {
  color: #414042;
}

h3 {
  font-weight: 700;
  font-size: 16px;
}

.custom-control.custom-radio:hover {
    background-color: gray;
    color: white;
}
</style>
