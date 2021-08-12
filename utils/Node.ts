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
    neighbors :GraphNode[];
    constructor(val, neighbors = []){
        super(val);
        this.neighbors = neighbors;
    }
}

interface weightedNeighbor {
    neighbor: SuperGraphNode;
    weight: number;
}


export class SuperGraphNode extends GraphNode{
    currDistance :number;
    parent: SuperGraphNode;
    weightedNeighbors: weightedNeighbor[];
    constructor(val, weightedNeighbors = [], currDistance = null, parent = null){
        super(val);
        this.weightedNeighbors = weightedNeighbors;
        this.currDistance = currDistance;
        this.parent = parent;
    }
}