<template>
  <v-row>
    <!-- Perfect know -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">far fa-grin-squint-tears</v-icon>
        잘 활용 할 수 있으며 같은 기능의 프레임워크를 만들거나, 라이브러리를
        개발 할 수 있습니다.
      </h3>
      <hr />
      <p>Javascript <small></small></p>
    </div>

    <!-- well know -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">fas fa-smile</v-icon>사용하는데 문제없으며
        생각하는 대로 서비스를 개발 할 수 있습니다.
      </h3>
      <hr />
    </div>

    <!-- just know -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">far fa-grin-beam-sweat</v-icon>사용 할 수는
        있지만 전문적이지는 않습니다.
      </h3>
      <hr />
    </div>

    <!-- tried once -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">fas fa-poo</v-icon>한번만 밖에 사용
        안해봤습니다.
        <hr />
      </h3>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  head: {
    title: '보유기술',
  },
})
</script>
