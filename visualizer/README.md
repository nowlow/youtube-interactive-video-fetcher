# Visualizer
This is a simple webpage that displays the fetched data.  
You must start a server to avoid CORS issues.
## Setup
Assuming you've retreived all of your interactive video's data using this tool, you must move the `output/` folder into this directory's root, that should look like this:
```
visualizer
|- output/
  |- thumbnails/
  |- errors.json
  |- nodes.json
|- index.css
|- index.html
|- index.js
```
## Start
```
$ python3 -m http.server 8000 --bind 127.0.0.1
```
You now have access to <http://127.0.0.1:8000> displaying your nodes.