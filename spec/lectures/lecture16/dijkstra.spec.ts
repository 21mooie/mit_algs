import dijkstra from "../../../lectures/lecture16/dijkstra";
import { WeightedGraph } from "../../../utils/Graph";
import { SuperGraphNode } from "../../../utils/Node";

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
        graph = dijkstra(graph, s, x);
    });
});