document.addEventListener("DOMContentLoaded", async function () {  
    const baseURL = window.location.origin;

    const myData = await (await fetch(`${baseURL}/output/nodes.json`)).json();

    let cyNodes = [];
    let cyEdges = [];

    myData.forEach((video) => {
      cyNodes.push({
        data: {
          id: video.id,
          thumbnail: `${baseURL}/output/thumbnails/${video.id}.jpg`,
        },
      });

      video.next.forEach((nextVideo) => {
        cyEdges.push({
          data: {
            id: video.id + "-" + nextVideo,
            source: video.id,
            target: nextVideo,
          },
        });
      });
    });

    cytoscape.use(cytoscapeDagre);

    const cy = cytoscape({
      container: document.getElementById("cy"),

      elements: {
        nodes: cyNodes,
        edges: cyEdges,
      },

      style: [
        {
          selector: "node",
          style: {
            "background-image": "data(thumbnail)",
            "background-fit": "cover",
            width: 168,
            height: 94,
            "border-radius": 10,
            shape: "rectangle",
          },
        },
        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "source-arrow-shape": "circle",
            "arrow-scale": 2,
          },
        },
        {
          selector: 'node.no-outgoing',
          style: {
            'border-color': 'red',
            'border-width': '3px'
          }
        },
      ],

      layout: {
        name: "dagre",
        animate: true,
        animationDuration: 500,
        animationEasing: "ease-out",
        avoidOverlap: true,
        fit: true,
        flow: undefined,
        infinite: false,
        maxSimulationTime: 5000,
        padding: 10,
        randomize: false,
        unconstrIter: 10,
        userConstIter: 10,
        allConstIter: 10,
      },
    });

    cy.nodes().forEach(node => {
      if (node.outgoers().empty()) {
        node.addClass('no-outgoing');
      }
    });

    cy.on("tap", "node", function (evt) {
      if (evt.originalEvent.shiftKey) return;
      const node = evt.target;
      const videoId = node.data("id");
      window.open(`https://www.youtube.com/watch?v=${videoId}`);
    });

    let previouslySelectedEdges;

    cy.on('click', 'node', (event) => {
      if (event.originalEvent.shiftKey) {
        event.preventDefault();
        if (previouslySelectedEdges) {
          previouslySelectedEdges.style({
            'line-color': '',
            'target-arrow-color': '',
            'source-arrow-color': '',
          });
        }
        let outgoingEdges = event.target.outgoers('edge');
        outgoingEdges.style({
          'line-color': 'red',
          'target-arrow-color': 'red',
          'source-arrow-color': 'red',
        });
        previouslySelectedEdges = outgoingEdges;
      }
    });
  });