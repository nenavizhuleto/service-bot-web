<script setup>
import { RouterLink, RouterView } from 'vue-router'


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
            <div class="navbar-text">Signed in as: <RouterLink to="/dasdad">Guest</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView class=" text-bg-dark" />
</template>

<style scoped>

</style>
