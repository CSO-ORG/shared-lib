import { TIMEFRAME } from "./enums";

export type AVAILABILITY_PERIOD = {
  weekDay: number;
  timeframes: TIMEFRAME[];
};

export type PROFILE_PICTURE = {
  public_id: string;
  url: string;
};
