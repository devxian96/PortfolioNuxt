<template>
  <ContentsList />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  scrollToTop: true,
  head() {
    return {
      title: '블로그',
    }
  },
})
</script>
