验证 ip 地址
https://leetcode.cn/problems/validate-ip-address/solution/by-jingzhi-2-xovn/

[232.双栈实现队列](./src/232.implement-queue-using-stacks.js) 提示：in2out 需要实现

[20.有效括号](./src/20.valid-parentheses.js) 提示：栈
[22.括号生成](./src/22.generate-parentheses.js) 提示：回溯、条件判断需要注意
[301.删除无效括号](./src/301.remove-invalid-parentheses.js) 提示：回溯+剪枝

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
[10. 正则表达式匹配](./src/10.regular-expression-matching.js) 提示：dp中表示长度与实际子串下标相差1，分析末尾为*的情况
[55.跳跃游戏](./src/55.jump-game.js) 提示：贪心，记录能跳到最远的下标
[53.最大子数组和](./src/53.maximum-subarray.js) 提示：动态规划
[62.不同路径](./src/62.unique-paths.js) 提示：动态规划
[64.最小路径和](./src/64.minimum-path-sum.js) 提示：动态规划
[300.最长递增子序列](./src/300.longest-increasing-subsequence.js) 提示：动态规划
[152.乘积最大子数组](./src/152.maximum-product-subarray.js) 提示：注意负数情况 记录当前最大的值
[279.完全平方数](./src/279.perfect-squares.js) 提示: 数量次数需要联想到dp
[221.最大正方形](./src/221.maximal-square.js) 提示：正方形面积由相邻正方形面积决定dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1
[139.单词拆分](./src/139.word-break.js) 提示：类似最长递增子序列 双重循环判断子串是否符合要求
[312. 戳气球](./src/312.burst-balloons.js) 提示：区间dp
[516. 最长回文子序列](./src/516.longest-palindromic-subsequence.js) 提示：区间dp，s[i][j]表示字符串i到j区间
背包问题

[416.分割等和子集](./src/416.partition-equal-subset-sum.js) 提示:0-1 背包问题 二维数组 i 表示 nums 下标，j 表示容量

滑动窗口
[3.无重复字符的最长子串](./src/3.longest-substring-without-repeating-characters.js) 提示：滑动窗口
[50.滑动窗口最大值](./src/239.sliding-window-maximum.js) 提示：滑动窗口+单调队列
[78.最小覆盖子串](./src/76.minimum-window-substring.js) 提示：map记录字符次数 用window表示当前窗口内字符的出现次数

前缀和
[560.和为 k 的子数组](./src/560.subarray-sum-equals-k.js) 提示：前缀和，时间复杂度关系可以找差在前缀和中出现的次数
[303.区域和检索 - 数组不可变](./src/303.range-sum-query-immutable.js) 提示：前缀和，首项为 0
[304.二维区域和检索 - 矩阵不可变](./src/304.range-sum-query-2-d-immutable.js) 提示：二位的有点难的要清楚 preSum[row][col]代表的是定点左上的区域，而实际矩形 martix[row][col]下标都要-1

dfs
[79.单词搜索](./src/79.word-search.js) 提示：dfs direactions 数组 + 回溯的时候 visited 记录访问过的节点
[329. 矩阵中的最长递增路径](./src/329.longest-increasing-path-in-a-matrix.js) 提示：dfs+记忆化搜索
[105.从前序与中序遍历序列构造二叉树](./src/105.construct-binary-tree-from-preorder-and-inorder-traversal.js)
[128.最长连续序列](./src/128.longest-consecutive-sequence.js) 提示：排序+遍历即可
[146.LRU 缓存机制](./src/146.lru-cache.js) 提示使用 jsmap 并使用 keys().next.value
[695. 岛屿的最大面积](./src/695.max-area-of-island.js) 提示：填海法

链表
[148.排序链表](./src/148.sort-list.js)提示：快慢指针得出中点，然后使用归并排序
[206.反转链表](./src/206.reverse-linked-list.js) 提示：注意递归写法
[234. 回文链表](./src/234.palindrome-linked-list.js) 提示：快慢指针找到中点同时构造反向链表

