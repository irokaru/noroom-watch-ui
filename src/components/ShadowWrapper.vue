<template>
  <div id="shadow" :class="{ 'is-night': isNight }"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    isNight: { required: true, type: Boolean },
  },
})
export default class ShadowWrapper extends Vue {
  public isNight!: boolean;
}
</script>
