学习笔记

主定理：
    二分查找     log(n)    每次一分为二只查一边
    二维有序矩阵  n        相对于二分查找降了一维
    二叉树遍历    n        每个节点仅访问一次（不论前，中，后序）
    归并排序     nlog(n)   所有排序中的最优算法
    二叉树递归   n^2       最多有n层

Array
    prepend     O(1)
    append      O(1)
    lookup      O(1)
    insert      O(n)
    delete      O(n)

Linked List
    prepend     O(1)
    append      O(1)
    lookup      O(n)
    insert      O(1)
    delete      O(1)

Skip List
    prepend     O(1)
    append      O(1)
    lookup      O(log(n))
    insert      O(1)
    delete      O(1)

Dequeue
    push        O(1)
    pop         O(1)
    shift       O(1)
    unshift     O(1)
    lookup      O(n)