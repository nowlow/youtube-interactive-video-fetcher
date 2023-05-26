
import axios from "axios";
import fs from 'fs';
import path from 'path';
import { YTNode } from "./types";

const output = "./output/thumbnails";

if (!fs.existsSync(path.join(__dirname, output))) {
  fs.mkdirSync(path.join(__dirname, output));
}

const stats = fs.lstatSync(path.join(__dirname, output));

if (!stats.isDirectory()) {
  console.error(output, "is not a directory");
  process.exit(1);
}

const saveThumbnails = async (nodes: YTNode[]) => {
    const fetchVideo = async (video: YTNode) => {
        try {
            const response = await axios.get(video.thumbnail, { responseType: 'stream' });

            const writer = fs.createWriteStream(path.join(__dirname, output, `${video.id}.jpg`));

            response.data.pipe(writer);

            return new Promise((resolve, reject) => {
                writer.on('finish', resolve);
                writer.on('error', reject);
            });
        } catch (e) {
            console.error('[THUMBNAILS:ERROR]', video.id, video.thumbnail);
        }
    }

    await Promise.all(nodes.map((video) => fetchVideo(video)));
}

export default saveThumbnails;