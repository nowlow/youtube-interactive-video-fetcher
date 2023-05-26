import { Player } from "./types";

function exitCondition(player: Player): boolean | "NOTSET" {
  const { shortDescription, title } = player.videoDetails;

  return !shortDescription
        .toLowerCase()
        .includes("la vidéo dont vous êtes le héron") &&
      (title !== "." &&
      !!title.replaceAll('ㅤ', '').length)
}

export default exitCondition;
