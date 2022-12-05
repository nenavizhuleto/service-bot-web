<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {}
    },
    created() {
        this.GetUser(this.$route.params.id)
    },
    computed: {
        ...mapGetters({ User: "StateUser" })
    },
    methods: {
        ...mapActions(["GetUser"])
    }
}

</script>

<template>
    <div class="container-fluid" v-if="this.User !== null">
        <h2>User ID: {{ this.User._id }}</h2>
        <p>Username: {{ this.User.username }}</p>
        <p>Fullname: {{ this.User.fullname }}</p>
        <p>Role: {{ this.User.role }}</p>
        <p>Language: {{ this.User.language }}</p>

    </div>
</template>