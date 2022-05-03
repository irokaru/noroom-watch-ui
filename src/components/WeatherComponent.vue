<template>
  <div id="weather">
    <div class="main"><fa :icon="getWeatherSolidIcon()" /></div>
    <div class="temp-max">{{ getTempMax() }}℃</div>
    <div class="temp-min">{{ getTempMin() }}℃</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Weather } from "@/domain/Weather";

import { weatherToSolidIcon } from "@/utils/Fontawesome";

@Options({
  props: {
    weather: { required: true, type: Weather },
  },
})
export default class WeatherComponent extends Vue {
  public weather!: Weather;

  getWeatherSolidIcon(): string[] {
    return weatherToSolidIcon(this.weather.weather);
  }

  getTempMax(): string {
    return this.weather.temp_max.toFixed(1);
  }
  getTempMin(): string {
    return this.weather.temp_min.toFixed(1);
  }
}
</script>
