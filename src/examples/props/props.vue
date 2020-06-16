<template>
  <div class='props-example'>
    <h1>Component State: {{ state }}</h1>
  </div>
</template>
<script>
export default {
  name: 'props-example',
  props: {
    state: {
      type: String,
      required: false,
      default: 'default',
      validator: val => ['error', 'loading', 'default'].indexOf(val) > -1
    }
  }
}
</script>
