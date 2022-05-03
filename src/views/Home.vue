<template>
  <div class="home">
    <time-component :date="now" :value="value" />
    <room-component :room="room" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TimeComponent from "@/components/TimeComponent.vue";
import RoomComponent from "@/components/RoomComponent.vue";
import { IntervalManager } from "@/utils/IntervalManager";
import {
  createRoomInfomation,
  RoomInformation,
} from "@/domain/RoomInfomations";
import { fetchRoomInfomation } from "@/application/services/RoomService";

@Options({
  components: {
    TimeComponent,
    RoomComponent,
  },
})
export default class Home extends Vue {
  public now!: Date;
  public room: RoomInformation = createRoomInfomation({
    temperature: 0,
    humidity: 0,
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

  created() {
    this.setTime();
    this.updateRoom();

    const im = IntervalManager.getInstance();

    im.setInterval("_", () => this.value++ % 10, 500, this);
    im.setInterval("time", this.setTime, 500, this);
    im.setInterval("room", this.updateRoom, 10000, this);
  }
}
</script>
