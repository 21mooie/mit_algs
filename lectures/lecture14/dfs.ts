import { Graph } from "../../utils/Graph";
import { GraphNode } from "../../utils/Node";

const parent = new Map<GraphNode, GraphNode>();

const dfs = (graph :Graph) :Map<GraphNode, GraphNode> => {
    for (const vertex of graph.vertices){
        if(!parent.has(vertex)){
            dfsVisit(vertex, null)
        }
    }
    return parent;
};

const dfsVisit = (vertex: GraphNode, parentNode: GraphNode) => {
    parent.set(vertex, parentNode);
    for(const neighbor of vertex.neighbors){
        if(!parent.has(neighbor)){
            dfsVisit(neighbor, vertex);
        }
    }
}

export default dfs;

