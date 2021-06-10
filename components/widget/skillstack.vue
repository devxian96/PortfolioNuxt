<template>
  <v-tooltip bottom>
    <template #activator="{ on, attrs }">
      <v-icon x-large v-bind="attrs" v-on="on"> {{ icon }} </v-icon>
    </template>
    <span>{{ summary }}</span>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      type: String,
      default: '',
    },
    summary: {
      type: String,
      default: '',
    },
  },
})
</script>
