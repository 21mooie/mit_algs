import { Graph } from "../../utils/Graph";
import { GraphNode, LinkedListNode } from "../../utils/Node";

// use for DAGs to find shortest path through
const topologicalSort = (graph :Graph) :string[] => {
    //dfs and use finishing times to add to front of list
    let list :LinkedListNode = dfsWithFinishTimes(graph);
    let array :string[] = [];
    while(list){
        array.push(list.val);
        list = list.next;
    }
    return array;
}

const parent = new Map<GraphNode, GraphNode>();
let topSort: LinkedListNode = null;

const dfsWithFinishTimes = (graph :Graph): LinkedListNode => {
    for (const vertex of graph.vertices){
        if(!parent.has(vertex)){
            dfsVisitWithFinishTimes(vertex, null)
        }
    }
    return topSort;
};

const dfsVisitWithFinishTimes = (vertex: GraphNode, parentNode: GraphNode) => {
    parent.set(vertex, parentNode);
    for(const neighbor of vertex.neighbors){
        if(!parent.has(neighbor)){
            dfsVisitWithFinishTimes(neighbor, vertex);
        }
    }
    let node = new LinkedListNode(vertex.val, topSort);
    topSort = node;
};

export default topologicalSort;