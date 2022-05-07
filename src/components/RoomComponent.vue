<template>
  <div id="room">
    <div class="temperature">
      <div class="icon">
        <fa :icon="['fas', 'temperature-half']" />
      </div>

      <div class="value">{{ getTemperature() }}℃</div>
    </div>

    <div class="humidity">
      <div class="icon">
        <fa :icon="['fas', 'droplet']" />
      </div>

      <div class="value">{{ room.humidity }}％</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RoomInformation } from "@/domain/RoomInfomations";

@Options({
  props: {
    room: { required: true, type: RoomInformation },
  },
})
export default class RoomComponent extends Vue {
  public room!: RoomInformation;

  getTemperature(): string {
    return this.room.temperature.toFixed(1);
  }
}
</script>
