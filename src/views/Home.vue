<template>
  <div class="home">
    <TimeComponent :date="now" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TimeComponent from "@/components/TimeComponent.vue";

@Options({
  components: {
    TimeComponent,
  },
})
export default class Home extends Vue {
  public now!: Date;

  created() {
    this.now = new Date();
  }
}
</script>
