<template>
  <v-app>
    <!-- Header Start -->
    <v-app-bar flat class="menu">
      <div>
        <h3>Seokhyun Jang</h3>
      </div>
      <div>
        <ul class="menu-wrap">
          <li>홈</li>
          <li>보유기술</li>
          <li>대표 프로젝트</li>
          <li>철학과 목표</li>
          <li>블로그</li>
        </ul>
      </div>
    </v-app-bar>
    <!-- Header End -->

    <!-- Background IMG Start -->
    <div class="bg-icon">
      <v-col cols="10" sm="8" md="5" xl="3">
        <v-img lazy-src="/virus.png" src="/virus.png" />
      </v-col>
    </div>
    <!-- Background IMG End -->

    <!-- Main Start -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <!-- Main End -->

    <!-- Footer Start -->
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <!-- Footer End -->
  </v-app>
</template>

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

/* Menu Design */
.menu {
  width: 100%;
  max-width: 1200px;
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
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background: transparent;
}
.v-application ul,
.v-application ol {
  padding-left: 0;
}
</style>
