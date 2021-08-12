import dijkstra from "../../../lectures/lecture16/dijkstra";
import { WeightedGraph } from "../../../utils/Graph";
import { LinkedListNode, SuperGraphNode } from "../../../utils/Node";

describe('Dijkstra', () => {
    let graph = new WeightedGraph();
    let s: SuperGraphNode;
    let t: SuperGraphNode;
    let x: SuperGraphNode;
    let y: SuperGraphNode;
    let z: SuperGraphNode;
    beforeAll(() => {
        s = new SuperGraphNode('s');
        t = new SuperGraphNode('t');
        x = new SuperGraphNode('x');
        y = new SuperGraphNode('y');
        z = new SuperGraphNode('z');
        s.weightedNeighbors = [
            {
                neighbor: t,
                weight: 10
            },
            {
                neighbor: y,
                weight: 5
            }
        ];
        t.weightedNeighbors = [
            {
                neighbor: y,
                weight: 2
            },
            {
                neighbor: x,
                weight: 1
            }
        ];
        x.weightedNeighbors = [
            {
                neighbor: z,
                weight: 4
            }
        ];
        y.weightedNeighbors = [
            {
                neighbor: t,
                weight: 3
            },
            {
                neighbor: x,
                weight: 9
            },
            {
                neighbor: z,
                weight: 2
            }
        ];
        z.weightedNeighbors = [
            {
                neighbor: s,
                weight: 7
            },
            {
                neighbor: x,
                weight: 6
            }
        ];
        graph.vertices = [t, x, y, s, z];
    });

    it('should be able to return the shortest path on this graph from s to x.', () => {
        // this should return a graph with the shortest paths from the starting vertex to
        // all remaining vertices in the graph
        graph = dijkstra(graph, s);

        // build path by following parent pointers of desired vertex back to source
        // to give shortest path
        let vertex :SuperGraphNode = z;
        let list = new LinkedListNode(vertex.val);
        while(vertex.val !== s.val){
            vertex = vertex.parent;
            let newNode = new LinkedListNode(vertex.val, list);
            list = newNode;
        }
        
        // create array for comparison
        let array = [];
        while(list){
            array.push(list.val);
            list = list.next;
        }
        expect(array).toEqual(['s', 'y', 'z']);
    });
});