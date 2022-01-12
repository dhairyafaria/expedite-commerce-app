<template>
  <div class="container">
    <ExpediteCommerce />
  </div>
</template>

<script>
import ExpediteCommerce from './components/ExpediteCommerce.vue';

export default {
  name: 'App',
  components: {
    ExpediteCommerce,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  .container {
    background-color: #333333;
    padding: 30px;
  }
}
</style>
