import bellmanFord from "../../../lectures/lecture17/bellmanFord";
import { WeightedGraph } from "../../../utils/Graph";
import { SuperGraphNode } from "../../../utils/Node";

describe('Bellman-Ford', () => {
    let origGraph = new WeightedGraph();
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
                weight: 6
            },
            {
                neighbor: y,
                weight: 7
            }
        ];
        t.weightedNeighbors = [
            {
                neighbor: x,
                weight: 5
            },
            {
                neighbor: z,
                weight: -4
            },
            {
                neighbor: y,
                weight: 8
            }
        ];
        x.weightedNeighbors = [
            {
                neighbor: t,
                weight: -2
            }
        ];
        y.weightedNeighbors = [
            {
                neighbor: x,
                weight: -3
            },
            {
                neighbor: z,
                weight: 9
            }
        ];
        z.weightedNeighbors = [
            {
                neighbor: s,
                weight: 2
            },
            {
                neighbor: x,
                weight: 7
            }
        ];
        origGraph.vertices = [s,t,x,y,z];
        origGraph.edges = [
            {
                origin: s,
                destination: t,
                weight: 6
            },
            {
                origin: t,
                destination: x,
                weight: 5
            },
            {
                origin: x,
                destination: t,
                weight: -2
            },
            {
                origin: t,
                destination: z,
                weight: -4
            },
            {
                origin: z,
                destination: x,
                weight: 7
            },
            {
                origin: z,
                destination: s,
                weight: 2
            },
            {
                origin: s,
                destination: y,
                weight: 7
            },
            {
                origin: y,
                destination: x,
                weight: -3
            },
            {
                origin: y,
                destination: z,
                weight: 9
            },
            {
                origin: t,
                destination: y,
                weight: 8
            }
        ];
    });
    it('should be able to return the shortest path for a graph with negative cycles where possible and unreachable for vertices this is true for.', () => {
        let { solvable } = bellmanFord(origGraph, s);
        expect(solvable).toBe(true);
    });
});