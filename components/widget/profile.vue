<template>
  <v-row>
    <!-- Profile IMG Start -->
    <v-col cols="6">
      <v-img
        class="box mt-3 mb-3"
        :lazy-src="myPic"
        :src="myPic"
        width="200px"
        height="200px"
        alt="Seokhyun Jang"
      >
        <template #placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
    <!-- Profile IMG End -->

    <!-- Profile Info Start -->
    <v-col cols="6" class="mt-5 mb-5">
      <h4>장석현<small>Seokhyun Jang</small></h4>
      <hr />
      <p>FrontEnd 개발자</p>
      <hr />
      <p>여주대학교<small>컴퓨터정보과</small></p>
      <p>한림대학교<small>빅데이터학과</small></p>
    </v-col>
    <!-- Profile Info End -->
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      myPic: require('@/assets/mypic.jpg'),
    }
  },
})
</script>
