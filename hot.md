验证 ip 地址
https://leetcode.cn/problems/validate-ip-address/solution/by-jingzhi-2-xovn/

[232.双栈实现队列](./src/232.implement-queue-using-stacks.js) 提示：in2out 需要实现

[22.括号生成](./src/22.generate-parentheses.js) 提示：回溯、条件判断需要注意

[31.下一个排列](./src/31.next-permutation.js) 提示：有点难从右遍历找小数和大数，最后反转右侧数据

[33.搜索旋转排序数组](./src/33.search-in-rotated-sorted-array.js) 提示：mid 与边界相比然后在连续区间进行查找
[34.在排序数组中查找元素的第一个和最后一个位置](./src/34.find-first-and-last-position-of-element-in-sorted-array.js)

排列组合
[39.组合总和](./src/39.combination-sum.js) 提示回溯
[46.全排列](./src/46.permutations.js) 提示：回溯
[77.组合](./src/77.combinations.js) 提示：回溯比 78 简单一点，数组长度为 k 时收集
[78.子集](./src/78.subsets.js) 提示：回溯，需要根据子集长度收集结果
[494.目标和](./src/494.target-sum.js) 提示回溯，不需要循环

[42.接雨水](./src/42.trapping-rain-water.js) 提示：双指针，左右取区间最大值，实际计算取最短的计算
[49.字母异位词分组](./src/49.group-anagrams.js) 提示：编码 encode 阿斯克码 +哈希表

贪心| 动态 只要是求和求次数不求具体的路径的都可以考虑动态规划
[55.跳跃游戏](./src/55.jump-game.js) 提示：贪心，记录能跳到最远的下标
[53.最大子数组和](./src/53.maximum-subarray.js) 提示：动态规划
[62.不同路径](./src/62.unique-paths.js) 提示：动态规划
[64.最小路径和](./src/64.minimum-path-sum.js) 提示：动态规划
[300.最长递增子序列](./src/300.longest-increasing-subsequence.js) 提示：动态规划
[152.乘积最大子数组](./src/152.maximum-product-subarray.js) 提示：注意负数情况 记录当前最大的值
[139.单词拆分](./src/139.word-break.js) 提示：类似最长递增子序列 双重循环判断子串是否符合要求
背包问题

[416.分割等和子集](./src/416.partition-equal-subset-sum.js) 提示:0-1 背包问题 二维数组 i 表示 nums 下标，j 表示容量

滑动窗口
[3.无重复字符的最长子串](./src/3.longest-substring-without-repeating-characters.js) 提示：滑动窗口

前缀和
[560.和为 k 的子数组](./src/560.subarray-sum-equals-k.js) 提示：前缀和，时间复杂度关系可以找差在前缀和中出现的次数
[303.区域和检索 - 数组不可变](./src/303.range-sum-query-immutable.js) 提示：前缀和，首项为 0
[304.二维区域和检索 - 矩阵不可变](./src/304.range-sum-query-2-d-immutable.js) 提示：二位的有点难的要清楚 preSum[row][col]代表的是定点左上的区域，而实际矩形 martix[row][col]下标都要-1

[79.单词搜索](./src/79.word-search.js) 提示：dfs direactions 数组 + 回溯的时候 visited 记录访问过的节点
[105.从前序与中序遍历序列构造二叉树](./src/105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
[128.最长连续序列](./src/128.longest-consecutive-sequence.js) 提示：排序+遍历即可
[146.LRU 缓存机制](./src/146.lru-cache.js) 提示使用 jsmap 并使用 keys().next.value

链表
[148.排序链表](./src/148.sort-list.js)提示：快慢指针得出中点，然后使用归并排序
[206.反转链表](./src/206.reverse-linked-list.js) 提示：注意递归写法

dfs
[200.岛屿数量](./src/200.number-of-islands.js) 提示：dfs,填海法

二分查找
[611.有效三角形](./src/611.valid-triangle-number.js) 提示：排序+双指针 排序 + 二分查找 排序+暴力
[215]

[n 皇后]

[155.最小栈](./src/155.min-stack.js) 提示：辅助栈记录当前栈最小值，保持栈顶为最小值。出栈时判断与辅助栈顶元素是否相等，相等则辅助栈出栈。

双指针
[647.回文子串](./src/647.palindromic-substrings.js) 提示：遍历出所有的子串，记录子串的顺序和逆序战展示作为判断
[快速排序]()
[归并排序]()
[冒泡排序]
[选择排序]()

位运算
[416.汉明距离](./src/461.hamming-distance.js) 提示: 同位异或，除二余一法求 1 位数
[190.颠倒二进制位](./src/190.reverse-bits.js) 提示：传入数字向右移位，新数字向左移位，需要了解移位方法新增的位数数值是啥

区间
[56.合并区间](./src/56.merge-intervals.js) 提示：区间题先排序，在判断左右边界

树
[226.翻转二叉树](./src/226.invert-binary-tree.js) 提示：赋值情况需要注意，需要暂存节点

统计数位
[400. 第 N 位数字](./src/400.nth-digit.js) 提示：几位共有几个数字 9 _ 位数 _ Math.pow(10 \* len -1)


[347.前 K 个高频元素](./src/347.top-k-frequent-elements.js) 提示：哈希表+排序 或者使用小顶堆

排序
[406.根据身高重建队列](./src/406.queue-reconstruction-by-height.js) 提示：先按身高从高到低排序，然后按照第二个元素顺序插入