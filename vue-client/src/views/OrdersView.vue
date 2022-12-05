<script>
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
        return {
        }
    },
    created() {
        this.GetOrders()

    },
    mounted() {
        console.log(this.Orders);

    },
    computed: {
        ...mapGetters({ Orders: "StateOrders" })
    },
    methods: {
        ...mapActions(["GetOrders"])

    }
}
</script>

<template>
    <div class="vstack gap-3">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col">User</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order, i in Orders" :key="order._id">
                    <td>{{ i + 1 }}</td>
                    <td><router-link class="btn btn-secondary w-100" :to="`/orders/${order._id}`">{{ order._id
                    }}</router-link>
                    </td>
                    <td><router-link class="btn btn-secondary w-100" :to="`/users/${order.customer_id}`">{{
                            order.customer_id
                    }}</router-link></td>
                    <td class="text-truncate">{{ order.type }}</td>
                    <td class="text-truncate">{{ order.description }}</td>
                    <td>{{ order.status }}</td>
                    <td>
                        <div class="btn-group w-100" role="group">
                            <button type="button" class="btn btn-success">Accept</button>
                            <button type="button" class="btn btn-danger">Decline</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>