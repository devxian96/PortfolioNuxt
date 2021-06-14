<template>
  <v-row>
    <div v-for="item in content" :key="item.id" class="box pt-2 pb-2 mb-5">
      <nuxt-link :to="{ name: 'blog-id', params: { id: item.slug } }">
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
      </nuxt-link>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  scrollToTop: true,
  data() {
    return {
      content: {},
    }
  },
  async created() {
    this.content = await this.$content()
      .only(['title', 'description', 'slug'])
      .fetch()
  },
})
</script>
