<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
    }
  },
  created() {
    this.GetOrders()
    this.GetUsers()

  },
  mounted() {
    console.log(this.Orders);

  },
  computed: {
    ...mapGetters({ Orders: "StateOrders", Users: "StateUsers" })
  },
  methods: {
    ...mapActions(["GetOrders", "GetUsers"])

  }
}
</script>

<template>
  <div class="vstack gap-3">
    <h1>
      Total orders count: {{ this.Orders.length }}
    </h1>
    <h1>
      Total users count: {{ this.Users.length }}
    </h1>
  </div>
</template>

<style scoped>

</style>