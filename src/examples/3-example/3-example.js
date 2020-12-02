import Graph from '../../../model/Graph.js';
import { welsh_powell } from '../../algorithms/welsh_powell.js';
const graph = new Graph([]);
const vertices = ['A', 'B', 'C', 'D', 'E'];

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
  graph.addEdges('B', 'D');
  graph.addEdges('C', 'E');
};

export default run;
