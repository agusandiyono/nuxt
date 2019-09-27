<template>
  <div class="content-wrapper">
    <h1>Hello Users</h1>
    <input v-model="id" type="text">
    <button @click="loadUser">
      Load User
    </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id : ''
        };
    },

    methods : {
        loadUser() {
            this.$router.push(`/users/${this.id}`);
        }
    }
};
</script>
