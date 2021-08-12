import { GraphNode, SuperGraphNode } from "./Node";

export class Graph{
    vertices :GraphNode[];
    constructor(vertices = []){
        this.vertices = vertices;
    }
};

export class WeightedGraph{
    vertices: SuperGraphNode[];
    constructor(vertices = []){
        this.vertices = vertices;
    }
};