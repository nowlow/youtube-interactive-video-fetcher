# Youtube Interactive Video Fetcher
Find all the alternatives and paths for an interactive video on youtube.

> ⚠️ Worth noting:  
> - This code uses undocumented part of the Youtube API, it may not be well supported in the future.  
> - Also it relies SOLELY on the endscreen videos, if the interactive video uses other kind of methods to lead you to the alternative ending, this script won't be able to fetch it.  

## Types
| Type | Description |
| - | - |
| Player | The youtube API call response type, it has been generated from a single reponse so it might not be accurate. If you find anything incorrect open a PR I'll be happy to merge it. It contains all the infos about the video, the next videos and the channel.  
| YTNode | Data as it's saved in the `nodes.json` file |


## How to use?
Before you can fetch all of you're favorite's interactive video's paths, you'll have to do some changes to the code.  
### Edit `exitCondition.ts`
There is a function in that files that takes a `Player`. It should return a boolean, `true` if this branch is over, `false` if it should continue to dig.
### Find your start video id
In a youtube URL, it's typically `https://www.youtube.com/watch?v=<video_id>`.
### Don't forget to run `npm i`
It does not look like much but it's worth at least mentioning it.
### Start the script
> If you want to change the output dir, don't forget to set the `YTF_OUTPUT_DIR` environment variable. It would be `./output` by default.
```
$ npm start <video id>
```
This will generate a `nodes.json` and an `errors.json` file (hopefully `errors.json` is empty).
`nodes.json` contains a list of all the videos found, with their thumbnail's url (hosted by youtube), their id, and a list of the next videos.
It will also generate a `thumbnails/` folder in the output directory, with all the video's thumbnails named by id.
## Risks
Nothing is risk-free, but it seems to be pretty safe to make loads of these calls with little sleep time. I adjusted the request headers and body to contain the least informations possible.  
I added a sleep function that will wait between 50 and 100 ms between the recursives. Even if I don't think that's the case, I added some randomness to escape the bot detectors of youtube (lol). If you take no sleep time, you might end up with connection resets.
## Example
This whole project was initiated by ["La Vidéo Dont Vous Êtes Le Héron"](https://www.youtube.com/watch?v=aYFMOPMH-Eo) by INERNET. So the example will use this video.  
`exitCondition.ts`
```ts
import { Player } from "./types";

function exitCondition(player: Player): boolean | "NOTSET" {
  const { shortDescription, title } = player.videoDetails;

  // A video that matches this condition is out of the interactive video scope but will be included in the tree
  return !shortDescription
        .toLowerCase()
        .includes("la vidéo dont vous êtes le héron") &&
      (title !== "." &&
      !!title.replaceAll('ㅤ', '').length)
}

export default exitCondition;
```
And then:
```
$ npm start aYFMOPMH-Eo
```
To be fully honest, it has only been tested on this video, but I'm pretty confident that it would work unless you don't find an exit condition, and y'know, fiction is not doing great on youtube these days, so it's hard to find good creators producing these kind of videos.  
## Visualizing the data
Having the data is good but visualizing it is way better. *Take that front-end haters*.  
The best library I found for this usecase is `cytoscape.js` with a `dagre` algorithm. It might not be the best combo but it's pretty decent and does the work. After a few tweeks it fully usable and barely lacks features.  
You can see the final result [here](https://vdvh.naoufel.co). (Be careful it's French).  
I also included in this repo a quick way to visualize the data [here](/visualizer/).
## Conclusion
Hey, if you made it here you're the only person fully reading the readmes on github, and not just copying the commands and the code, big respect for that.  
If you want to discuss anytime, follow me on [twitter](https://twitter.com/nowlow_).