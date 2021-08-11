export class Node{
    val :any;
    constructor(val :any){
        this.val = val;
    }
}

export class LinkedListNode extends Node{
    next :LinkedListNode;
    constructor(val, next = null){
        super(val);
        this.next = next;
    }
}

export class GraphNode extends Node{
    neighbors: GraphNode[];
    constructor(val, neighbors = []){
        super(val);
        this.neighbors = neighbors;
    }
}