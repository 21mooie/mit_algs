import { WeightedGraph } from "../../utils/Graph";
import initSingleSource from "../../utils/initSingleSource";
import { SuperGraphNode } from "../../utils/Node";
import MinPriorityQueue from "../../utils/MinPriorityQueue";
import relax from "../../utils/relax";

// Dijksta's works by using a greedy algorithm to consistently find the shortest path
// in a graph a non-negative weighted graph. 
// This algorithm not only finds the shortest distance from one vertex to another
// it finds the shortest distance from one vertex to all other vertexes in the graph.
const dijkstra = (graph :WeightedGraph, source :SuperGraphNode) :WeightedGraph => {
    graph = initSingleSource(graph, source);
    const set = new Set();
    const queue = new MinPriorityQueue(constructNewArray(graph.vertices), 'currDistance');
    while(queue.heap.getHeapSize() > 0){
        const curr :SuperGraphNode = queue.extractMin();
        set.add(curr);
        for(let weightedNeighbor of curr.weightedNeighbors){
            let vertex :SuperGraphNode  = weightedNeighbor.neighbor;
            let weight :number = weightedNeighbor.weight;
            vertex = relax(vertex, curr, weight);
        }
    }
    return graph;
};

function constructNewArray(oldArray :any[]) :any[] {
    let array = [];
    for(let i=0; i<oldArray.length; i++){
        array.push(oldArray[i]);
    }
    return array;
}


export default dijkstra;