<template>
  <div id="fb-root">
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
      <script
        async
        defer
        lazy
        crossorigin="anonymous"
        src="https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v11.0&appId=5605049046231707&autoLogAppEvents=1"
        nonce="QsKxUqx5"
      ></script>
      <div
        class="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width=""
        data-numposts="5"
      ></div>
    </article>

    <v-col>
      <h3>다른글도 읽기</h3>
      <br />
      <contents-list />
    </v-col>
  </div>
</template>

<script>
import Vue from 'vue'
import ContentsList from '@/components/contentsList.vue'
export default Vue.extend({
  components: { ContentsList },
  scrollToTop: true,
  async asyncData({ $content, params }) {
    const page = await $content(params.id).fetch()

    return {
      page,
    }
  },
  data() {
    return {
      myPic: require('@/assets/mypic.jpg'),
    }
  },
})
</script>
