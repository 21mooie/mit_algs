import { WeightedGraph } from "../../utils/Graph";
import initSingleSource from "../../utils/initSingleSource";
import { SuperGraphNode } from "../../utils/Node";
import relax from "../../utils/relax";

interface bellmanFordResult{
    solvable :boolean,
    graph :WeightedGraph,
}

const bellmanFord = (graph :WeightedGraph, source :SuperGraphNode) :bellmanFordResult => {
    graph = initSingleSource(graph, source);
    for(let i=1; i<graph.vertices.length; i++){
        for(const edge of graph.edges){
            relax(edge.destination, edge.origin, edge.weight);
        }
    }
    for( const edge of graph.edges){
        if(edge.destination.currDistance > edge.origin.currDistance + edge.weight){
            return {
                solvable: false, 
                graph
            };
        }
    }
    return {
        solvable: true,
        graph
    };
};

export default bellmanFord;