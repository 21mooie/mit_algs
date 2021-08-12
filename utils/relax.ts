import { SuperGraphNode } from "./Node";

const relax = (vertex: SuperGraphNode, potentialParent: SuperGraphNode, weight: number): SuperGraphNode => {
    if(vertex.currDistance > potentialParent.currDistance + weight){
        vertex.currDistance = potentialParent.currDistance + weight;
        vertex.parent = potentialParent;
    }
    return vertex;
}

export default relax;