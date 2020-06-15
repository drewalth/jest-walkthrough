<template>
  <div class="vuex-store">
      <h1 class="loading">loading: {{ loading }} </h1>
      <h1 class="data">data: {{ data }}</h1>
      <h1 class="error">error: {{ error }} </h1>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "vuex-store",
  computed: {
    ...mapState({
      data: state => state.User.data,
      loading: state => state.User.loading,
      error: state => state.User.error
    })
  }
};
</script>