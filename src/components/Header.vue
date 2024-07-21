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
      <div
          v-for="nav in navigations" :key="nav.name"
          class="nav-item">
        <RouterLink class="nav-link" :to="nav.href">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

</style>