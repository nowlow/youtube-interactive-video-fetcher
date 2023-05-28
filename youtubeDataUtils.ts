import { Player } from "./types";

function exitCondition(player: Player): boolean | "NOTSET" {
  // return true if the video is out of the path, false if it's still on
  // NOTSET by default

  return "NOTSET";
}

export type YTNodeInfos = undefined;

function getYTNodeInfos(player: Player): YTNodeInfos {
  // return the data that you want to keep in the { infos }
  // attribute of each node

  return undefined;
}

export { exitCondition, getYTNodeInfos };