dfs
[200.岛屿数量](./src/200.number-of-islands.js) 提示：dfs,填海法

二分查找
[611.有效三角形](./src/611.valid-triangle-number.js) 提示：排序+双指针 排序 + 二分查找 排序+暴力
[215.数组中的第K个最大元素](./src/215.kth-largest-element-in-an-array.js) 提示：二分+快排 / 小顶堆
[287.寻找重复数](./src/287.find-the-duplicate-number.js) 提示：在[1, n]区间内查找 统计数组中小于等于该数的数字数量如果是大于该数则去左区间区间，小于等于该数的去右区间

[n 皇后]
[155.最小栈](./src/155.min-stack.js) 提示：辅助栈记录当前栈最小值，保持栈顶为最小值。出栈时判断与辅助栈顶元素是否相等，相等则辅助栈出栈。

双指针
[647.回文子串](./src/647.palindromic-substrings.js) 提示：遍历出所有的子串，记录子串的顺序和逆序战展示作为判断
[283. 移动零](./src/283.move-zeroes.js) 提示：快慢指针，快指针遇到0跳过到下一个不为0的数赋值给slow指针
[16.最接近的三数之和](./src/16.3-sum-closest.js) 提示：固定首位，双指针
[快速排序]()
[归并排序]()
[冒泡排序]
[选择排序]()

位运算
[136.只出现一次的数字](./src/136.single-number.js) 提示：同位异或 交换律和结合律 a^a = 0 a^0 = a a^b^a = (a ^ a) ^ b = 0^b = b
[416.汉明距离](./src/461.hamming-distance.js) 提示: 同位异或，除二余一法求 1 位数
[190.颠倒二进制位](./src/190.reverse-bits.js) 提示：传入数字向右移位，新数字向左移位，需要了解移位方法新增的位数数值是啥
[338.比特位计数](./src/338.counting-bits.js) 提示：区分奇偶类似动态规划，奇数1的个数等于前一个偶数+1，偶数1的个数等于 / 2的个数

区间
[56.合并区间](./src/56.merge-intervals.js) 提示：区间题先排序，在判断左右边界

树
[226.翻转二叉树](./src/226.invert-binary-tree.js) 提示：赋值情况需要注意，需要暂存节点
[236.二叉树的最近公共祖先](./src/236.lowest-common-ancestor-of-a-binary-tree.js) 提示：后序遍历
[543.二叉树的直径](./src/543.diameter-of-binary-tree.js) 提示：树深度变种
[437. 路径总和 III](./src/437.path-sum-iii.js) 提示：前缀和 或者 深度搜索传递差值
[662. 二叉树最大宽度](./src/662.maximum-width-of-binary-tree.js) 提示:满二叉树特征，记录每个节点的index然后做差
[102. 二叉树的层序遍历](./src/102.binary-tree-level-order-traversal.js)
[112. 路径总和](./src/112.path-sum.js) 提示： 传入剩余数

统计数位
[400. 第 N 位数字](./src/400.nth-digit.js) 提示：几位共有几个数字 9 _ 位数 _ Math.pow(10 \* len -1)

[347.前 K 个高频元素](./src/347.top-k-frequent-elements.js) 提示：哈希表+排序 或者使用小顶堆

排序
[406.根据身高重建队列](./src/406.queue-reconstruction-by-height.js) 提示：先按身高从高到低排序，然后按照第二个元素顺序插入

堆/优先队列
[215.数组中的第K个最大元素](./src/215.kth-largest-element-in-an-array.js) 提示：小顶堆

杂题
[448. 找到所有数组中消失的数字](./src/448.find-all-numbers-disappeared-in-an-array.js) 提示：遍历查找
[48.旋转图像] 提示：先对角线交换再每行交换
[4. 寻找两个正序数组的中位数](./src/4.median-of-two-sorted-arrays.js) 提示：寻找数组第k大元素
[165. 比较版本号](./src/165.compare-version-numbers.js)
