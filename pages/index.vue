<template>
  <v-row>
    <!-- Left Widget Start -->
    <div>
      <div class="box">test1</div>
      <div class="box">test2</div>
      <div class="box">test3</div>
    </div>
    <!-- Left Widget End -->

    <!-- Center Widget Start -->
    <div>
      <div class="box">test4</div>
      <div class="box">test4</div>
      <div class="box">test4</div>
      <div class="box">test4</div>
    </div>
    <!-- Center Widget End -->

    <!-- Right Widget Start -->
    <div>
      <div class="box">test5</div>
    </div>
    <!-- Right Widget End -->
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: '홈',
  },
})
</script>
