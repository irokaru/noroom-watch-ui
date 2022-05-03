<template>
  <div id="weather">
    <div class="main">{{ weather.weather }}</div>
    <div class="temp-max">{{ getTempMax() }}</div>
    <div class="temp-min">{{ getTempMin() }}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Weather } from "@/domain/Weather";

@Options({
  props: {
    weather: { required: true, type: Weather },
  },
})
export default class WeatherComponent extends Vue {
  public weather!: Weather;

  getTempMax(): string {
    return this.weather.temp_max.toFixed(1);
  }
  getTempMin(): string {
    return this.weather.temp_min.toFixed(1);
  }
}
</script>
