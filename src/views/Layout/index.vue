<template>
  <div id="layout" :class="[menStatus? 'close' : 'open']">
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>

<script>
import LayoutHeader from "./Components/Header";
import LayoutMain from "./Components/Main";
import LayoutNav from "./Components/Nav";
import { computed } from '@vue/composition-api';
export default {
  name: 'layout',
  components: {LayoutHeader, LayoutMain, LayoutNav},

    setup(props, { root }){
      const menStatus = computed(() => root.$store.state.isCollapse);
      return {
        menStatus,
      }
  }

};

</script>

<style>
</style>
