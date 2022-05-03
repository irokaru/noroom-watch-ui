<template>
  <div id="weather">
    <div class="main">{{ weather.main }}</div>
    <div class="temp-max">{{ weather.temp_max }}</div>
    <div class="temp-min">{{ weather.temp_min }}</div>
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
}
</script>
