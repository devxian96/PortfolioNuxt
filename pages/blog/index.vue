<template>
  <contents-list />
</template>

<script lang="ts">
import Vue from 'vue'
import ContentsList from '@/components/contentsList.vue'
export default Vue.extend({
  components: { ContentsList },
  scrollToTop: true,
})
</script>
