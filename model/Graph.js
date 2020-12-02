class Graph {
  constructor(vertices) {
    this._vertices = vertices;
  }

  addVertex(label) {
    const Vertex = {
      color: '',
      edges: new Set(),
      label: label,
    };
    this._vertices.push(Vertex);
  }

  addEdges(labelA, labelB) {
    this._vertices.forEach((vertex) => {
      vertex.label === labelA && vertex.edges.add(labelB);
      vertex.label === labelB && vertex.edges.add(labelA);
    });
  }

  showColors(title) {
    console.log(title);
    this._vertices.forEach(({ color, label }) => {
      let string = `${label} received color${color}`;
      console.log(string);
    });
  }

  showGraph(title) {
    console.log(title);
    this._vertices.forEach(({ label, edges }) => {
      let string = `${label} => `;
      for (let edge of edges.values()) string += `${edge}, `;
      console.log(string);
    });
  }

  //retorna um array ordenado em ordem decrescente levando em consideração
  //o grau dos vertices.
  sortDescending() {
    return this._vertices.sort((vertexA, vertexB) => {
      const valenceA = vertexA.edges.size;
      const valenceB = vertexB.edges.size;

      if (valenceA < valenceB) return 1;
      if (valenceA > valenceB) return -1;
      return 0;
    });
  }
}

export default Graph;
