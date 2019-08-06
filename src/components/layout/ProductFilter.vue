<template>
  <div id="filter">
    <b-card>

      <!-- <b-button size="lg" variant="primary" @click="handleClick">Apple</b-button> -->
      <b-form-group id="form" label="Filter">
        <b-form-radio-group
          v-model="selected"
          :options="options"
          button-variant="info"
          stacked
          name="radio-btn-stacked"
        ></b-form-radio-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app-filter",
  data() {
    return {
      selected: "All",
      options: [
        { text: "All", value: "All" },
        { text: "Apple", value: "Apple" },
        { text: "Banana", value: "Banana" },
        { text: "Coconut", value: "Coconut" }
      ]
    };
  },
  methods: mapActions(["filterProducts"]),
  updated() {
    this.filterProducts(this.selected);
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
