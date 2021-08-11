import dfs from "../../../lectures/lecture14/dfs";
import { Graph } from "../../../utils/Graph";
import { GraphNode } from "../../../utils/Node";

describe('Depth First Search', () => {
    let graph: Graph = new Graph();
    beforeAll(() => {
        let u = new GraphNode('u');
        let v = new GraphNode('v');
        let x = new GraphNode('x', [v])
        u.neighbors = [v, x];
        let y = new GraphNode('y', [x]);
        v.neighbors = [y];
        let w = new GraphNode('w');
        let z = new GraphNode('z');
        w.neighbors = [y, z];
        z.neighbors = [z];
        graph.vertices = [u, v, w, x, y, z];
    });

    it('should be able to search through an entire graph and reach all the vertices.', () => {
        const map :Map<GraphNode, GraphNode> = dfs(graph);
        let parentArray :string[][]= [];
        let numArrays :number = -1;
        for (const [key, value] of map) {
            if(value === null){
                parentArray.push([]);
                numArrays++;
            }
            parentArray[numArrays].push(key.val);
        }
        expect(parentArray).toEqual([['u','v','y','x'],['w','z']])
    });
});