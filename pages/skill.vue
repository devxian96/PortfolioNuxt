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
      <p>
        Javascript(ES6 Upper), Vue.js, Vuex, React, Redux, HTML5, CSS3,
        bootstrap, NodeJS, PHP, Autoit, Express, Sequelize
      </p>
    </div>

    <!-- well know -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">fas fa-smile</v-icon>사용하는데 문제없으며
        생각하는 대로 서비스를 개발 할 수 있습니다.
      </h3>
      <hr />
      <p>
        Nuxtjs, Nextjs, Webpack, babel, pollyfill, Typescript, vuetify, Material
        UI, JAVA, Spring MVC, Spring Boot, npm, yarn, window server, linux
        server, eslint, prettier, notion, slack, Git, Vegas PRO, i18n
      </p>
    </div>

    <!-- just know -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">far fa-grin-beam-sweat</v-icon>사용 할 수는
        있지만 전문적이지는 않습니다.
      </h3>
      <hr />
      <p>
        Python, Flask, TF, Keras, Orion, MySQL, Oracle, PostgreSQL, influxDB, C,
        C#, Electron, PWA, Lua, thymeleaf, JSP(JSTL), ejs, SQL, Pentesting,
        AWS(CLOUND HOSTING), Photoshop, premiere PRO, Github CICD Action, Husky,
        Bash, SCSS
      </p>
    </div>

    <!-- tried once -->
    <div class="box mb-5 pt-2 pb-2">
      <h3>
        <v-icon x-large class="mr-5">fas fa-poo</v-icon>한번만 밖에 사용
        안해봤습니다.
      </h3>
      <hr />
      <p>
        Swift, lisp, NativeScript, AMP, C++, R, prolog, UNIX, Router IOS OS,
        Docker
      </p>
    </div>

    <!-- explain -->
    <div class="box-purple pt-2 pb-2">
      <h4>
        <v-icon class="mr-5">fas fa-question</v-icon>보유 기술의 종류가 왜
        다양하고 많을까요?
      </h4>
      <hr />
      <p>
        Just for fun. 컴퓨터 공부는 재밌어서 시작했습니다. 그렇게 현재까지 오게
        되었습니다.
        <nuxt-link to="/history"
          >제가 언제 어떻게 공부했는지 확인해 보세요.</nuxt-link
        >
      </p>
    </div>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  scrollToTop: true,
  head() {
    return {
      title: '보유기술',
    }
  },
})
</script>
