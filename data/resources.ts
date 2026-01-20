const PROBLEM_RESOURCES = {
  // intro problmes
  "1068": [
    { linkname: "CP Blog: Weird Algorithm / Collatz", link: "https://codeforces.com/blog/entry/61364" },
    { linkname: "Wikipedia: Collatz Conjecture", link: "https://en.wikipedia.org/wiki/Collatz_conjecture" }
  ],

  "1083": [
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/bronze/prefix-sums" },
    { linkname: "CP-Algorithms: XOR Tricks", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" }
  ],

  "1069": [
    { linkname: "CP-Algorithms: Two Pointers", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: String Processing", link: "https://usaco.guide/bronze/string-processing" }
  ],

  "1094": [
    { linkname: "USACO Guide: Greedy Algorithms", link: "https://usaco.guide/silver/greedy" },
    { linkname: "CP Blog: Greedy Strategy Intuition", link: "https://codeforces.com/blog/entry/66909" }
  ],

  "1070": [
    { linkname: "CP Blog: Constructive Algorithms", link: "https://codeforces.com/blog/entry/14929" },
    { linkname: "USACO Guide: Constructive Problems", link: "https://usaco.guide/silver/constructive" }
  ],

  "1071": [
    { linkname: "CP Blog: Number Spiral Explanation", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "YouTube: Number Spiral Visual Explanation", link: "https://www.youtube.com/watch?v=JxJ4S1YF7A8" }
  ],

  "1072": [
    { linkname: "CP-Algorithms: Combinatorics Basics", link: "https://cp-algorithms.com/combinatorics/basic_combinatorics.html" },
    { linkname: "USACO Guide: Counting Techniques", link: "https://usaco.guide/silver/counting" }
  ],

  "1092": [
    { linkname: "USACO Guide: Greedy Construction", link: "https://usaco.guide/silver/greedy" },
    { linkname: "CP Blog: Two Sets Reasoning", link: "https://codeforces.com/blog/entry/74202" }
  ],

  "1617": [
    { linkname: "CP-Algorithms: Binary Exponentiation", link: "https://cp-algorithms.com/algebra/binary-exp.html" },
    { linkname: "USACO Guide: Modular Arithmetic", link: "https://usaco.guide/silver/modular-arithmetic" }
  ],

  "1618": [
    { linkname: "CP-Algorithms: Factorials & Trailing Zeros", link: "https://cp-algorithms.com/algebra/factorial-modulo.html" },
    { linkname: "GeeksForGeeks: Trailing Zeros Logic", link: "https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/" }
  ],

  "1754": [
    { linkname: "CP Blog: Coin Piles Trick", link: "https://codeforces.com/blog/entry/65542" },
    { linkname: "USACO Guide: Math Observations", link: "https://usaco.guide/bronze/math" }
  ],

  "1755": [
    { linkname: "USACO Guide: Frequency Counting", link: "https://usaco.guide/bronze/maps-sets" },
    { linkname: "CP-Algorithms: Palindrome Basics", link: "https://cp-algorithms.com/string/palindrome.html" }
  ],

  "2205": [
    { linkname: "CP-Algorithms: Gray Code", link: "https://cp-algorithms.com/algebra/gray-code.html" },
    { linkname: "Wikipedia: Gray Code", link: "https://en.wikipedia.org/wiki/Gray_code" }
  ],

  "2165": [
    { linkname: "USACO Guide: Recursion", link: "https://usaco.guide/bronze/recursion" },
    { linkname: "GeeksForGeeks: Tower of Hanoi", link: "https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/" }
  ],

  "1622": [
    { linkname: "CP-Algorithms: Permutations", link: "https://cp-algorithms.com/algebra/permutations.html" },
    { linkname: "USACO Guide: Backtracking", link: "https://usaco.guide/silver/backtracking" }
  ],

  "1623": [
    { linkname: "USACO Guide: Subsets", link: "https://usaco.guide/silver/subsets" },
    { linkname: "CP Blog: Meet in the Middle", link: "https://codeforces.com/blog/entry/15194" }
  ],

  "1624": [
    { linkname: "CP Blog: N-Queens Backtracking", link: "https://codeforces.com/blog/entry/18915" },
    { linkname: "GeeksForGeeks: N Queens Problem", link: "https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/" }
  ],

  "3399": [
    { linkname: "CP Blog: Game Theory Basics", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Game Theory Intro", link: "https://usaco.guide/gold/game-theory" }
  ],

  "3419": [
    { linkname: "CP Blog: MEX Construction Problems", link: "https://codeforces.com/blog/entry/87298" },
    { linkname: "CP-Algorithms: MEX Concept", link: "https://cp-algorithms.com/sequences/mex.html" }
  ],

  "3217": [
    { linkname: "CP-Algorithms: BFS on Grid", link: "https://cp-algorithms.com/graph/breadth-first-search.html" },
    { linkname: "USACO Guide: Grid BFS", link: "https://usaco.guide/silver/bfs" }
  ],

  "3311": [
    { linkname: "USACO Guide: Graph Coloring", link: "https://usaco.guide/silver/graph-coloring" },
    { linkname: "CP-Algorithms: Bipartite Graphs", link: "https://cp-algorithms.com/graph/bipartite-check.html" }
  ],

  "2431": [
    { linkname: "CP Blog: Digit Queries", link: "https://codeforces.com/blog/entry/76211" },
    { linkname: "CP-Algorithms: Digit DP Basics", link: "https://cp-algorithms.com/dynamic_programming/digit_dp.html" }
  ],

  "1743": [
    { linkname: "USACO Guide: String Reordering", link: "https://usaco.guide/bronze/string-processing" },
    { linkname: "CP Blog: String Frequency Tricks", link: "https://codeforces.com/blog/entry/80706" }
  ],

  "1625": [
    { linkname: "USACO Guide: Backtracking on Grids", link: "https://usaco.guide/silver/backtracking" },
    { linkname: "CP Blog: Grid Path Counting", link: "https://codeforces.com/blog/entry/82306" }
  ],

  //sorting searching :
  "1621": [
    { linkname: "USACO Guide: Sorting & Sets", link: "https://usaco.guide/bronze/sorting" },
    { linkname: "CP-Algorithms: Data Structures Intro", link: "https://cp-algorithms.com/data_structures/basic_ds.html" }
  ],

  "1084": [
    { linkname: "CP-Algorithms: Two Pointers", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Two Pointers", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "1090": [
    { linkname: "CP-Algorithms: Greedy Algorithms", link: "https://cp-algorithms.com/greedy.html" },
    { linkname: "USACO Guide: Greedy", link: "https://usaco.guide/silver/greedy" }
  ],

  "1091": [
    { linkname: "CP-Algorithms: Multiset & Binary Search", link: "https://cp-algorithms.com/data_structures/multiset.html" },
    { linkname: "USACO Guide: Ordered Sets", link: "https://usaco.guide/silver/maps-sets" }
  ],

  "1619": [
    { linkname: "CP-Algorithms: Sweep Line", link: "https://cp-algorithms.com/geometry/sweep-line.html" },
    { linkname: "USACO Guide: Event Processing", link: "https://usaco.guide/silver/sweep-line" }
  ],

  "1629": [
    { linkname: "CP-Algorithms: Interval Scheduling", link: "https://cp-algorithms.com/greedy/interval_scheduling.html" },
    { linkname: "USACO Guide: Scheduling", link: "https://usaco.guide/silver/greedy" }
  ],

  "1640": [
    { linkname: "CP-Algorithms: Two Sum / Hashing", link: "https://cp-algorithms.com/algebra/two_sum.html" },
    { linkname: "USACO Guide: Two Pointers & Maps", link: "https://usaco.guide/silver/maps-sets" }
  ],

  "1643": [
    { linkname: "CP-Algorithms: Kadane Algorithm", link: "https://cp-algorithms.com/others/maximum_subarray_sum.html" },
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/bronze/prefix-sums" }
  ],

  "1074": [
    { linkname: "CP-Algorithms: Median Properties", link: "https://cp-algorithms.com/statistics/median.html" },
    { linkname: "USACO Guide: Sorting", link: "https://usaco.guide/bronze/sorting" }
  ],

  "2183": [
    { linkname: "CP-Algorithms: Greedy Coin Problems", link: "https://cp-algorithms.com/greedy.html" },
    { linkname: "USACO Guide: Greedy Construction", link: "https://usaco.guide/silver/greedy" }
  ],

  "2216": [
    { linkname: "CP Blog: Collecting Numbers Insight", link: "https://codeforces.com/blog/entry/76933" },
    { linkname: "USACO Guide: Simulation", link: "https://usaco.guide/bronze/simulation" }
  ],

  "2217": [
    { linkname: "CP-Algorithms: Segment Tree Basics", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Advanced Simulation", link: "https://usaco.guide/gold/data-structures" }
  ],

  "1141": [
    { linkname: "CP-Algorithms: Sliding Window", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Two Pointers", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "1073": [
    { linkname: "CP-Algorithms: Multiset Greedy", link: "https://cp-algorithms.com/data_structures/multiset.html" },
    { linkname: "USACO Guide: Greedy with Data Structures", link: "https://usaco.guide/silver/greedy" }
  ],

  "1163": [
    { linkname: "CP-Algorithms: Ordered Set Trick", link: "https://cp-algorithms.com/data_structures/ordered_set.html" },
    { linkname: "USACO Guide: Sweep Line + Sets", link: "https://usaco.guide/gold/data-structures" }
  ],

  "3420": [
    { linkname: "CP-Algorithms: Sliding Window with Frequency", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Distinct Subarrays", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "3421": [
    { linkname: "CP Blog: Distinct Subsequences", link: "https://codeforces.com/blog/entry/70018" },
    { linkname: "CP-Algorithms: DP on Subsequences", link: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html" }
  ],

  "2162": [
    { linkname: "CP-Algorithms: Josephus Problem", link: "https://cp-algorithms.com/others/josephus_problem.html" },
    { linkname: "GeeksForGeeks: Josephus Circle", link: "https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/" }
  ],

  "2163": [
    { linkname: "CP-Algorithms: Josephus with Data Structures", link: "https://cp-algorithms.com/others/josephus_problem.html" },
    { linkname: "USACO Guide: Order Statistics Tree", link: "https://usaco.guide/gold/data-structures" }
  ],

  "2168": [
    { linkname: "CP-Algorithms: Interval Nesting", link: "https://cp-algorithms.com/geometry/intervals.html" },
    { linkname: "USACO Guide: Sorting Intervals", link: "https://usaco.guide/silver/sorting" }
  ],

  "2169": [
    { linkname: "CP-Algorithms: Fenwick Tree", link: "https://cp-algorithms.com/data_structures/fenwick.html" },
    { linkname: "USACO Guide: Range Queries", link: "https://usaco.guide/gold/range-queries" }
  ],

  "1164": [
    { linkname: "CP-Algorithms: Priority Queue Usage", link: "https://cp-algorithms.com/data_structures/priority_queue.html" },
    { linkname: "USACO Guide: Scheduling with PQ", link: "https://usaco.guide/silver/greedy" }
  ],

  "1620": [
    { linkname: "CP-Algorithms: Binary Search on Answer", link: "https://cp-algorithms.com/others/binary_search_answer.html" },
    { linkname: "USACO Guide: Binary Search", link: "https://usaco.guide/silver/binary-search" }
  ],

  "1630": [
    { linkname: "CP-Algorithms: Scheduling with Deadlines", link: "https://cp-algorithms.com/greedy/scheduling.html" },
    { linkname: "USACO Guide: Greedy Scheduling", link: "https://usaco.guide/silver/greedy" }
  ],

  "1631": [
    { linkname: "CP Blog: Reading Books Insight", link: "https://codeforces.com/blog/entry/81899" },
    { linkname: "USACO Guide: Greedy Pairing", link: "https://usaco.guide/silver/greedy" }
  ],

  "1641": [
    { linkname: "CP-Algorithms: 3SUM", link: "https://cp-algorithms.com/algebra/three_sum.html" },
    { linkname: "USACO Guide: Two Pointers Extension", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "1642": [
    { linkname: "CP-Algorithms: 4SUM / Meet in Middle", link: "https://cp-algorithms.com/algebra/meet-in-the-middle.html" },
    { linkname: "USACO Guide: Meet in the Middle", link: "https://usaco.guide/gold/meet-in-the-middle" }
  ],

  "1645": [
    { linkname: "CP-Algorithms: Monotonic Stack", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Stack Applications", link: "https://usaco.guide/silver/stacks" }
  ],

  "1660": [
    { linkname: "CP-Algorithms: Prefix Sum Subarrays", link: "https://cp-algorithms.com/others/prefix_sums.html" },
    { linkname: "USACO Guide: Subarray Sums", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "1661": [
    { linkname: "CP-Algorithms: Prefix Sum + Map", link: "https://cp-algorithms.com/others/prefix_sums.html" },
    { linkname: "USACO Guide: Hashing", link: "https://usaco.guide/silver/maps-sets" }
  ],

  "1662": [
    { linkname: "CP-Algorithms: Modular Prefix Sums", link: "https://cp-algorithms.com/others/prefix_sums.html" },
    { linkname: "USACO Guide: Modular Arithmetic", link: "https://usaco.guide/silver/modular-arithmetic" }
  ],

  "2428": [
    { linkname: "CP-Algorithms: Sliding Window Optimization", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Advanced Two Pointers", link: "https://usaco.guide/gold/two-pointers" }
  ],

  "1085": [
    { linkname: "CP-Algorithms: Binary Search Answer", link: "https://cp-algorithms.com/others/binary_search_answer.html" },
    { linkname: "USACO Guide: Binary Search", link: "https://usaco.guide/silver/binary-search" }
  ],

  "1632": [
    { linkname: "CP-Algorithms: Multiset Scheduling", link: "https://cp-algorithms.com/data_structures/multiset.html" },
    { linkname: "USACO Guide: Greedy + DS", link: "https://usaco.guide/gold/data-structures" }
  ],

  "1644": [
    { linkname: "CP-Algorithms: Max Subarray with Constraints", link: "https://cp-algorithms.com/others/maximum_subarray_sum.html" },
    { linkname: "USACO Guide: Sliding Window + Prefix", link: "https://usaco.guide/gold/prefix-sums" }
  ],


  //DP;

  "1633": [
    { linkname: "CP-Algorithms: Intro to DP", link: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html" },
    { linkname: "USACO Guide: DP Basics", link: "https://usaco.guide/silver/dp" }
  ],

  "1634": [
    { linkname: "CP-Algorithms: Coin Change (Min Coins)", link: "https://cp-algorithms.com/dynamic_programming/coin_change.html" },
    { linkname: "USACO Guide: Knapsack Variants", link: "https://usaco.guide/silver/knapsack" }
  ],

  "1635": [
    { linkname: "CP-Algorithms: Coin Change (Ordered)", link: "https://cp-algorithms.com/dynamic_programming/coin_change.html" },
    { linkname: "USACO Guide: Counting DP", link: "https://usaco.guide/silver/dp" }
  ],

  "1636": [
    { linkname: "CP-Algorithms: Coin Change (Unordered)", link: "https://cp-algorithms.com/dynamic_programming/coin_change.html" },
    { linkname: "USACO Guide: Knapsack Counting", link: "https://usaco.guide/silver/knapsack" }
  ],

  "1637": [
    { linkname: "CP-Algorithms: Digit DP Basics", link: "https://cp-algorithms.com/dynamic_programming/digit_dp.html" },
    { linkname: "USACO Guide: Greedy + DP", link: "https://usaco.guide/silver/dp" }
  ],

  "1638": [
    { linkname: "CP-Algorithms: DP on Grids", link: "https://cp-algorithms.com/dynamic_programming/grid_dp.html" },
    { linkname: "USACO Guide: Grid DP", link: "https://usaco.guide/silver/dp-on-grids" }
  ],

  "1158": [
    { linkname: "CP-Algorithms: 0/1 Knapsack", link: "https://cp-algorithms.com/dynamic_programming/knapsack.html" },
    { linkname: "USACO Guide: Knapsack DP", link: "https://usaco.guide/silver/knapsack" }
  ],

  "1746": [
    { linkname: "CP-Algorithms: DP with Constraints", link: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html" },
    { linkname: "USACO Guide: DP with States", link: "https://usaco.guide/silver/dp" }
  ],

  "2413": [
    { linkname: "CP-Algorithms: Tiling DP", link: "https://cp-algorithms.com/dynamic_programming/profile-dynamics.html" },
    { linkname: "USACO Guide: State Compression DP", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  "1639": [
    { linkname: "CP-Algorithms: Edit Distance", link: "https://cp-algorithms.com/dynamic_programming/edit_distance.html" },
    { linkname: "USACO Guide: String DP", link: "https://usaco.guide/gold/string-dp" }
  ],

  "3403": [
    { linkname: "CP-Algorithms: LCS", link: "https://cp-algorithms.com/dynamic_programming/longest_common_subsequence.html" },
    { linkname: "USACO Guide: String DP", link: "https://usaco.guide/gold/string-dp" }
  ],

  "1744": [
    { linkname: "CP-Algorithms: Rectangle Cutting DP", link: "https://cp-algorithms.com/dynamic_programming/rectangular_cutting.html" },
    { linkname: "USACO Guide: Interval DP", link: "https://usaco.guide/gold/interval-dp" }
  ],

  "3359": [
    { linkname: "CP-Algorithms: Grid Path DP", link: "https://cp-algorithms.com/dynamic_programming/grid_dp.html" },
    { linkname: "USACO Guide: Grid Optimization", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "1745": [
    { linkname: "CP-Algorithms: Subset Sum DP", link: "https://cp-algorithms.com/dynamic_programming/subset_sum.html" },
    { linkname: "USACO Guide: Knapsack Variants", link: "https://usaco.guide/silver/knapsack" }
  ],

  "1097": [
    { linkname: "CP-Algorithms: Game DP", link: "https://cp-algorithms.com/game_theory/games_on_graphs.html" },
    { linkname: "USACO Guide: Game Theory DP", link: "https://usaco.guide/gold/game-theory" }
  ],

  "1093": [
    { linkname: "CP-Algorithms: Partition DP", link: "https://cp-algorithms.com/dynamic_programming/subset_sum.html" },
    { linkname: "USACO Guide: Counting Partitions", link: "https://usaco.guide/silver/dp" }
  ],

  "3314": [
    { linkname: "CP Blog: Mountain DP Problems", link: "https://codeforces.com/blog/entry/20935" },
    { linkname: "USACO Guide: Advanced DP States", link: "https://usaco.guide/gold/dp" }
  ],

  "1145": [
    { linkname: "CP-Algorithms: LIS (n log n)", link: "https://cp-algorithms.com/dynamic_programming/longest_increasing_subsequence.html" },
    { linkname: "USACO Guide: LIS", link: "https://usaco.guide/gold/lis" }
  ],

  "1140": [
    { linkname: "CP-Algorithms: Weighted Interval Scheduling", link: "https://cp-algorithms.com/dynamic_programming/weighted_interval_scheduling.html" },
    { linkname: "USACO Guide: Interval DP", link: "https://usaco.guide/gold/interval-dp" }
  ],

  "1653": [
    { linkname: "CP-Algorithms: Bitmask DP", link: "https://cp-algorithms.com/dynamic_programming/profile-dynamics.html" },
    { linkname: "USACO Guide: Bitmask DP", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  "2181": [
    { linkname: "CP-Algorithms: Tiling with Profiles", link: "https://cp-algorithms.com/dynamic_programming/profile-dynamics.html" },
    { linkname: "USACO Guide: Advanced Tiling DP", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  "2220": [
    { linkname: "CP-Algorithms: Digit DP", link: "https://cp-algorithms.com/dynamic_programming/digit_dp.html" },
    { linkname: "USACO Guide: Digit DP", link: "https://usaco.guide/gold/digit-dp" }
  ],

  "1748": [
    { linkname: "CP-Algorithms: LIS with Fenwick", link: "https://cp-algorithms.com/dynamic_programming/longest_increasing_subsequence.html" },
    { linkname: "USACO Guide: DP + Data Structures", link: "https://usaco.guide/gold/dp" }
  ],

  //graphs 
  "1192": [
    { linkname: "CP-Algorithms: DFS", link: "https://cp-algorithms.com/graph/depth-first-search.html" },
    { linkname: "USACO Guide: Flood Fill", link: "https://usaco.guide/bronze/flood-fill" }
  ],

  "1193": [
    { linkname: "CP-Algorithms: BFS", link: "https://cp-algorithms.com/graph/breadth-first-search.html" },
    { linkname: "USACO Guide: BFS on Grids", link: "https://usaco.guide/silver/bfs" }
  ],

  "1666": [
    { linkname: "CP-Algorithms: Connected Components", link: "https://cp-algorithms.com/graph/search-for-connected-components.html" },
    { linkname: "USACO Guide: Graph Traversal", link: "https://usaco.guide/silver/dfs" }
  ],

  "1667": [
    { linkname: "CP-Algorithms: BFS Shortest Path", link: "https://cp-algorithms.com/graph/breadth-first-search.html#shortest-path" },
    { linkname: "USACO Guide: Path Reconstruction", link: "https://usaco.guide/silver/bfs" }
  ],

  "1668": [
    { linkname: "CP-Algorithms: Bipartite Check", link: "https://cp-algorithms.com/graph/bipartite-check.html" },
    { linkname: "USACO Guide: Graph Coloring", link: "https://usaco.guide/silver/graph-coloring" }
  ],

  "1669": [
    { linkname: "CP-Algorithms: Cycle Detection (Undirected)", link: "https://cp-algorithms.com/graph/finding-cycle.html" },
    { linkname: "USACO Guide: Graph Cycles", link: "https://usaco.guide/silver/graph-cycles" }
  ],

  "1194": [
    { linkname: "CP-Algorithms: Multi-source BFS", link: "https://cp-algorithms.com/graph/breadth-first-search.html#multi-source-bfs" },
    { linkname: "USACO Guide: Multi-source BFS", link: "https://usaco.guide/silver/multi-source-bfs" }
  ],

  "1671": [
    { linkname: "CP-Algorithms: Dijkstra", link: "https://cp-algorithms.com/graph/dijkstra.html" },
    { linkname: "USACO Guide: Shortest Paths", link: "https://usaco.guide/gold/shortest-paths" }
  ],

  "1672": [
    { linkname: "CP-Algorithms: Floyd Warshall", link: "https://cp-algorithms.com/graph/all-pair-shortest-path-floyd-warshall.html" },
    { linkname: "USACO Guide: APSP", link: "https://usaco.guide/gold/shortest-paths" }
  ],

  "1673": [
    { linkname: "CP-Algorithms: Bellman Ford", link: "https://cp-algorithms.com/graph/bellman_ford.html" },
    { linkname: "CP Blog: Longest Path Trick", link: "https://codeforces.com/blog/entry/16221" }
  ],

  "1195": [
    { linkname: "CP-Algorithms: Dijkstra with States", link: "https://cp-algorithms.com/graph/dijkstra.html" },
    { linkname: "CP Blog: Discount Trick", link: "https://codeforces.com/blog/entry/58902" }
  ],

  "1197": [
    { linkname: "CP-Algorithms: Negative Cycle Detection", link: "https://cp-algorithms.com/graph/finding-negative-cycle-in-graph.html" },
    { linkname: "USACO Guide: Bellman Ford", link: "https://usaco.guide/gold/shortest-paths" }
  ],

  "1196": [
    { linkname: "CP-Algorithms: K Shortest Paths", link: "https://cp-algorithms.com/graph/k-shortest-paths.html" },
    { linkname: "CP Blog: K Shortest Paths", link: "https://codeforces.com/blog/entry/93764" }
  ],

  "1678": [
    { linkname: "CP-Algorithms: Cycle Detection (Directed)", link: "https://cp-algorithms.com/graph/finding-cycle.html" },
    { linkname: "USACO Guide: Directed Cycles", link: "https://usaco.guide/gold/scc" }
  ],

  "1679": [
    { linkname: "CP-Algorithms: Topological Sort", link: "https://cp-algorithms.com/graph/topological-sort.html" },
    { linkname: "USACO Guide: Topological Sort", link: "https://usaco.guide/gold/topological-sort" }
  ],

  "1680": [
    { linkname: "CP-Algorithms: Longest Path in DAG", link: "https://cp-algorithms.com/graph/dag-longest-path.html" },
    { linkname: "USACO Guide: DP on DAG", link: "https://usaco.guide/gold/dp-on-dag" }
  ],

  "1681": [
    { linkname: "CP-Algorithms: Path Counting in DAG", link: "https://cp-algorithms.com/graph/dag-path-counting.html" },
    { linkname: "USACO Guide: DP on DAG", link: "https://usaco.guide/gold/dp-on-dag" }
  ],

  "1202": [
    { linkname: "CP-Algorithms: Dijkstra Variants", link: "https://cp-algorithms.com/graph/dijkstra.html" },
    { linkname: "CP Blog: Counting Paths", link: "https://codeforces.com/blog/entry/101271" }
  ],

  "1750": [
    { linkname: "CP-Algorithms: Binary Lifting", link: "https://cp-algorithms.com/graph/binary_lifting.html" },
    { linkname: "USACO Guide: Functional Graphs", link: "https://usaco.guide/gold/functional-graphs" }
  ],

  "1160": [
    { linkname: "CP-Algorithms: Binary Lifting", link: "https://cp-algorithms.com/graph/binary_lifting.html" },
    { linkname: "USACO Guide: LCA & Jumps", link: "https://usaco.guide/gold/lca" }
  ],

  "1751": [
    { linkname: "CP-Algorithms: Functional Graph Cycles", link: "https://cp-algorithms.com/graph/functional-graph.html" },
    { linkname: "USACO Guide: Functional Graphs", link: "https://usaco.guide/gold/functional-graphs" }
  ],

  "1675": [
    { linkname: "CP-Algorithms: Kruskal MST", link: "https://cp-algorithms.com/graph/mst_kruskal.html" },
    { linkname: "USACO Guide: DSU", link: "https://usaco.guide/silver/disjoint-set-union" }
  ],

  "1676": [
    { linkname: "CP-Algorithms: DSU", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
    { linkname: "USACO Guide: DSU Applications", link: "https://usaco.guide/silver/disjoint-set-union" }
  ],

  "1682": [
    { linkname: "CP-Algorithms: Reachability", link: "https://cp-algorithms.com/graph/reachability.html" },
    { linkname: "USACO Guide: DFS Reachability", link: "https://usaco.guide/silver/dfs" }
  ],

  "1683": [
    { linkname: "CP-Algorithms: SCC", link: "https://cp-algorithms.com/graph/strongly-connected-components.html" },
    { linkname: "USACO Guide: SCC", link: "https://usaco.guide/gold/scc" }
  ],

  "1684": [
    { linkname: "CP-Algorithms: 2-SAT", link: "https://cp-algorithms.com/graph/2SAT.html" },
    { linkname: "USACO Guide: 2-SAT", link: "https://usaco.guide/gold/2-sat" }
  ],

  "1686": [
    { linkname: "CP-Algorithms: DP on SCC DAG", link: "https://cp-algorithms.com/graph/condensation_graph.html" },
    { linkname: "CP Blog: SCC DP", link: "https://codeforces.com/blog/entry/16276" }
  ],

  "1691": [
    { linkname: "CP-Algorithms: Eulerian Path", link: "https://cp-algorithms.com/graph/euler_path.html" },
    { linkname: "USACO Guide: Eulerian Path", link: "https://usaco.guide/gold/eulerian-path" }
  ],

  "1692": [
    { linkname: "CP-Algorithms: De Bruijn Graph", link: "https://cp-algorithms.com/graph/de-bruijn.html" },
    { linkname: "CP Blog: De Bruijn", link: "https://codeforces.com/blog/entry/18412" }
  ],

  "1693": [
    { linkname: "CP-Algorithms: Eulerian Path (Directed)", link: "https://cp-algorithms.com/graph/euler_path.html" },
    { linkname: "USACO Guide: Directed Euler Path", link: "https://usaco.guide/gold/eulerian-path" }
  ],

  "1690": [
    { linkname: "CP-Algorithms: Hamiltonian Path DP", link: "https://cp-algorithms.com/graph/hamiltonian_path.html" },
    { linkname: "CP Blog: Bitmask DP", link: "https://codeforces.com/blog/entry/337" }
  ],

  "1689": [
    { linkname: "CP Blog: Knight Tour Heuristics", link: "https://codeforces.com/blog/entry/72815" },
    { linkname: "GeeksForGeeks: Knight's Tour", link: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/" }
  ],

  "1694": [
    { linkname: "CP-Algorithms: Max Flow", link: "https://cp-algorithms.com/graph/edmonds_karp.html" },
    { linkname: "USACO Guide: Max Flow", link: "https://usaco.guide/gold/max-flow" }
  ],

  "1695": [
    { linkname: "CP-Algorithms: Min Cut", link: "https://cp-algorithms.com/graph/min_cut.html" },
    { linkname: "USACO Guide: Min Cut", link: "https://usaco.guide/gold/min-cut" }
  ],

  "1696": [
    { linkname: "CP-Algorithms: Bipartite Matching", link: "https://cp-algorithms.com/graph/kuhn_maximum_bipartite_matching.html" },
    { linkname: "USACO Guide: Matching", link: "https://usaco.guide/gold/matching" }
  ],

  "1711": [
    { linkname: "CP-Algorithms: Flow Decomposition", link: "https://cp-algorithms.com/graph/flow_decomposition.html" },
    { linkname: "CP Blog: Distinct Routes", link: "https://codeforces.com/blog/entry/89314" }
  ],

  //Segment trees; 
  "1646": [
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/bronze/prefix-sums" },
    { linkname: "CP-Algorithms: Prefix Sums", link: "https://cp-algorithms.com/others/prefix_sums.html" }
  ],

  "1647": [
    { linkname: "CP-Algorithms: Sparse Table (RMQ)", link: "https://cp-algorithms.com/data_structures/sparse-table.html" },
    { linkname: "USACO Guide: Static RMQ", link: "https://usaco.guide/gold/rmq" }
  ],

  "1648": [
    { linkname: "CP-Algorithms: Fenwick Tree", link: "https://cp-algorithms.com/data_structures/fenwick.html" },
    { linkname: "USACO Guide: BIT", link: "https://usaco.guide/silver/fenwick-tree" }
  ],

  "1649": [
    { linkname: "CP-Algorithms: Segment Tree", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Segment Tree", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1650": [
    { linkname: "CP-Algorithms: Prefix XOR", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "USACO Guide: XOR Tricks", link: "https://usaco.guide/silver/bitwise-operations" }
  ],

  "1651": [
    { linkname: "CP-Algorithms: Range Updates with BIT", link: "https://cp-algorithms.com/data_structures/fenwick.html#range-updates" },
    { linkname: "USACO Guide: Difference Arrays", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "1652": [
    { linkname: "CP-Algorithms: 2D Prefix Sums", link: "https://cp-algorithms.com/others/2d-prefix-sums.html" },
    { linkname: "USACO Guide: Grid Prefix Sum", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "1143": [
    { linkname: "CP-Algorithms: Segment Tree Max Query", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Binary Search on Segment Tree", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1749": [
    { linkname: "CP-Algorithms: Order Statistic Tree", link: "https://cp-algorithms.com/data_structures/order_statistic_tree.html" },
    { linkname: "USACO Guide: Indexed Sets", link: "https://usaco.guide/gold/data-structures" }
  ],

  "1144": [
    { linkname: "CP-Algorithms: Coordinate Compression", link: "https://cp-algorithms.com/data_structures/coordinate_compression.html" },
    { linkname: "USACO Guide: Fenwick + Compression", link: "https://usaco.guide/silver/fenwick-tree" }
  ],

  "2166": [
    { linkname: "CP-Algorithms: Prefix Max Queries", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Prefix Queries", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "2206": [
    { linkname: "CP-Algorithms: Segment Tree with Distance", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "CP Blog: Pizzeria Queries Insight", link: "https://codeforces.com/blog/entry/79893" }
  ],

  "3304": [
    { linkname: "CP-Algorithms: Monotonic Stack", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Stack Techniques", link: "https://usaco.guide/silver/stacks" }
  ],

  "3163": [
    { linkname: "CP-Algorithms: Interval Queries", link: "https://cp-algorithms.com/geometry/intervals.html" },
    { linkname: "USACO Guide: Interval Processing", link: "https://usaco.guide/silver/sorting" }
  ],

  "1190": [
    { linkname: "CP-Algorithms: Segment Tree (Max Subarray)", link: "https://cp-algorithms.com/data_structures/segment_tree.html#maximum-subarray-sum" },
    { linkname: "USACO Guide: Advanced Segment Tree", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "3226": [
    { linkname: "CP Blog: Segment Tree with States", link: "https://codeforces.com/blog/entry/18051" },
    { linkname: "USACO Guide: Segment Tree Variants", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1734": [
    { linkname: "CP-Algorithms: Mo’s Algorithm", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html#mo-algorithm" },
    { linkname: "USACO Guide: Offline Queries", link: "https://usaco.guide/gold/sqrt-decomposition" }
  ],

  "3356": [
    { linkname: "CP Blog: Persistent Segment Tree", link: "https://codeforces.com/blog/entry/15890" },
    { linkname: "USACO Guide: Persistent Data Structures", link: "https://usaco.guide/gold/persistent" }
  ],

  "2416": [
    { linkname: "CP-Algorithms: Range Max Queries", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Greedy + RMQ", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1664": [
    { linkname: "CP-Algorithms: Offline Queries", link: "https://cp-algorithms.com/data_structures/sqrt_decomposition.html" },
    { linkname: "USACO Guide: Query Optimization", link: "https://usaco.guide/gold/offline-queries" }
  ],

  "1739": [
    { linkname: "CP-Algorithms: 2D Fenwick Tree", link: "https://cp-algorithms.com/data_structures/fenwick_2d.html" },
    { linkname: "USACO Guide: 2D Range Queries", link: "https://usaco.guide/gold/range-queries" }
  ],

  "1735": [
    { linkname: "CP-Algorithms: Lazy Propagation", link: "https://cp-algorithms.com/data_structures/segment_tree.html#range-updates" },
    { linkname: "USACO Guide: Lazy Segment Tree", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1736": [
    { linkname: "CP Blog: Polynomial Updates", link: "https://codeforces.com/blog/entry/76855" },
    { linkname: "USACO Guide: Advanced Lazy Trees", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1737": [
    { linkname: "CP Blog: Persistent Segment Tree", link: "https://codeforces.com/blog/entry/15890" },
    { linkname: "USACO Guide: Persistence", link: "https://usaco.guide/gold/persistent" }
  ],

  "2184": [
    { linkname: "CP Blog: Offline Query + Greedy", link: "https://codeforces.com/blog/entry/70018" },
    { linkname: "USACO Guide: Advanced Prefix Sums", link: "https://usaco.guide/gold/prefix-sums" }
  ],

  //trees;
  "1674": [
    { linkname: "CP-Algorithms: DFS Tree DP", link: "https://cp-algorithms.com/graph/depth-first-search.html" },
    { linkname: "USACO Guide: Subtree Sizes", link: "https://usaco.guide/silver/dfs" }
  ],

  "1130": [
    { linkname: "CP-Algorithms: Tree DP Matching", link: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" },
    { linkname: "CP Blog: Tree Matching Explained", link: "https://codeforces.com/blog/entry/20935" }
  ],

  "1131": [
    { linkname: "CP-Algorithms: Tree Diameter", link: "https://cp-algorithms.com/graph/tree_diameter.html" },
    { linkname: "USACO Guide: Tree Diameter", link: "https://usaco.guide/silver/trees" }
  ],

  "1132": [
    { linkname: "CP-Algorithms: Tree Distances via DFS", link: "https://cp-algorithms.com/graph/tree_diameter.html" },
    { linkname: "USACO Guide: Tree DP Distances", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "1133": [
    { linkname: "CP-Algorithms: Rerooting DP", link: "https://cp-algorithms.com/dynamic_programming/rerooting.html" },
    { linkname: "USACO Guide: Rerooting DP", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "1687": [
    { linkname: "CP-Algorithms: Binary Lifting", link: "https://cp-algorithms.com/graph/binary_lifting.html" },
    { linkname: "USACO Guide: Ancestor Queries", link: "https://usaco.guide/gold/lca" }
  ],

  "1688": [
    { linkname: "CP-Algorithms: LCA", link: "https://cp-algorithms.com/graph/lca.html" },
    { linkname: "USACO Guide: LCA", link: "https://usaco.guide/gold/lca" }
  ],

  "1135": [
    { linkname: "CP-Algorithms: Distance Queries using LCA", link: "https://cp-algorithms.com/graph/lca.html" },
    { linkname: "USACO Guide: Distance on Trees", link: "https://usaco.guide/gold/lca" }
  ],

  "1136": [
    { linkname: "CP-Algorithms: Tree Path Counting", link: "https://cp-algorithms.com/graph/tree_paths.html" },
    { linkname: "CP Blog: Difference on Trees", link: "https://codeforces.com/blog/entry/68138" }
  ],

  "1137": [
    { linkname: "CP-Algorithms: Euler Tour Technique", link: "https://cp-algorithms.com/graph/euler_tour.html" },
    { linkname: "USACO Guide: Subtree Queries", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1138": [
    { linkname: "CP-Algorithms: Path Queries on Trees", link: "https://cp-algorithms.com/graph/hld.html" },
    { linkname: "USACO Guide: Heavy Light Decomposition", link: "https://usaco.guide/gold/hld" }
  ],

  "2134": [
    { linkname: "CP-Algorithms: Heavy Light Decomposition", link: "https://cp-algorithms.com/graph/hld.html" },
    { linkname: "CP Blog: HLD Implementation Tips", link: "https://codeforces.com/blog/entry/22072" }
  ],

  "1139": [
    { linkname: "CP-Algorithms: DSU on Tree", link: "https://cp-algorithms.com/graph/dsu_on_tree.html" },
    { linkname: "USACO Guide: Small to Large", link: "https://usaco.guide/gold/small-to-large" }
  ],

  "2079": [
    { linkname: "CP-Algorithms: Tree Centroid", link: "https://cp-algorithms.com/graph/tree_centroid.html" },
    { linkname: "USACO Guide: Tree Properties", link: "https://usaco.guide/silver/trees" }
  ],

  "2080": [
    { linkname: "CP-Algorithms: Tree DP Fixed Length Paths", link: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" },
    { linkname: "CP Blog: Fixed Length Paths I", link: "https://codeforces.com/blog/entry/20935" }
  ],

  "2081": [
    { linkname: "CP-Algorithms: Advanced Tree DP", link: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" },
    { linkname: "USACO Guide: Tree DP Advanced", link: "https://usaco.guide/gold/tree-dp" }
  ],


  // ===== Josephus & Exponentiation =====
  "2164": [
    { linkname: "CP-Algorithms: Josephus Problem", link: "https://cp-algorithms.com/others/josephus_problem.html" },
    { linkname: "GeeksForGeeks: Josephus Queries", link: "https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/" }
  ],

  "1095": [
    { linkname: "CP-Algorithms: Binary Exponentiation", link: "https://cp-algorithms.com/algebra/binary-exp.html" },
    { linkname: "USACO Guide: Modular Arithmetic", link: "https://usaco.guide/silver/modular-arithmetic" }
  ],

  "1712": [
    { linkname: "CP-Algorithms: Fast Power + Mod", link: "https://cp-algorithms.com/algebra/binary-exp.html" },
    { linkname: "CP Blog: Power Towers", link: "https://codeforces.com/blog/entry/72527" }
  ],

  // ===== Number Theory =====
  "1713": [
    { linkname: "CP-Algorithms: Divisors", link: "https://cp-algorithms.com/algebra/divisors.html" },
    { linkname: "USACO Guide: Number Theory", link: "https://usaco.guide/silver/number-theory" }
  ],

  "1081": [
    { linkname: "CP-Algorithms: GCD Properties", link: "https://cp-algorithms.com/algebra/gcd.html" },
    { linkname: "USACO Guide: GCD", link: "https://usaco.guide/silver/number-theory" }
  ],

  "1082": [
    { linkname: "CP-Algorithms: Sum of Divisors", link: "https://cp-algorithms.com/algebra/divisors.html" },
    { linkname: "CP Blog: Harmonic Series Trick", link: "https://codeforces.com/blog/entry/53960" }
  ],

  "2182": [
    { linkname: "CP-Algorithms: Divisor Functions", link: "https://cp-algorithms.com/algebra/divisors.html" },
    { linkname: "USACO Guide: Prime Factorization", link: "https://usaco.guide/silver/number-theory" }
  ],

  "2185": [
    { linkname: "CP-Algorithms: Inclusion Exclusion", link: "https://cp-algorithms.com/combinatorics/inclusion-exclusion.html" },
    { linkname: "USACO Guide: Inclusion Exclusion", link: "https://usaco.guide/gold/inclusion-exclusion" }
  ],

  "2417": [
    { linkname: "CP-Algorithms: Euler Totient", link: "https://cp-algorithms.com/algebra/phi-function.html" },
    { linkname: "CP Blog: Coprime Pairs", link: "https://codeforces.com/blog/entry/54150" }
  ],

  "3396": [
    { linkname: "CP-Algorithms: Primality Test", link: "https://cp-algorithms.com/algebra/primality_tests.html" },
    { linkname: "USACO Guide: Prime Sieve", link: "https://usaco.guide/silver/sieve" }
  ],

  // ===== Combinatorics =====
  "1079": [
    { linkname: "CP-Algorithms: Binomial Coefficients", link: "https://cp-algorithms.com/combinatorics/binomial-coefficients.html" },
    { linkname: "USACO Guide: Combinations", link: "https://usaco.guide/silver/combinatorics" }
  ],

  "1715": [
    { linkname: "CP-Algorithms: Multiset Permutations", link: "https://cp-algorithms.com/combinatorics/burnside.html" },
    { linkname: "USACO Guide: Combinatorics", link: "https://usaco.guide/silver/combinatorics" }
  ],

  "1716": [
    { linkname: "CP-Algorithms: Stars and Bars", link: "https://cp-algorithms.com/combinatorics/stars_and_bars.html" },
    { linkname: "USACO Guide: Combinatorics", link: "https://usaco.guide/silver/combinatorics" }
  ],

  "1717": [
    { linkname: "CP-Algorithms: Derangements", link: "https://cp-algorithms.com/combinatorics/derangements.html" },
    { linkname: "Wikipedia: Derangement", link: "https://en.wikipedia.org/wiki/Derangement" }
  ],

  // ===== Games =====
  "1729": [
    { linkname: "CP-Algorithms: Game Theory Basics", link: "https://cp-algorithms.com/game_theory/game_theory_intro.html" },
    { linkname: "USACO Guide: Nim", link: "https://usaco.guide/gold/game-theory" }
  ],

  "1730": [
    { linkname: "CP-Algorithms: Nim Game", link: "https://cp-algorithms.com/game_theory/nim.html" },
    { linkname: "USACO Guide: Nim", link: "https://usaco.guide/gold/game-theory" }
  ],

  "1098": [
    { linkname: "CP-Algorithms: Advanced Nim", link: "https://cp-algorithms.com/game_theory/nim.html" },
    { linkname: "CP Blog: Nim Variants", link: "https://codeforces.com/blog/entry/66040" }
  ],

  "2207": [
    { linkname: "CP-Algorithms: Grundy Numbers", link: "https://cp-algorithms.com/game_theory/sprague-grundy.html" },
    { linkname: "USACO Guide: Grundy", link: "https://usaco.guide/gold/game-theory" }
  ],

  // ===== Strings =====
  "1731": [
    { linkname: "CP-Algorithms: DP on Strings", link: "https://cp-algorithms.com/string/string_dp.html" },
    { linkname: "USACO Guide: String DP", link: "https://usaco.guide/gold/string-dp" }
  ],

  "1753": [
    { linkname: "CP-Algorithms: KMP Algorithm", link: "https://cp-algorithms.com/string/kmp.html" },
    { linkname: "USACO Guide: String Matching", link: "https://usaco.guide/gold/strings" }
  ],

  "1732": [
    { linkname: "CP-Algorithms: Prefix Function", link: "https://cp-algorithms.com/string/prefix-function.html" },
    { linkname: "USACO Guide: Borders", link: "https://usaco.guide/gold/strings" }
  ],

  "1733": [
    { linkname: "CP-Algorithms: String Periods", link: "https://cp-algorithms.com/string/prefix-function.html" },
    { linkname: "CP Blog: Periods in Strings", link: "https://codeforces.com/blog/entry/19127" }
  ],

  "1110": [
    { linkname: "CP-Algorithms: Booth Algorithm", link: "https://cp-algorithms.com/string/lyndon_factorization.html" },
    { linkname: "CP Blog: Minimal Rotation", link: "https://codeforces.com/blog/entry/11264" }
  ],

  "1111": [
    { linkname: "CP-Algorithms: Manacher", link: "https://cp-algorithms.com/string/manacher.html" },
    { linkname: "USACO Guide: Palindromes", link: "https://usaco.guide/gold/strings" }
  ],

  "2105": [
    { linkname: "CP-Algorithms: Suffix Array", link: "https://cp-algorithms.com/string/suffix-array.html" },
    { linkname: "USACO Guide: Suffix Structures", link: "https://usaco.guide/gold/strings" }
  ],

  // ===== Geometry =====
  "2189": [
    { linkname: "CP-Algorithms: Orientation Test", link: "https://cp-algorithms.com/geometry/orientation.html" },
    { linkname: "USACO Guide: Geometry Basics", link: "https://usaco.guide/silver/geometry" }
  ],

  "2190": [
    { linkname: "CP-Algorithms: Segment Intersection", link: "https://cp-algorithms.com/geometry/segments-intersection.html" },
    { linkname: "USACO Guide: Geometry", link: "https://usaco.guide/silver/geometry" }
  ],

  "2195": [
    { linkname: "CP-Algorithms: Convex Hull", link: "https://cp-algorithms.com/geometry/convex_hull.html" },
    { linkname: "USACO Guide: Convex Hull", link: "https://usaco.guide/gold/geometry" }
  ],

  "2194": [
    { linkname: "CP-Algorithms: Closest Pair of Points", link: "https://cp-algorithms.com/geometry/closest_points.html" },
    { linkname: "USACO Guide: Geometry", link: "https://usaco.guide/gold/geometry" }
  ],

  // ===== Advanced Techniques / Misc =====
  "1628": [
    { linkname: "CP-Algorithms: Meet in the Middle", link: "https://cp-algorithms.com/algebra/meet-in-the-middle.html" },
    { linkname: "USACO Guide: Meet in the Middle", link: "https://usaco.guide/gold/meet-in-the-middle" }
  ],

  "2136": [
    { linkname: "CP-Algorithms: Bit Manipulation", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "USACO Guide: Bitwise Operations", link: "https://usaco.guide/silver/bitwise-operations" }
  ],

  "3360": [
    { linkname: "CP Blog: Subgrid Tricks", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Grid Techniques", link: "https://usaco.guide/silver/grids" }
  ],

  "2137": [
    { linkname: "CP Blog: Counting Subgrids", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Prefix Sums on Grids", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "2138": [
    { linkname: "CP-Algorithms: Graph Reachability", link: "https://cp-algorithms.com/graph/reachability.html" },
    { linkname: "USACO Guide: DFS Reachability", link: "https://usaco.guide/silver/dfs" }
  ],

  "2143": [
    { linkname: "CP-Algorithms: Transitive Closure", link: "https://cp-algorithms.com/graph/transitive-closure.html" },
    { linkname: "USACO Guide: Reachability Queries", link: "https://usaco.guide/gold/graphs" }
  ],

  "2072": [
    { linkname: "CP Blog: String Operations", link: "https://codeforces.com/blog/entry/77879" },
    { linkname: "USACO Guide: Strings", link: "https://usaco.guide/silver/strings" }
  ],

  "2073": [
    { linkname: "CP-Algorithms: Rolling Hash", link: "https://cp-algorithms.com/string/string-hashing.html" },
    { linkname: "USACO Guide: String Hashing", link: "https://usaco.guide/gold/string-hashing" }
  ],

  "2074": [
    { linkname: "CP Blog: Segment Tree on Strings", link: "https://codeforces.com/blog/entry/18051" },
    { linkname: "USACO Guide: Segment Tree", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "2076": [
    { linkname: "CP-Algorithms: Bridges", link: "https://cp-algorithms.com/graph/bridge-searching.html" },
    { linkname: "USACO Guide: Bridges & Articulation", link: "https://usaco.guide/gold/bridges" }
  ],

  "2077": [
    { linkname: "CP-Algorithms: Articulation Points", link: "https://cp-algorithms.com/graph/cutpoints.html" },
    { linkname: "USACO Guide: Cut Vertices", link: "https://usaco.guide/gold/bridges" }
  ],

  "2078": [
    { linkname: "CP-Algorithms: Eulerian Subgraphs", link: "https://cp-algorithms.com/graph/euler_path.html" },
    { linkname: "CP Blog: Eulerian Graph Properties", link: "https://codeforces.com/blog/entry/18369" }
  ],

  "2084": [
    { linkname: "CP Blog: Game DP", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Game Theory", link: "https://usaco.guide/gold/game-theory" }
  ],

  "2085": [
    { linkname: "CP-Algorithms: Grundy Numbers", link: "https://cp-algorithms.com/game_theory/sprague-grundy.html" },
    { linkname: "USACO Guide: Game Theory", link: "https://usaco.guide/gold/game-theory" }
  ],

  "2086": [
    { linkname: "CP Blog: Subarray Tricks", link: "https://codeforces.com/blog/entry/79522" },
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "2088": [
    { linkname: "CP-Algorithms: Knuth Optimization", link: "https://cp-algorithms.com/dynamic_programming/knuth_optimization.html" },
    { linkname: "USACO Guide: DP Optimizations", link: "https://usaco.guide/gold/dp-optimizations" }
  ],

  "2101": [
    { linkname: "CP-Algorithms: Dynamic Connectivity", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
    { linkname: "USACO Guide: DSU", link: "https://usaco.guide/silver/disjoint-set-union" }
  ],

  "2133": [
    { linkname: "CP Blog: Offline Dynamic Connectivity", link: "https://codeforces.com/blog/entry/15296" },
    { linkname: "USACO Guide: DSU Rollback", link: "https://usaco.guide/gold/dsu" }
  ],

  "2130": [
    { linkname: "CP-Algorithms: Flow Decomposition", link: "https://cp-algorithms.com/graph/flow_decomposition.html" },
    { linkname: "CP Blog: Distinct Routes", link: "https://codeforces.com/blog/entry/89314" }
  ],

  // ===== Sliding Window =====
  "3220": [
    { linkname: "CP-Algorithms: Sliding Window", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Two Pointers", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "3221": [
    { linkname: "CP-Algorithms: Monotonic Queue", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Sliding Window Minimum", link: "https://usaco.guide/gold/sliding-window" }
  ],

  "3426": [
    { linkname: "CP-Algorithms: Prefix XOR", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "USACO Guide: XOR Tricks", link: "https://usaco.guide/silver/bitwise-operations" }
  ],

  "3405": [
    { linkname: "CP Blog: Sliding Window OR", link: "https://codeforces.com/blog/entry/81661" },
    { linkname: "USACO Guide: Bitwise Windows", link: "https://usaco.guide/gold/bitwise" }
  ],

  "3222": [
    { linkname: "CP-Algorithms: Sliding Window + Frequency", link: "https://cp-algorithms.com/two_pointers.html" },
    { linkname: "USACO Guide: Distinct Subarrays", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "3224": [
    { linkname: "CP Blog: Mode in Sliding Window", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Advanced Sliding Window", link: "https://usaco.guide/gold/sliding-window" }
  ],

  "3219": [
    { linkname: "CP-Algorithms: Mex Maintenance", link: "https://cp-algorithms.com/sequences/mex.html" },
    { linkname: "USACO Guide: MEX Problems", link: "https://usaco.guide/gold/data-structures" }
  ],

  "1076": [
    { linkname: "CP-Algorithms: Order Statistic Tree", link: "https://cp-algorithms.com/data_structures/order_statistic_tree.html" },
    { linkname: "USACO Guide: Sliding Window Median", link: "https://usaco.guide/gold/sliding-window" }
  ],

  "1077": [
    { linkname: "CP Blog: Median Cost Trick", link: "https://codeforces.com/blog/entry/56122" },
    { linkname: "USACO Guide: Sliding Window Cost", link: "https://usaco.guide/gold/sliding-window" }
  ],

  "3223": [
    { linkname: "CP-Algorithms: Inversion Count", link: "https://cp-algorithms.com/others/counting_inversions.html" },
    { linkname: "USACO Guide: Fenwick Tree", link: "https://usaco.guide/silver/fenwick-tree" }
  ],

  "3227": [
    { linkname: "CP Blog: Sliding Window Optimization", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Two Pointers Advanced", link: "https://usaco.guide/gold/two-pointers" }
  ],

  // ===== Interactive / Hidden =====
  "3112": [
    { linkname: "CP Blog: Interactive Problems Strategy", link: "https://codeforces.com/blog/entry/45307" },
    { linkname: "USACO Guide: Interactive Problems", link: "https://usaco.guide/general/interactive" }
  ],

  "3139": [
    { linkname: "CP Blog: Reconstructing Permutations", link: "https://codeforces.com/blog/entry/17974" },
    { linkname: "USACO Guide: Permutations", link: "https://usaco.guide/silver/permutations" }
  ],

  // ===== Order Statistics / Sorting =====
  "3305": [
    { linkname: "CP-Algorithms: Order Statistic Tree", link: "https://cp-algorithms.com/data_structures/order_statistic_tree.html" },
    { linkname: "USACO Guide: K-th Order Statistics", link: "https://usaco.guide/gold/data-structures" }
  ],

  "3140": [
    { linkname: "CP-Algorithms: Counting Inversions", link: "https://cp-algorithms.com/others/counting_inversions.html" },
    { linkname: "USACO Guide: Fenwick Tree", link: "https://usaco.guide/silver/fenwick-tree" }
  ],

  // ===== Bit Manipulation Basics =====
  "1146": [
    { linkname: "CP-Algorithms: Bit Manipulation", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "USACO Guide: Bitwise Operations", link: "https://usaco.guide/silver/bitwise-operations" }
  ],

  // "2136": [
  //   { linkname: "CP-Algorithms: Hamming Distance", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
  //   { linkname: "CP Blog: Hamming Tricks", link: "https://codeforces.com/blog/entry/12143" }
  // ],

  // ===== XOR Subarrays / Prefix XOR =====
  "1655": [
    { linkname: "CP-Algorithms: XOR Prefix Technique", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "CP Blog: Maximum XOR Subarray", link: "https://codeforces.com/blog/entry/14516" }
  ],

  "3233": [
    { linkname: "CP-Algorithms: Prefix XOR", link: "https://cp-algorithms.com/algebra/bit-manipulation.html" },
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  // ===== XOR Basis / Linear Algebra over GF(2) =====
  "3191": [
    { linkname: "CP-Algorithms: Linear Basis (XOR Basis)", link: "https://cp-algorithms.com/algebra/linear_basis.html" },
    { linkname: "CP Blog: XOR Basis Explained", link: "https://codeforces.com/blog/entry/68953" }
  ],

  "3211": [
    { linkname: "CP-Algorithms: Counting Subsets with XOR", link: "https://cp-algorithms.com/algebra/linear_basis.html" },
    { linkname: "CP Blog: Subset XOR Count", link: "https://codeforces.com/blog/entry/72393" }
  ],

  "3192": [
    { linkname: "CP-Algorithms: XOR Basis with Constraints", link: "https://cp-algorithms.com/algebra/linear_basis.html" },
    { linkname: "CP Blog: K-th XOR Subset", link: "https://codeforces.com/blog/entry/68953" }
  ],

  // ===== XOR DP / Patterns =====
  "2419": [
    { linkname: "CP Blog: XOR Pyramid Observation", link: "https://codeforces.com/blog/entry/85159" },
    { linkname: "USACO Guide: Bitwise Patterns", link: "https://usaco.guide/gold/bitwise" }
  ],

  "3194": [
    { linkname: "CP Blog: XOR Triangle Properties", link: "https://codeforces.com/blog/entry/85159" },
    { linkname: "CP-Algorithms: Bitwise DP", link: "https://cp-algorithms.com/dynamic_programming/bitmask_dp.html" }
  ],

  "3195": [
    { linkname: "CP Blog: XOR Prefix Diagonals", link: "https://codeforces.com/blog/entry/85159" },
    { linkname: "USACO Guide: XOR Tricks", link: "https://usaco.guide/gold/bitwise" }
  ],

  // ===== SOS DP / AND–OR DP =====
  "1654": [
    { linkname: "CP-Algorithms: SOS DP", link: "https://cp-algorithms.com/dynamic_programming/sos_dp.html" },
    { linkname: "CP Blog: SOS DP Explained", link: "https://codeforces.com/blog/entry/45223" }
  ],

  "3141": [
    { linkname: "CP-Algorithms: Subset DP (AND/OR)", link: "https://cp-algorithms.com/dynamic_programming/sos_dp.html" },
    { linkname: "CP Blog: AND Subset Counting", link: "https://codeforces.com/blog/entry/45223" }
  ],

  // ===== Misc Bit / Combinatorics =====
  "3228": [
    { linkname: "CP Blog: Binary String Permutations", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Combinatorics", link: "https://usaco.guide/silver/combinatorics" }
  ],

  "3273": [
    { linkname: "CP Blog: Coloring with Bitmasks", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Bitmask DP", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  // ===== Permutations & Inversions =====
  "2214": [
    { linkname: "CP-Algorithms: Inversion Counting", link: "https://cp-algorithms.com/others/counting_inversions.html" },
    { linkname: "CP Blog: Inversion DP Tricks", link: "https://codeforces.com/blog/entry/20935" }
  ],

  "2215": [
    { linkname: "CP-Algorithms: LIS Variants", link: "https://cp-algorithms.com/dynamic_programming/longest_increasing_subsequence.html" },
    { linkname: "USACO Guide: DP on Subsequences", link: "https://usaco.guide/gold/lis" }
  ],

  "3422": [
    { linkname: "CP Blog: Permutation Construction", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Permutations", link: "https://usaco.guide/silver/permutations" }
  ],

  "3423": [
    { linkname: "CP-Algorithms: Permutations + Primes", link: "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html" },
    { linkname: "CP Blog: Prime Constraints", link: "https://codeforces.com/blog/entry/53960" }
  ],

  "2229": [
    { linkname: "CP-Algorithms: Permutation Inversions DP", link: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html" },
    { linkname: "CP Blog: Inversion DP", link: "https://codeforces.com/blog/entry/20935" }
  ],

  "1075": [
    { linkname: "CP-Algorithms: Counting Permutations", link: "https://cp-algorithms.com/combinatorics/binomial-coefficients.html" },
    { linkname: "USACO Guide: Combinatorics", link: "https://usaco.guide/silver/combinatorics" }
  ],

  // ===== Grids & Subgrids =====
  "3424": [
    { linkname: "CP Blog: Grid DP Patterns", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Grid DP", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "2423": [
    { linkname: "CP-Algorithms: Tiling DP", link: "https://cp-algorithms.com/dynamic_programming/profile-dynamics.html" },
    { linkname: "USACO Guide: Tiling Problems", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  "2418": [
    { linkname: "CP Blog: Constructive Grid Paths", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Grid Construction", link: "https://usaco.guide/gold/grids" }
  ],

  "3413": [
    { linkname: "CP Blog: Subgrid Counting", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Prefix Sums on Grids", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "3414": [
    { linkname: "CP Blog: Optimized Subgrid Count", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Grid Prefix DP", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "3415": [
    { linkname: "CP Blog: Character Grid Problems", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Grid Techniques", link: "https://usaco.guide/silver/grids" }
  ],

  "3416": [
    { linkname: "CP Blog: Advanced Subgrid Counting", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Grid Optimization", link: "https://usaco.guide/gold/grids" }
  ],

  "3417": [
    { linkname: "CP Blog: Border Subgrid Tricks", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Prefix Borders", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  "3418": [
    { linkname: "CP Blog: Border Constraints", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Grid DP", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "1078": [
    { linkname: "CP-Algorithms: Grid Paths with Obstacles", link: "https://cp-algorithms.com/dynamic_programming/grid_dp.html" },
    { linkname: "USACO Guide: Grid DP Advanced", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "2429": [
    { linkname: "CP Blog: Grid Completion Problems", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Grid Construction", link: "https://usaco.guide/gold/grids" }
  ],

  // ===== Games / DP =====
  "3400": [
    { linkname: "CP Blog: Game DP Patterns", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Game Theory", link: "https://usaco.guide/gold/game-theory" }
  ],

  "1697": [
    { linkname: "CP Blog: Tournament Scheduling", link: "https://codeforces.com/blog/entry/19127" },
    { linkname: "USACO Guide: Greedy + DP", link: "https://usaco.guide/gold/greedy" }
  ],

  "2176": [
    { linkname: "CP Blog: Bishop Placement DP", link: "https://codeforces.com/blog/entry/72527" },
    { linkname: "USACO Guide: Chessboard DP", link: "https://usaco.guide/gold/dp" }
  ],

  // ===== Strings / DP =====
  "1080": [
    { linkname: "CP-Algorithms: String DP", link: "https://cp-algorithms.com/string/string_dp.html" },
    { linkname: "USACO Guide: String DP", link: "https://usaco.guide/gold/string-dp" }
  ],

  "2421": [
    { linkname: "CP Blog: Counting Reorders", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Combinatorics", link: "https://usaco.guide/silver/combinatorics" }
  ],

  // ===== Distributions / Graphs =====
  "3232": [
    { linkname: "CP Blog: Tournament Graphs", link: "https://codeforces.com/blog/entry/20935" },
    { linkname: "USACO Guide: Graph Distributions", link: "https://usaco.guide/gold/graphs" }
  ],

  "3157": [
    { linkname: "CP Blog: Distribution DP", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: DP Distributions", link: "https://usaco.guide/gold/dp" }
  ],

  "2415": [
    { linkname: "CP-Algorithms: Functional Graphs", link: "https://cp-algorithms.com/graph/functional-graph.html" },
    { linkname: "USACO Guide: Functional Graphs", link: "https://usaco.guide/gold/functional-graphs" }
  ],

  // ===== Graph Basics & Traversals =====
  "3303": [
    { linkname: "CP-Algorithms: Multi-source BFS", link: "https://cp-algorithms.com/graph/breadth-first-search.html#multi-source-bfs" },
    { linkname: "USACO Guide: BFS Variants", link: "https://usaco.guide/silver/bfs" }
  ],

  "1702": [
    { linkname: "CP-Algorithms: Tree Traversals", link: "https://cp-algorithms.com/graph/tree_traversals.html" },
    { linkname: "USACO Guide: Trees", link: "https://usaco.guide/silver/trees" }
  ],

  "1757": [
    { linkname: "CP-Algorithms: Topological Sort", link: "https://cp-algorithms.com/graph/topological-sort.html" },
    { linkname: "USACO Guide: Toposort", link: "https://usaco.guide/gold/topological-sort" }
  ],

  "1756": [
    { linkname: "CP Blog: DAG Edge Properties", link: "https://codeforces.com/blog/entry/68138" },
    { linkname: "USACO Guide: DAGs", link: "https://usaco.guide/gold/graphs" }
  ],

  // ===== SCC / Directed Graphs =====
  "2177": [
    { linkname: "CP-Algorithms: Strongly Connected Components", link: "https://cp-algorithms.com/graph/strongly-connected-components.html" },
    { linkname: "USACO Guide: SCC", link: "https://usaco.guide/gold/scc" }
  ],

  "2179": [
    { linkname: "CP Blog: Degree Constraints in Graphs", link: "https://codeforces.com/blog/entry/19127" },
    { linkname: "USACO Guide: Graph Properties", link: "https://usaco.guide/gold/graphs" }
  ],

  "1707": [
    { linkname: "CP-Algorithms: Graph Girth", link: "https://cp-algorithms.com/graph/girth.html" },
    { linkname: "CP Blog: Shortest Cycles", link: "https://codeforces.com/blog/entry/17974" }
  ],

  // ===== Walks / Matrix / Paths =====
  "3357": [
    { linkname: "CP-Algorithms: Matrix Exponentiation", link: "https://cp-algorithms.com/algebra/matrix-exponentiation.html" },
    { linkname: "USACO Guide: Walk Counting", link: "https://usaco.guide/gold/matrix-exponentiation" }
  ],

  "3111": [
    { linkname: "CP Blog: Prefix + Contribution Tricks", link: "https://codeforces.com/blog/entry/53960" },
    { linkname: "USACO Guide: Prefix Sums", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  // ===== MST / DSU =====
  "3407": [
    { linkname: "CP-Algorithms: MST Properties", link: "https://cp-algorithms.com/graph/mst_kruskal.html" },
    { linkname: "USACO Guide: MST", link: "https://usaco.guide/gold/mst" }
  ],

  "3408": [
    { linkname: "CP Blog: Alternative MST Edges", link: "https://codeforces.com/blog/entry/72727" },
    { linkname: "USACO Guide: MST Variants", link: "https://usaco.guide/gold/mst" }
  ],

  "3409": [
    { linkname: "CP-Algorithms: Second Best MST", link: "https://cp-algorithms.com/graph/second_best_mst.html" },
    { linkname: "CP Blog: MST Cost Tricks", link: "https://codeforces.com/blog/entry/72727" }
  ],

  "1677": [
    { linkname: "CP-Algorithms: Dynamic Connectivity", link: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
    { linkname: "USACO Guide: DSU Rollback", link: "https://usaco.guide/gold/dsu" }
  ],

  // ===== Tree DP / Advanced Trees =====
  "3114": [
    { linkname: "CP-Algorithms: Tree DP", link: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" },
    { linkname: "USACO Guide: Tree DP", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "3149": [
    { linkname: "CP Blog: Rerooting DP", link: "https://codeforces.com/blog/entry/20935" },
    { linkname: "USACO Guide: Rerooting", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "1700": [
    { linkname: "CP-Algorithms: Tree Isomorphism", link: "https://cp-algorithms.com/graph/tree_isomorphism.html" },
    { linkname: "CP Blog: Tree Hashing", link: "https://codeforces.com/blog/entry/20876" }
  ],

  "1701": [
    { linkname: "CP-Algorithms: Rooted Tree Isomorphism", link: "https://cp-algorithms.com/graph/tree_isomorphism.html" },
    { linkname: "USACO Guide: Tree Hashing", link: "https://usaco.guide/gold/trees" }
  ],

  // ===== Connectivity / Bridges / AP =====
  "1703": [
    { linkname: "CP-Algorithms: Articulation Points", link: "https://cp-algorithms.com/graph/cutpoints.html" },
    { linkname: "USACO Guide: Bridges & Cutpoints", link: "https://usaco.guide/gold/bridges" }
  ],

  "1699": [
    { linkname: "CP Blog: Offline Graph Queries", link: "https://codeforces.com/blog/entry/15296" },
    { linkname: "USACO Guide: Graph Queries", link: "https://usaco.guide/gold/graphs" }
  ],

  "1203": [
    { linkname: "CP-Algorithms: Hamiltonian Paths", link: "https://cp-algorithms.com/graph/hamiltonian_path.html" },
    { linkname: "USACO Guide: Bitmask DP", link: "https://usaco.guide/gold/state-compression-dp" }
  ],

  "3308": [
    { linkname: "CP-Algorithms: Graph Coloring", link: "https://cp-algorithms.com/graph/graph_coloring.html" },
    { linkname: "USACO Guide: Coloring", link: "https://usaco.guide/gold/graphs" }
  ],

  "3158": [
    { linkname: "CP Blog: Graph Compression", link: "https://codeforces.com/blog/entry/19127" },
    { linkname: "USACO Guide: SCC Condensation", link: "https://usaco.guide/gold/scc" }
  ],

  "3358": [
    { linkname: "CP Blog: Path Decomposition", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Graph Paths", link: "https://usaco.guide/gold/graphs" }
  ],

  "1704": [
    { linkname: "CP-Algorithms: Tree Diameter & Centers", link: "https://cp-algorithms.com/graph/tree_diameter.html" },
    { linkname: "USACO Guide: Tree Properties", link: "https://usaco.guide/silver/trees" }
  ],

  "1705": [
    { linkname: "CP Blog: Forbidden Vertices", link: "https://codeforces.com/blog/entry/68138" },
    { linkname: "USACO Guide: Graph Blocking", link: "https://usaco.guide/gold/graphs" }
  ],

  "1752": [
    { linkname: "CP Blog: Facility Location on Trees", link: "https://codeforces.com/blog/entry/20935" },
    { linkname: "USACO Guide: Tree DP", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "1685": [
    { linkname: "CP-Algorithms: SCC Condensation DAG", link: "https://cp-algorithms.com/graph/condensation_graph.html" },
    { linkname: "USACO Guide: SCC DAG DP", link: "https://usaco.guide/gold/scc" }

  ],
  // ===== Strings / Subsequences =====
  "1087": [
    { linkname: "CP-Algorithms: Subsequences", link: "https://cp-algorithms.com/sequences/longest_common_subsequence.html" },
    { linkname: "USACO Guide: Greedy on Strings", link: "https://usaco.guide/silver/strings" }
  ],

  "2186": [
    { linkname: "CP-Algorithms: String Hashing", link: "https://cp-algorithms.com/string/string-hashing.html" },
    { linkname: "USACO Guide: Substrings", link: "https://usaco.guide/gold/strings" }
  ],

  // ===== Distinct Values / Prefix Tricks =====
  "3150": [
    { linkname: "CP-Algorithms: Prefix Sums", link: "https://cp-algorithms.com/data_structures/prefix-sums.html" },
    { linkname: "USACO Guide: Frequency Counting", link: "https://usaco.guide/bronze/maps-sets" }
  ],

  "3190": [
    { linkname: "CP Blog: Split Array Tricks", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Prefix + Suffix", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  // ===== Games / Greedy =====
  "1670": [
    { linkname: "CP Blog: Game Greedy Strategy", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Game Theory Intro", link: "https://usaco.guide/gold/game-theory" }
  ],

  "2427": [
    { linkname: "CP Blog: Game on Strings", link: "https://codeforces.com/blog/entry/17974" },
    { linkname: "USACO Guide: Game DP", link: "https://usaco.guide/gold/game-theory" }
  ],

  // ===== Permutations =====
  "3175": [
    { linkname: "CP Blog: Beautiful Permutations", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Permutation Construction", link: "https://usaco.guide/silver/permutations" }
  ],

  "3404": [
    { linkname: "CP Blog: Permutation Subsequences", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Permutations", link: "https://usaco.guide/silver/permutations" }
  ],

  // ===== Binary Search / Math =====
  "2422": [
    { linkname: "CP-Algorithms: Binary Search on Answer", link: "https://cp-algorithms.com/num_methods/binary_search.html" },
    { linkname: "USACO Guide: Binary Search", link: "https://usaco.guide/silver/binary-search" }
  ],

  "3301": [
    { linkname: "CP Blog: Max Average Subarray", link: "https://codeforces.com/blog/entry/53960" },
    { linkname: "USACO Guide: Binary Search on Answer", link: "https://usaco.guide/gold/binary-search" }
  ],

  "3302": [
    { linkname: "CP Blog: Fixed Average Subsets", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Meet in the Middle", link: "https://usaco.guide/gold/meet-in-the-middle" }
  ],

  "3361": [
    { linkname: "CP Blog: Average Constraints", link: "https://codeforces.com/blog/entry/53960" },
    { linkname: "USACO Guide: Binary Search", link: "https://usaco.guide/gold/binary-search" }
  ],

  // ===== Sorting / Inversions =====
  "3151": [
    { linkname: "CP-Algorithms: Inversion Count", link: "https://cp-algorithms.com/others/counting_inversions.html" },
    { linkname: "USACO Guide: Fenwick Tree", link: "https://usaco.guide/silver/fenwick-tree" }
  ],

  "3152": [
    { linkname: "CP Blog: Bubble Sort Rounds", link: "https://codeforces.com/blog/entry/72527" },
    { linkname: "USACO Guide: Order Statistics", link: "https://usaco.guide/gold/data-structures" }
  ],

  "1188": [
    { linkname: "CP-Algorithms: Segment Tree", link: "https://cp-algorithms.com/data_structures/segment_tree.html" },
    { linkname: "USACO Guide: Range Queries", link: "https://usaco.guide/gold/segment-tree" }
  ],

  // ===== Nearest / Geometry-like =====
  "3306": [
    { linkname: "CP-Algorithms: Nearest Element", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Two Pointers", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "3307": [
    { linkname: "CP Blog: Distance Queries", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Greedy", link: "https://usaco.guide/silver/greedy" }
  ],

  // ===== Stack / Histogram =====
  "1142": [
    { linkname: "CP-Algorithms: Largest Rectangle in Histogram", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Monotonic Stack", link: "https://usaco.guide/gold/monotonic-stack" }
  ],

  "2425": [
    { linkname: "CP Blog: Stack Optimization", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Stacks", link: "https://usaco.guide/silver/stacks" }
  ],

  // ===== Math / Number Theory =====
  "3169": [
    { linkname: "CP-Algorithms: LCM Properties", link: "https://cp-algorithms.com/algebra/lcm.html" },
    { linkname: "USACO Guide: Number Theory", link: "https://usaco.guide/silver/number-theory" }
  ],

  "3193": [
    { linkname: "CP Blog: Square-Free Sets", link: "https://codeforces.com/blog/entry/60920" },
    { linkname: "USACO Guide: Prime Factorization", link: "https://usaco.guide/silver/number-theory" }
  ],

  "1086": [
    { linkname: "CP-Algorithms: Digit DP Intro", link: "https://cp-algorithms.com/dynamic_programming/digit_dp.html" },
    { linkname: "USACO Guide: Digit DP", link: "https://usaco.guide/gold/digit-dp" }
  ],

  // ===== Misc =====
  "1747": [
    { linkname: "CP Blog: Array Construction", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Greedy Construction", link: "https://usaco.guide/silver/greedy" }
  ],

  "1147": [
    { linkname: "CP Blog: Skyline / Buildings", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Monotonic Stack", link: "https://usaco.guide/gold/monotonic-stack" }
  ],

  "1162": [
    { linkname: "CP-Algorithms: Sorting Algorithms", link: "https://cp-algorithms.com/sorting.html" },
    { linkname: "USACO Guide: Sorting", link: "https://usaco.guide/bronze/sorting" }
  ],

  "1191": [
    { linkname: "CP Blog: Cyclic Arrays", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Two Pointers", link: "https://usaco.guide/silver/two-pointers" }
  ],

  "2414": [
    { linkname: "CP Blog: Subset Sums", link: "https://codeforces.com/blog/entry/68953" },
    { linkname: "USACO Guide: Meet in the Middle", link: "https://usaco.guide/gold/meet-in-the-middle" }
  ],

  // ===== Simulation / Cycles =====
  "3215": [
    { linkname: "CP Blog: Simulation with Cycles", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Simulation", link: "https://usaco.guide/bronze/simulation" }
  ],

  "3216": [
    { linkname: "CP-Algorithms: Cycle Detection", link: "https://cp-algorithms.com/graph/finding-cycle.html" },
    { linkname: "CP Blog: Functional Graph Cycles", link: "https://codeforces.com/blog/entry/17974" }
  ],

  // ===== BFS / Geometry on Grid =====
  "3218": [
    { linkname: "CP-Algorithms: BFS on Grids", link: "https://cp-algorithms.com/graph/breadth-first-search.html" },
    { linkname: "USACO Guide: Grid BFS", link: "https://usaco.guide/silver/bfs" }
  ],

  // ===== Subset Sums =====
  "3108": [
    { linkname: "CP-Algorithms: Subset Sum DP", link: "https://cp-algorithms.com/dynamic_programming/subset_sum.html" },
    { linkname: "USACO Guide: Knapsack", link: "https://usaco.guide/gold/knapsack" }
  ],

  "3109": [
    { linkname: "CP Blog: Optimized Subset Sums", link: "https://codeforces.com/blog/entry/68953" },
    { linkname: "USACO Guide: Meet in the Middle", link: "https://usaco.guide/gold/meet-in-the-middle" }
  ],

  // ===== Greedy / Prefix =====
  "2132": [
    { linkname: "CP Blog: Increasing Array Tricks", link: "https://codeforces.com/blog/entry/73558" },
    { linkname: "USACO Guide: Greedy Arrays", link: "https://usaco.guide/silver/greedy" }
  ],

  "1189": [
    { linkname: "CP Blog: Fair Division Problems", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Greedy Strategy", link: "https://usaco.guide/silver/greedy" }
  ],

  "1698": [
    { linkname: "CP Blog: Sorting by Swaps", link: "https://codeforces.com/blog/entry/17974" },
    { linkname: "USACO Guide: Permutation Cycles", link: "https://usaco.guide/silver/permutations" }
  ],

  // ===== Strings / DP =====
  "2430": [
    { linkname: "CP-Algorithms: DP on Binary Strings", link: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html" },
    { linkname: "USACO Guide: String DP", link: "https://usaco.guide/gold/string-dp" }
  ],

  // ===== Graph / Trees =====
  "1706": [
    { linkname: "CP-Algorithms: Tree DP", link: "https://cp-algorithms.com/dynamic_programming/tree_dp.html" },
    { linkname: "USACO Guide: Tree DP", link: "https://usaco.guide/gold/tree-dp" }
  ],

  "1709": [
    { linkname: "CP Blog: Grid DP with Coins", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Grid DP", link: "https://usaco.guide/gold/dp-on-grids" }
  ],

  "3312": [
    { linkname: "CP Blog: Grid Coloring Techniques", link: "https://codeforces.com/blog/entry/68740" },
    { linkname: "USACO Guide: Graph Coloring", link: "https://usaco.guide/gold/graphs" }
  ],

  // ===== Matching / Assignment =====
  "2426": [
    { linkname: "CP-Algorithms: Bipartite Matching", link: "https://cp-algorithms.com/graph/kuhn_maximum_bipartite_matching.html" },
    { linkname: "USACO Guide: Matching", link: "https://usaco.guide/gold/matching" }
  ],

  // ===== DP Variants =====
  "2174": [
    { linkname: "CP Blog: Digit DP Optimization", link: "https://codeforces.com/blog/entry/72527" },
    { linkname: "USACO Guide: Digit DP", link: "https://usaco.guide/gold/digit-dp" }
  ],

  "2180": [
    { linkname: "CP Blog: Greedy Coin Placement", link: "https://codeforces.com/blog/entry/53960" },
    { linkname: "USACO Guide: Greedy", link: "https://usaco.guide/silver/greedy" }
  ],

  "3159": [
    { linkname: "CP Blog: Difference Arrays", link: "https://codeforces.com/blog/entry/78762" },
    { linkname: "USACO Guide: Prefix Difference", link: "https://usaco.guide/silver/prefix-sums" }
  ],

  // ===== Puzzles / Backtracking =====
  "2432": [
    { linkname: "CP Blog: Grid Puzzle Solving", link: "https://codeforces.com/blog/entry/71146" },
    { linkname: "USACO Guide: Backtracking", link: "https://usaco.guide/silver/backtracking" }
  ],

  "2131": [
    { linkname: "CP Blog: Constraint Propagation", link: "https://codeforces.com/blog/entry/77108" },
    { linkname: "USACO Guide: Backtracking Advanced", link: "https://usaco.guide/gold/backtracking" }
  ],

  // ===== Bitwise / Substrings =====
  "2115": [
    { linkname: "CP-Algorithms: Bitmask DP", link: "https://cp-algorithms.com/dynamic_programming/bitmask_dp.html" },
    { linkname: "USACO Guide: Bitwise Problems", link: "https://usaco.guide/gold/bitwise" }
  ],

  // ===== Sorting / Reversal =====
  "2075": [
    { linkname: "CP Blog: Sorting with Reversals", link: "https://codeforces.com/blog/entry/17974" },
    { linkname: "USACO Guide: Sorting Tricks", link: "https://usaco.guide/silver/sorting" }
  ],

  // ===== Knapsack / DP =====
  "1159": [
    { linkname: "CP-Algorithms: Knapsack Variants", link: "https://cp-algorithms.com/dynamic_programming/knapsack.html" },
    { linkname: "USACO Guide: Knapsack", link: "https://usaco.guide/gold/knapsack" }
  ],

  // ===== Number Theory / GCD =====
  "3161": [
    { linkname: "CP-Algorithms: GCD Properties", link: "https://cp-algorithms.com/algebra/gcd.html" },
    { linkname: "USACO Guide: Number Theory", link: "https://usaco.guide/silver/number-theory" }
  ],

  // ===== Optimization / Greedy =====
  "3402": [
    { linkname: "CP Blog: Cost Pairing Problems", link: "https://codeforces.com/blog/entry/66040" },
    { linkname: "USACO Guide: Greedy Optimization", link: "https://usaco.guide/gold/greedy" }
  ],

  "3425": [
    { linkname: "CP Blog: Equal Sum Subsets", link: "https://codeforces.com/blog/entry/68953" },
    { linkname: "USACO Guide: Subset DP", link: "https://usaco.guide/gold/knapsack" }
  ],

  // ===== Data Structures =====
  "1157": [
    { linkname: "CP-Algorithms: Mex Maintenance", link: "https://cp-algorithms.com/sequences/mex.html" },
    { linkname: "USACO Guide: Segment Trees", link: "https://usaco.guide/gold/segment-tree" }
  ],

  "1148": [
    { linkname: "CP-Algorithms: Monotonic Stack", link: "https://cp-algorithms.com/data_structures/stack_queue_modification.html" },
    { linkname: "USACO Guide: Histogram Problems", link: "https://usaco.guide/gold/monotonic-stack" }
  ],

  // ===== Greedy / Priority Queue =====
  "1161": [
    { linkname: "CP-Algorithms: Huffman Algorithm", link: "https://cp-algorithms.com/graph/huffman_algorithm.html" },
    { linkname: "USACO Guide: Priority Queue Greedy", link: "https://usaco.guide/silver/priority-queue" }
  ],

  "3401": [
    { linkname: "CP Blog: Difference Minimization", link: "https://codeforces.com/blog/entry/53960" },
    { linkname: "USACO Guide: Greedy", link: "https://usaco.guide/silver/greedy" }
  ],

  // ===== DP / Counting =====
  "1665": [
    { linkname: "CP Blog: Company DP Problems", link: "https://codeforces.com/blog/entry/72527" },
    { linkname: "USACO Guide: DP Counting", link: "https://usaco.guide/gold/dp" }
  ],

  // ===== Stack Sorting =====
  "2402": [
    { linkname: "CP Blog: Two Stack Sorting", link: "https://codeforces.com/blog/entry/17974" },
    { linkname: "USACO Guide: Stack Techniques", link: "https://usaco.guide/silver/stacks" }
  ],
};

export default PROBLEM_RESOURCES;

