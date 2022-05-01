import { DomainBase } from "./Base";

export interface IRoomInfomationValueType {
  temperature: number;
  humidity: number;
}

export class RoomInformation implements DomainBase, IRoomInfomationValueType {
  readonly temperature!: number;
  readonly humidity!: number;

  constructor(init: Partial<IRoomInfomationValueType>) {
    Object.assign(this, init);
  }

  getJson() {
    return {
      temperature: this.temperature,
      humidity: this.humidity,
    };
  }
}

export const createRoomInfomation = (
  init: Partial<RoomInformation>
): RoomInformation => {
  return new RoomInformation(init);
};
