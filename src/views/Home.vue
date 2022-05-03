<template>
  <div class="home">
    <TimeComponent :date="now" :value="value" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TimeComponent from "@/components/TimeComponent.vue";
import { IntervalManager } from "@/utils/IntervalManager";

@Options({
  components: {
    TimeComponent,
  },
})
export default class Home extends Vue {
  public now!: Date;
  public value = 0;

  private setTime() {
    this.now = new Date();
  }

  created() {
    this.setTime();

    IntervalManager.getInstance().setInterval(
      "_",
      () => this.value++,
      500,
      this
    );
    IntervalManager.getInstance().setInterval("time", this.setTime, 500, this);
  }
}
</script>
