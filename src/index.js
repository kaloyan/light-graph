/*
 * Lightweight Javascript Graph Library
 * Copyright Kaloyan Ivanov
 */

export default class LightGraph {
  constructor() {
    this.graph = {};
    this.routes = [];
  }

  addNode(node) {
    this.graph[node] = [];
  }

  addEdge(node, edge) {
    this.graph[node].push(edge);
  }

  print() {
    console.log(this.graph);
  }

  traverse(startNode = "") {
    const routes = [];

    const findRoute = (node, visited = []) => {
      visited.push(node);

      for (let edge of this.graph[node]) {
        if (!visited.includes(edge)) {
          findRoute(edge, [...visited]);
        } else if (edge === startNode) {
          if (visited.length > 2 && visited.length < 4) {
            routes.push([...visited, edge]);
            // console.log(visited.join(' -> '));
          }
        }
      }
    };

    findRoute(startNode, []);
    routes.sort((a, b) => a.length - b.length);
    this.routes = [...routes];
  }
}

// module.exports = LightGraph;
