<template>
  <div class='route-example'>
    <h5>Id - {{ routeId }}</h5>
    <h1>Path - {{ routePath  }}</h1>
    <div v-if="isAdmin" class="admin-wrapper">
      admin!
    </div>
  </div>
</template>
<script>
export default {
  name: "route-example",
  computed: {
    routeId() {
      return this.$route.params.id
    },
    routePath() {
      return this.$route.path
    },
    isAdmin() {
      return this.$route.path.includes('admin')
    }
  }
};
</script>
