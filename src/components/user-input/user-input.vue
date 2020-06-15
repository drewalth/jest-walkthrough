<template>
  <div class="user-input">
    <form @submit="handleSubmit">
      <input v-model="username" data-username />
      <button type="submit" />
    </form>

    <div class="message" v-if="submitted">
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
export default {
  name: "user-input",
  data:()=> ({
      username: '',
      submitted: false
    }),
    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
};
</script>
