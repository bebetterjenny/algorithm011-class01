学习笔记

Hash Table
    Map:
        search  O(1)
        insert  O(1)
        delete  O(1)

        Map.clear()
        Map.delete(key)
        Map.entries()
        Map.forEach()
        Map.get(key)
        Map.has(key)
        Map.keys()
        Map.set(key, value)
        Map.values()
        Array.from(new Map()) => [[], [], [], ...]

    Set:
        Set.add(value)
        Set.clear()
        Set.delete(value)
        Set.entries()
        Set.forEach()
        Set.has()
        Set.values()

Tree
    Definition:
        function TreeNode(val) {
            this.val = val;
            this.left = this.right = null;
        }

    Traverse:
        function preorder(root) {
            if (root) {
                traverse_path.push(root.val);
                preorder(root.left);
                preorder(root.right);
            }
        }

        function inorder(root) {
            if (root) {
                inorder(root.left);
                traverse_path.push(root.val);
                inorder(root.right);
            }
        }

        function postorder(root) {
            if (root) {
                postordere(root.left);
                postorder(root.right);
                traverse_path.push(root.val);
            }
        }

    search  O(n)
    insert  O(n)
    delete  O(n)

    Binary Search Tree:
        Definition:
            1. 左子树上所有节点都小于根节点；
            2. 右子树上所有节点都大于根节点

        search  O(log(n))
        insert  O(log(n))   
        delete  O(log(n))  

Heap 找最大值（大顶堆）或找最小值（小顶堆）
    find-max        O(1)
    delete-max      O(log(n)) heapify down
    insert(create)  O(log(n)) or O(1) heapify up

    Binary Heap:
        1. 完全树，除叶子其他都是满的
        2. 根节点>子节点


