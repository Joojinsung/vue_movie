<script>
import Logo from "@/components/Logo.vue";

export default {
  components: {Logo},
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
        }, {
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
    <Logo/>
    <div class="nav nav-pills">
      <div
          v-for="nav in navigations" :key="nav.name"
          class="nav-item">
        <RouterLink active-class="active" class="nav-link" :to="nav.href">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo{
      margin-right: 40px;
    }
  }

</style>