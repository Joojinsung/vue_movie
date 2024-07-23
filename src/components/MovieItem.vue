<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}

</script>

<template>
<div>{{movie.Title}}</div>
</template>

<style scoped lang="scss">

</style>