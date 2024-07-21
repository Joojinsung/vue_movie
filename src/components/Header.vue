<script>
export default {
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/Movie',
        },{
          name: 'About',
          href: '/About',
        },
      ],
    };
  },
};
</script>


<template>
  <header>
    <div class="nav">
      <div class="nav-item">
        <RouterLink class="nav-link" to="">
          About
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>