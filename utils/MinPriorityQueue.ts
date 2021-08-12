import { MinHeap } from "./Heap";

export default class MinPriorityQueue{
    heap :MinHeap;
    compareProp :string;
    constructor(array :any[], compareProp :string){
        this.heap = new MinHeap(array, compareProp)
    }

    extractMin() :any{
        return this.heap.extractMin();
    }
};