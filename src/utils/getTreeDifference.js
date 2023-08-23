

// 递归函数，获取两个树形结构之间的差集
// 获取树的差集
// 获取树的差集
// 获取树的差集
// 获取树的差集
export function getTreeDifference(tree1, tree2) {
    const difference = createEmptyTree(tree1);

    function compareAndAddToDifference(node1, node2, differenceNode) {
        const map1 = createIdMap(node1 && node1.children ? node1.children : []);
        const map2 = createIdMap(node2 && node2.children ? node2.children : []);

        for (const [id, child1] of Object.entries(map1)) {
            const child2 = map2[id];
            if (!child2) {
                differenceNode.children.push(child1);
            } else {
                const newDifferenceNode = createEmptyTree(child1);
                compareAndAddToDifference(child1, child2, newDifferenceNode);
                if (newDifferenceNode.children.length > 0) {
                    differenceNode.children.push(newDifferenceNode);
                }
                delete map2[id];
            }
        }

        for (const [id, child2] of Object.entries(map2)) {
            const newDifferenceNode = createEmptyTree(child2);
            differenceNode.children.push(newDifferenceNode);
            compareAndAddToDifference(null, child2, newDifferenceNode);
        }
    }

    function createEmptyTree(node) {
        const { id, ...rest } = node;
        return { id, ...rest, children: [] };
    }

    function createIdMap(children) {
        const map = {};
        for (const child of children) {
            map[child.id] = child;
        }
        return map;
    }

    compareAndAddToDifference(tree1, tree2, difference);
    return difference.children;
}