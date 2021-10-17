<script>
import SteppedPagesNav from './SteppedPagesNav.vue'
export default {
  components: { SteppedPagesNav },
  props: {
    tabs: Array,
    page: Number,
    lastAllowedTab: {
        required: false,
        type: Number,
        default: 1000
    }
  },
  emits: [ "update:page" ],
  methods: {
    tabChanged: function(tabId) {
      this.$emit("update:page", tabId);
    }
  }
}
</script>

<template>
  <div class="stepped-pages">
    <stepped-pages-nav :tabs="tabs" @tab-changed="tabChanged" :tabId="page" :lastAllowedTab="lastAllowedTab"></stepped-pages-nav>
    <div class="pages">
      <div v-for="(tab, id) in tabs" :key="id">
        <slot :name="`page${id}`" v-if="page === id"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
