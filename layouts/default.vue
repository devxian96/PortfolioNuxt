<template>
  <v-app>
    <v-app-bar
      rounded
      dense
      dark
      class="ml-5 mr-5 mt-3"
      style="max-height: 45px"
    >
      test
    </v-app-bar>

    <!-- Background IMG Start -->
    <div class="bg-icon">
      <v-col cols="10" sm="8" md="5" xl="3">
        <v-img lazy-src="/virus.png" src="/virus.png" />
      </v-col>
    </div>
    <!-- Background IMG End -->

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
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
</style>
