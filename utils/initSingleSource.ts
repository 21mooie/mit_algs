import { WeightedGraph } from "./Graph";
import { SuperGraphNode } from "./Node";

const initSingleSource = (graph: WeightedGraph, source: SuperGraphNode): WeightedGraph=> {
    for(const vertex of graph.vertices){
        vertex.currDistance = Number.MAX_SAFE_INTEGER;
        vertex.parent = null;
    }
    source.currDistance = 0;
    return graph;
};

export default initSingleSource;