<template>
  <div class="home">
    <time-component :date="now" :value="value" />
    <room-component :room="room" />
    <weather-component :weather="weather" />
    <shadow-wrapper :isNight="isNight()" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TimeComponent from "@/components/TimeComponent.vue";
import RoomComponent from "@/components/RoomComponent.vue";
import WeatherComponent from "@/components/WeatherComponent.vue";
import ShadowWrapper from "@/components/ShadowWrapper.vue";
import { IntervalManager } from "@/utils/IntervalManager";
import { between } from "@/utils/Time";
import {
  createRoomInfomation,
  RoomInformation,
} from "@/domain/RoomInfomations";
import { createWeather, Weather } from "@/domain/Weather";
import { fetchRoomInfomation } from "@/application/services/RoomService";
import { fetchWeather } from "@/application/services/WeatherService";

@Options({
  components: {
    TimeComponent,
    RoomComponent,
    WeatherComponent,
    ShadowWrapper,
  },
})
export default class Home extends Vue {
  public now!: Date;
  public room: RoomInformation = createRoomInfomation({
    temperature: 0,
    humidity: 0,
  });
  public weather: Weather = createWeather({
    weather: "晴",
    temp_max: 0,
    temp_min: 0,
  });
  public value = 0;

  private setTime() {
    this.now = new Date();
  }

  private async updateRoom() {
    const res = await fetchRoomInfomation();

    if (!res) return;

    this.room = res;
  }

  private async updateWeather() {
    const res = await fetchWeather();

    if (!res) return;

    this.weather = res;
  }

  public isNight() {
    return between(this.now, "00:00", "08:00");
  }

  created() {
    this.setTime();
    this.updateRoom();
    this.updateWeather();

    const im = IntervalManager.getInstance();

    im.setInterval("_", () => (this.value = (this.value + 1) % 10), 500, this);
    im.setInterval("time", this.setTime, 500, this);
    im.setInterval("room", this.updateRoom, 10000, this);
    im.setInterval("weather", this.updateWeather, 15000, this);
  }
}
</script>
