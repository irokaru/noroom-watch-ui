<template>
  <div id="time">
    <div class="date">
      {{ day() }}
    </div>

    <div class="times">
      {{ time() }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PropType } from "@vue/runtime-core";
import { formatDate } from "@/utils/Time";

@Options({
  props: {
    date: { required: true, type: Object as PropType<Date> },
  },
})
export default class TimeComponent extends Vue {
  public date!: Date;

  day(): string {
    return formatDate(this.date, "MM/dd WW");
  }

  time(): string {
    return formatDate(this.date, "hh:mm:ss");
  }
}
</script>
