import path from "path";
import fs from "fs";
import axios from "axios";
import { Player, YTNode } from "./types";
import exitCondition from "./exitCondition";

console.log(`Youtube interactive video fetcher!`);

if (process.argv.length !== 3) {
  console.error(`Invalid use: npm start <start video id>`);
  process.exit(1);
}

const videoId = process.argv[2];

const output = "./output" || process.env["YTF_OUTPUT_DIR"];

if (!process.env["YTF_OUTPUT_DIR"]) {
  console.warn(`No env YTF_OUTPUT_DIR, using ${output} by default`);
}

if (!fs.existsSync(path.join(__dirname, output))) {
  fs.mkdirSync(path.join(__dirname, output));
}

const stats = fs.lstatSync(path.join(__dirname, output));

if (!stats.isDirectory()) {
  console.error(output, "is not a directory");
  process.exit(1);
}

const nodes: YTNode[] = [];
const errors: { id: string; error?: any; data?: any }[] = [];

function getNextVideos(response: Player, videoId: string) {
  if (!response?.endscreen?.endscreenRenderer?.elements) return [];

  const next = response.endscreen.endscreenRenderer.elements.map((element) => {
    if (
      element.endscreenElementRenderer.style !== "VIDEO" ||
      !element.endscreenElementRenderer.endpoint.watchEndpoint
    ) {
      return undefined;
    }

    try {
      return {
        id: element.endscreenElementRenderer.endpoint.watchEndpoint.videoId,
        style: element.endscreenElementRenderer.style,
      };
    } catch (e) {
      console.error(e);
      errors.push({ id: videoId, data: response });
      return undefined;
    }
  });

  return (
    next
      .filter((video) => video && video.style === "VIDEO")
      // @ts-ignore undefined has been sorted out before
      .map(({ style: _, id }) => id)
  );
}

function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sleep = () =>
  new Promise((r) => {
    const time = generateRandomNumber(50, 100);
    setTimeout(r, time);
  });

async function getVideo(videoId: string) {
  const data = JSON.stringify({
    context: {
      client: {
        clientName: "WEB",
        clientVersion: "2.20230523.00.00",
      },
    },
    videoId,
  });

  const config = {
    method: "post",
    url: "https://www.youtube.com/youtubei/v1/player",
    headers: {
      Host: "www.youtube.com",
      Accept: "*/*",
      "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "X-Origin": "https://www.youtube.com",
      Origin: "https://www.youtube.com",
      TE: "trailers",
    },
    data,
  };

  return axios<Player>(config);
}

async function recursiveVideoFinder(videoId: string) {
  if (nodes.find((video) => video.id === videoId)) {
    return;
  }

  try {
    const response = await getVideo(videoId);

    const thumbnails = response.data.videoDetails.thumbnail.thumbnails;

    const shouldExit = exitCondition(response.data);

    if (shouldExit === "NOTSET") {
      console.error("You must edit exitCondition.ts for this program to work");
      process.exit(1);
    }

    if (shouldExit === true) {
      console.log(
        `${videoId} is not in the main path ("${response.data.videoDetails.title}")`
      );
      nodes.push({
        id: videoId,
        thumbnail: thumbnails[Math.ceil(thumbnails.length / 2) - 1].url,
        next: [],
      });
      return;
    }

    const next = getNextVideos(response.data, videoId);

    nodes.push({
      id: videoId,
      thumbnail: thumbnails[Math.ceil(thumbnails.length / 2) - 1].url,
      next,
    });

    console.log(
      `${videoId} has ${next.length} alternative ending (${next
        .map((v) => v)
        .join(", ")})`
    );

    for (const video of next) {
      await recursiveVideoFinder(video);

      await sleep();
    }
  } catch (e) {
    console.error("[", videoId, "]", e);
    errors.push({ id: videoId, error: e });
  }
}

import saveThumbnails from "./thumbnails";

recursiveVideoFinder(videoId).then(async () => {
  console.log(
    `total of ${nodes.length} videos for ${
      nodes.filter((v) => v.next.length === 0).length
    } endings`
  );

  fs.writeFileSync(
    path.join(__dirname, output, "nodes.json"),
    JSON.stringify(nodes)
  );
  fs.writeFileSync(
    path.join(__dirname, output, "errors.json"),
    JSON.stringify(errors)
  );

  await saveThumbnails(nodes);
});
