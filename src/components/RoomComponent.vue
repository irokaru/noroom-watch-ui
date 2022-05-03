<template>
  <div id="room">
    <div class="temperature">{{ room.temperature }}℃</div>
    <div class="humidity">{{ room.humidity }}％</div>
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
}
</script>

<style></style>
