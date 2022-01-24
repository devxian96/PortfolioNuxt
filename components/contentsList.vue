<template>
  <v-row>
    <!-- loading -->
    <v-skeleton-loader
      v-if="isEmpty(content)"
      light
      width="100%"
      type="list-item-two-line"
    ></v-skeleton-loader>
    <!-- Contents print -->
    <div
      v-for="item in content"
      v-else
      :key="item.id"
      class="box pt-2 pb-2 mb-5"
    >
      <nuxt-link :to="{ name: 'blog-id', params: { id: item.slug } }">
        <v-row>
          <v-col>
            <h3>{{ item.title }}</h3>
          </v-col>
          <v-col class="text-right">
            <p class="mb-0">
              {{ new Date(item.updatedAt).toLocaleString() }}
            </p>
          </v-col>
        </v-row>
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
      .only(['title', 'updatedAt', 'slug'])
      .fetch()
  },
  methods: {
    isEmpty(param: Object): boolean {
      return Object.keys(param).length === 0
    },
  },
})
</script>
