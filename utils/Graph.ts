import { GraphNode } from "./Node";

export class Graph{
    vertices :GraphNode[];
    constructor(vertices = []){
        this.vertices = vertices;
    }
}