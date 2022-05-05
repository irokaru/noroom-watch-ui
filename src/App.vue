<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { onFull } from "./utils/Screen";

export default class App extends Vue {
  created() {
    document.body.addEventListener("click", (e) => onFull(document));
  }
}
</script>
