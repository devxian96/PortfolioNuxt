<template>
  <div class="grid">
    <!-- Left Widget Start -->
    <div>
      <div class="box"><Profile /></div>
      <div class="box-purple">
        <v-icon x-large color="white">fa-envelope</v-icon>
        <span class="white--text pl-3">coolman555@me.com</span>
      </div>
      <div class="box-purple">
        <v-icon x-large color="white">fa-github-alt</v-icon>
        <span class="white--text pl-3"
          ><a href="https://github.com/devxian96" target="_black"
            >@devxian96</a
          ></span
        >
      </div>
      <div class="box">test3</div>
    </div>
    <!-- Left Widget End -->

    <!-- Center Widget Start -->
    <div>
      <div class="box">test4</div>
      <div class="box">test4</div>
      <div class="box">test4</div>
      <div class="box-purple">test4</div>
    </div>
    <!-- Center Widget End -->

    <!-- Right Widget Start -->
    <div>
      <div class="box-purple">test5</div>
    </div>
    <!-- Right Widget End -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Profile from '@/components/widget/profile.vue'

export default Vue.extend({
  components: { Profile },
  head: {
    title: '홈',
  },
})
</script>
