import { Graph } from "../../utils/Graph";
import { GraphNode } from "../../utils/Node";

let graph = new Graph();
let shirt = new GraphNode('shirt');
let belt = new GraphNode('belt');
let tie = new GraphNode('tie');
let jacket = new GraphNode('jacket');
shirt.neighbors = [belt, tie];
belt.neighbors = [jacket];
tie.neighbors = [jacket];
graph.vertices = [jacket, belt, tie, shirt];

// use for DAGs to find shortest path through
const topologicalSort = (graph :Graph) => {
    //dfs for each vertex
    

}

console.log(topologicalSort(graph));

export default topologicalSort;