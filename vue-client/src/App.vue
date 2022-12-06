<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {
    ...mapGetters({ isAuthenticated: "isAuthenticated" })
  },
  methods: {

  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Service</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/service" class="nav-link">Service</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/orders" class="nav-link">Orders</RouterLink>
            </li>
          </ul>
          <div class="collapse navbar-collapse justify-content-end">
            <li v-if="this.isAuthenticated">Signed in as: <RouterLink class="btn btn-primary pl-2 pr-2" to="/profile">
                Guest
              </RouterLink>
            </li>
            <li v-else>
              <RouterLink to="/auth" class="btn btn-primary pl-2 pr-2">Login</RouterLink>
            </li>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView class=" text-bg-dark vh-100" />
</template>

<style scoped>

</style>
