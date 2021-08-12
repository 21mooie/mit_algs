abstract class Heap{
    array :any[];
    length :number;
    heapSize :number;
    compareProp :string;
    constructor(array :any[], compareProp :string){
        this.array = array;
        this.length = this.array.length;
        this.array.unshift(null);
        this.compareProp = compareProp;
        this.buildHeap();
    }

    getLength() :number {
        return this.length;
    }

    getHeapSize() :number {
        return this.heapSize;
    }

    parent(idx :number) :any{
        return this.array[Math.floor(idx/2)];
    }

    left(idx :number) :any{
        return 2*idx;
    }

    right(idx :number) :any{
        return 2*idx+1;
    }

    abstract buildHeap() :void

    abstract heapify(idx :number) :void

    abstract compare(initial :any, toBeCompared :any) :boolean
};

export class MinHeap extends Heap{
    constructor(array :any[], compareProp){
        super(array, compareProp);
    }

    buildHeap(){
        this.heapSize = this.length;
        for (let i = Math.floor(this.heapSize/2); i>0; i--){
            this.heapify(i);
        }
    }

    heapify(idx :number){
        const left = this.left(idx);
        const right = this.right(idx);
        let min;
        if(left <= this.heapSize && this.compare(this.array[left], this.array[idx])){
            min = left;
        } else {
            min = idx;
        }
        if(right <= this.heapSize && this.compare(this.array[right], this.array[idx])){
            min = right;
        }
        if(min != idx){
            const temp = this.array[idx];
            this.array[idx] = this.array[min];
            this.array[min] = temp;
            this.heapify(min);
        }
    }

    compare(initial :any, toBeCompared :any) :boolean{
        if (initial[this.compareProp] < toBeCompared[this.compareProp]){
            return true;
        }
        return false;
    }

    getMin() :any[]{
        return this.array[1];
    }

    extractMin() :any{
        if(this.getHeapSize() < 1){
            throw new Error("Heap underflow");
        }
        const min = this.getMin();
        this.array[1] = this.array[this.getHeapSize()];
        this.heapSize--;
        this.heapify(1);
        return min;
    }
 }