import { WeightedGraph } from "../../utils/Graph";
import initSingleSource from "../../utils/initSingleSource";
import { SuperGraphNode } from "../../utils/Node";
import MinPriorityQueue from "../../utils/MinPriorityQueue";
import relax from "../../utils/relax";

// Dijksta's works by using a greedy algorithm to consistently find the shortest path
// in a graph a non-negative weighted graph. 
// This algorithm not only finds the shortest distance from one vertex to another
// it finds the shortest distance from one vertex to all other vertexes in the graph.
const dijkstra = (graph :WeightedGraph, source :SuperGraphNode, target :SuperGraphNode) :WeightedGraph => {
    graph = initSingleSource(graph, source);
    const set = new Set();
    const queue = new MinPriorityQueue(graph.vertices, 'currDistance');
    // while(queue.length > 0){
    //     let curr = extractMin(queue);
    //     set.add(curr);
    //     for(let weightedVertex of curr.weightedNeighbors){
    //         let vertex  = weightedVertex.vertex;
    //         let weight = weightedVertex.weight;
    //         weightedVertex = relax(vertex, curr, weight);
    //     }
    //     return graph;
    // }
    return graph;
};


export default dijkstra;