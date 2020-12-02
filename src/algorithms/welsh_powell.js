import { uniao } from '../utils/uniao.js';

export const welsh_powell = (Graph) => {
  //achar valence para cada vertex = .size in edges
  let colors = 1;
  //lista em ordem decrecente: .sort(comparator)
  const graphColoring = Graph.sortDescending();
  for (let i = 0; i < graphColoring.length - 1; i++) {
    const vertex = graphColoring[i];
    if (!vertex.color) {
      vertex.color = colors; //Colorir o vertice se não possui cor
      let ingnoreEdges = new Set(vertex.edges); //criar array com vertices adjacentes que não podem receber a mesma cor
      //intera sobre o grafo colorindo vertices que não possuem cor e não é adjacente ao vertice colorido
      for (let j = i + 1; j < graphColoring.length; j++) {
        const { color, edges, label } = graphColoring[j];
        //se um vertice não possui cor e não esta no array de adjacentes, colorir ele
        if (!color && !ingnoreEdges.has(label)) {
          graphColoring[j] = {
            ...graphColoring[j],
            color: colors,
          };
          //adiciona os adjacentes do array colorido aos vertices a ser ingnorados (adjacentes aos coloridos)
          ingnoreEdges = uniao(ingnoreEdges, edges);
        }
      }
      colors++;
    }
  }
  const chromaticNumber = colors - 1;
  return { graphColoring, chromaticNumber };
};
