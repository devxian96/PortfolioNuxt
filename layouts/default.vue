<template>
  <v-app>
    <!-- Header Start -->
    <v-app-bar flat class="menu">
      <div>
        <h2>Seokhyun Jang</h2>
      </div>
      <div>
        <ul class="menu-wrap">
          <li>홈</li>
          <li>보유기술</li>
          <li>대표 프로젝트</li>
          <li>블로그</li>
        </ul>
      </div>
    </v-app-bar>
    <!-- Header End -->

    <!-- Background IMG Start -->
    <div class="bg-icon">
      <v-col cols="10" sm="8" md="5" xl="3">
        <v-img :lazy-src="img" :src="img" />
      </v-col>
    </div>
    <!-- Background IMG End -->

    <!-- Main Start -->
    <v-main>
      <div class="container">
        <nuxt />
      </div>
    </v-main>
    <!-- Main End -->

    <!-- Footer Start -->
    <v-footer class="footer">
      <span class="mr-auto ml-auto"
        ><a
          href="https://github.com/devxian96/PortfolioNuxt/blob/master/LICENSE"
          target="_black"
          >MIT License</a
        >
        Seokhyun Jang &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
    <!-- Footer End -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      img: require('@/assets/virus.png'),
    }
  },
})
</script>

<style>
/* Background */
.theme--light.v-application {
  background: #f8de88;
  background-size: 100% 100%;
  background-position: center;
}
.bg-icon {
  width: 100%;
  transform: translate(0, 20vh);
  position: absolute;
}
.bg-icon > div {
  margin: auto;
}
.theme--light.v-footer {
  background-color: transparent;
}

/* Reactive Web */
.menu,
.container {
  width: 100%;
  max-width: 1200px;
}

/* Menu Design */
.menu {
  max-height: 50px;
  margin: auto;
}
.menu-wrap {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu-wrap > li {
  float: left;
  margin: 0;
  margin-right: 1.2rem;
  padding: 0;
  border: 0;
  color: #333;
}
.v-toolbar__content {
  border-radius: 3px;
  border-left: 10px solid #333;
  display: block !important;
}
header {
  margin-top: 13px !important;
  margin-bottom: 3rem !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent;
}
.v-application ul,
.v-application ol {
  padding-left: 0;
}

/* Basic Tag */
a {
  color: #3c4bab;
  text-decoration: none;
}
a:hover {
  color: #8897f7;
}

/* Grid */
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 30px;
}
.row > div {
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 30px;
}
@media (max-width: 767px) {
  .row {
    grid-template-columns: auto;
  }
}

/* Glassmorphism */
.box {
  width: 100%;
  height: fit-content;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-left: 1rem;
  padding-right: 1rem;
}
.box-purple {
  width: 100%;
  height: fit-content;
  background: rgba(60, 75, 171, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
