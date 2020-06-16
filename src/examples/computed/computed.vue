<template>
  <div class="computed-example">
    <p>Initials: {{ initials }}</p>
  </div>
</template>
<script>
export default {
  name: 'computed-example',
  props: {
    fullName: {
      type: String,
      required: true
    }
  },
  computed: {
    /**
     *
     * TDD lets us refactor our work with confidence.
     * Both ways of getting first and last initials are valid
     * and with both the test will pass, but one is way cleaner.
     *
     */
    initials () {
      const names = this.fullName.split(' ')

      const input = []
      names.forEach(n => {
        input.push(n.charAt(0).toUpperCase())
      })

      return input.join('')
    }
    // initials() {
    //   const names = this.fullName.split(' ')
    //   return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
    // }
  }
}
</script>
