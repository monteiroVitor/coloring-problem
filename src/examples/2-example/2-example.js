import Graph from '../../../model/Graph.js';
import { welsh_powell } from '../../algorithms/welsh_powell.js';
const graph = new Graph([]);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

const run = () => {
  addVertices(vertices);
  defineEdges();
  graph.showGraph('*Graph');
  showData();
};

const showData = () => {
  const { graphColoring, chromaticNumber } = welsh_powell(graph);
  const colorfulGraph = new Graph(graphColoring);
  colorfulGraph.showColors('*Colors');
  console.log(`Chromatic Number: ${chromaticNumber}`);
};

const addVertices = (vertices) => {
  for (let i = 0; i < vertices.length; i++) graph.addVertex(vertices[i]);
};

const defineEdges = () => {
  graph.addEdges('A', 'B');
  graph.addEdges('A', 'C');
  graph.addEdges('A', 'D');
  graph.addEdges('A', 'E');
  graph.addEdges('A', 'F');
  graph.addEdges('B', 'G');
  graph.addEdges('B', 'C');
  graph.addEdges('C', 'G');
  graph.addEdges('D', 'G');
  graph.addEdges('D', 'E');
  graph.addEdges('D', 'F');
  graph.addEdges('E', 'G');
  graph.addEdges('E', 'F');
  graph.addEdges('F', 'G');
};

export default run;
