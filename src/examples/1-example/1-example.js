import Graph from '../../../model/Graph.js';
import { welsh_powell } from '../../algorithms/welsh_powell.js';
const graph = new Graph([]);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

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
  graph.addEdges('A', 'H');
  graph.addEdges('A', 'B');
  graph.addEdges('H', 'I');
  graph.addEdges('H', 'J');
  graph.addEdges('H', 'K');
  graph.addEdges('H', 'G');
  graph.addEdges('G', 'F');
  graph.addEdges('G', 'K');
  graph.addEdges('I', 'J');
  graph.addEdges('I', 'D');
  graph.addEdges('J', 'K');
  graph.addEdges('K', 'E');
  graph.addEdges('K', 'D');
  graph.addEdges('F', 'E');
  graph.addEdges('D', 'C');
  graph.addEdges('B', 'D');
};

export default run;
