<template>
  <div>
    <!-- article start -->
    <article class="box">
      <h1>{{ page.title }}</h1>
      <small
        ><v-avatar size="32" class="mr-2">
          <v-img
            :lazy-src="myPic"
            :src="myPic"
            alt="Seokhyun Jang"
          /> </v-avatar
        ><span class="mr-2">Seokhyun Jang</span
        >{{ new Date(page.updatedAt).toLocaleString() }}</small
      >
      <hr />
      <nuxt-content :document="page" />
    </article>
    <!-- article start -->

    <!-- Action Button start -->
    <v-col>
      <v-btn class="pt-4 pb-5 float-right white--text" to="/blog">목록</v-btn>
    </v-col>
    <!-- Action Button end -->

    <!-- List start -->
    <v-col>
      <h3>다른글도 읽기</h3>
      <br />
      <contents-list />
    </v-col>
    <!-- List End -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Context } from '@nuxt/types'
import ContentsList from '../../components/contentsList.vue'

export default Vue.extend({
  components: { ContentsList },
  scrollToTop: true,
  async asyncData({ $content, params }: Context): Promise<{ page: object }> {
    const page: object = await $content(params.id).fetch()

    return {
      page,
    }
  },
  data() {
    return {
      myPic: require('../../assets/mypic.jpg'),
    }
  },
  head() {
    return {
      title: (this as any).page.title,
    }
  },
})
</script>
