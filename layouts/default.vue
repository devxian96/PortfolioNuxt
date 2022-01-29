<template>
  <v-app>
    <!-- Header Start -->
    <v-app-bar flat floating class="menu">
      <div>
        <nuxt-link to="/" class="white--text"><h2>Seokhyun Jang</h2></nuxt-link>
      </div>
      <div>
        <ul class="menu-wrap">
          <li><nuxt-link to="/" class="white--text">홈</nuxt-link></li>
          <li>
            <nuxt-link to="/skill" class="white--text">보유기술</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project" class="white--text"
              >대표 프로젝트</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/history" class="white--text">이력</nuxt-link>
          </li>
          <li><nuxt-link to="/blog" class="white--text">블로그</nuxt-link></li>
        </ul>
      </div>
    </v-app-bar>
    <!-- Header End -->

    <!-- Background IMG Start -->
    <div class="bg-icon">
      <v-col cols="10" sm="8" md="5" xl="3">
        <v-img :lazy-src="img" :src="img" alt="virus">
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
    <v-footer>
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
      img: require('../assets/virus.png'),
    }
  },
})
</script>

<style>
/* Background */
.theme--dark.v-application,
.theme--light.v-application {
  background: #2f495e !important;
}

.bg-icon {
  width: 100%;
  transform: translate(0, 20%);
  position: absolute;
}

.bg-icon > div {
  margin: auto;
}

.theme--dark.v-footer,
.theme--light.v-footer {
  background-color: transparent !important;
}

/* Reactive Web */
.menu,
.container {
  width: 100% !important;
  max-width: 1200px !important;
}

/* Menu Design */
.menu {
  max-height: 50px;
  margin: auto;
}

.menu-wrap {
  list-style-type: none;
  margin: 0 !important;
  padding: 0 !important;
}

.menu-wrap > li {
  float: left;
  margin-left: 0 !important;
  margin-right: 1.2rem;
  padding: 0;
  border: 0;
  color: #fff !important;
}

.v-toolbar__content {
  border-radius: 3px;
  border-left: 10px solid #fff;
  display: block !important;
}

header {
  margin-top: 13px !important;
  margin-bottom: 3rem !important;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet,
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent !important;
}

.v-application ul,
.v-application ol {
  padding-left: 0;
}

/* Basic Tag */
.theme--dark.v-btn.v-btn--has-bg {
  background-color: #0c8764 !important;
}

.theme--dark.v-btn.v-btn--has-bg:hover {
  background-color: #00ffb7 !important;
}

a {
  color: #00e3a3 !important;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  color: #00ffb7 !important;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  grid-column-gap: 12px;
}

.grid > div {
  display: grid;
  grid-gap: 30px;
  grid-column-gap: 12px;
  grid-auto-rows: min-content;
}

@media all and (max-width: 767px) {
  .grid {
    grid-template-columns: none;
  }
}

/* Glassorphism */
.box {
  width: 100%;
  height: fit-content;
  background: rgba(44 62 80 / 80%);
  box-shadow: 0 8px 32px 0 rgba(31 38 135 / 37%);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255 255 255 / 18%);
  padding-left: 1rem;
  padding-right: 1rem;
}

.box-purple {
  width: 100%;
  height: fit-content;
  background: rgba(60 75 171 / 25%);
  box-shadow: 0 8px 32px 0 rgba(31 38 135 / 37%);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255 255 255 / 18%);
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Line */
hr {
  border: 1px solid rgba(0 0 0 / 25%);
  margin-top: 5px;
  margin-bottom: 8px;
}
</style>
