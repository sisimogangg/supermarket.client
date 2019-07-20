<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-container>
        <b-navbar-brand>
          <router-link class="brand" to="/">Supermarket</router-link>
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>Shopping cart</b-nav-item>
          <b-nav-item>
            <router-link class="navlink" to="/about">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
        
      </b-container>
    </b-navbar>
  </div>
</template>

<style scoped>

.brand {
  color: #fff;
  text-decoration: none;
  padding-left: 20px;
}

.navlink {
  color: rgba(255,255,255,.5);
  text-decoration: none;
  padding-right: 20px;
}

.navlink:hover{
  color: #f8f9fa;
}
</style>


