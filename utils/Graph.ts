import { GraphNode, SuperGraphNode } from "./Node";

export class Graph{
    vertices :GraphNode[];
    constructor(vertices = []){
        this.vertices = vertices;
    }
};

interface Edge{
    origin :SuperGraphNode;
    destination :SuperGraphNode;
    weight :number;
}

export class WeightedGraph{
    vertices: SuperGraphNode[];
    edges :Edge[];
    constructor(vertices = [], edges = []){
        this.vertices = vertices;
        this.edges = edges;
    }
};