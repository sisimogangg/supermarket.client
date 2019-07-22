<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>
          <router-link class="brand" to="/">Supermarket</router-link>
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item >
            <router-link class="navlinkright" to="/">Products</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="navlinkright" to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link class="navlink" to="/cart">
              Shopping cart (
              <b>{{itemCount}}</b> )
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
  name: 'header-nav',
  computed: mapGetters(['itemCount']),

}
</script>


<style scoped>
.brand {
  color: #f8f9fa;
  text-decoration: none;
  padding-left: 20px;
}
.brand:hover {
  color: #fff !important;
}

.navlink {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  padding-right: 20px;
}

.navlinkright{
    color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
}

.navlink:hover {
  color: #f8f9fa;
}
.navlinkright:hover {
  color: #f8f9fa;
}

.active {
   color: #f8f9fa;
}


</style>


