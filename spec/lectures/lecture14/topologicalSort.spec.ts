import topologicalSort from "../../../lectures/lecture14/topologicalSort";
import { Graph } from "../../../utils/Graph";
import { GraphNode } from "../../../utils/Node";

describe('Topological Sort', () => {
    const graph = new Graph();
    beforeAll(() => {
        const watch = new GraphNode('watch');
        const shoes = new GraphNode('shoes');
        const socks = new GraphNode('socks', [shoes]);
        const jacket = new GraphNode('jacket');
        const tie = new GraphNode('tie', [jacket]);
        const belt = new GraphNode('belt', [jacket]);
        const shirt = new GraphNode('shirt', [belt, tie]);
        const pants = new GraphNode('pants', [belt]);
        const undershorts = new GraphNode('undershorts', [pants, shoes]);
        graph.vertices = [watch, shoes, socks, jacket, tie, belt, shirt, pants, undershorts];
    });
    it('should return the correct ordering of times for a graph.', () => {
        expect(topologicalSort(graph)).toEqual([
            'undershorts', 'pants',
            'shirt',       'belt',
            'tie',         'jacket',
            'socks',       'shoes',
            'watch'
        ]);
    });
});