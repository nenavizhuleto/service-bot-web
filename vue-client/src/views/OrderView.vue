<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {}
    },
    created() {
        this.GetOrder(this.$route.params.id)
    },
    computed: {
        ...mapGetters({ Order: "StateOrder" })
    },
    methods: {
        ...mapActions(["GetOrder"])
    }
}

</script>

<template>
    <div class="container-fluid">
        <h2>Order ID: {{ this.Order._id }} <br />
            <small class="text-muted">
                <router-link :to="`/users/${this.Order.customer_id}`">
                    user id: {{ this.Order.customer_id }}
                </router-link>
            </small>
        </h2>
        <p>Type: {{ this.Order.type }}</p>
        <p>Description: {{ this.Order.description }}</p>
        <p>Status: {{ this.Order.status }}</p>

    </div>
</template>