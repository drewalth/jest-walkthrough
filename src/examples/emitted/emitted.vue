<template>
  <div class="emitted-example">
    <button @click.exact="emitEvent">Emit Event!</button>
  </div>
</template>
<script>
export default {
  name: 'emitted-example',
  methods: {
    emitEvent () {
      this.$emit('myEvent', 'name', 'password')
    }
  }
}
</script>
