import { Player } from "./types";

function exitCondition(player: Player): boolean | "NOTSET" {
  // return true if the video is out of the path, false if it's still on
  // NOTSET by default

  return "NOTSET";
}

export default exitCondition;
