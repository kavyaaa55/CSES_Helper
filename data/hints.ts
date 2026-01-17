
const HINTS = {
  //graphs 
  "1192": [
    "What graph traversal visits all connected components in a grid?",
    "How can you mark visited cells so you don’t recount a room?",
    "Can you iterate and start a fresh DFS/BFS per unvisited region?"
  ],
  "1193": [
    "What search finds the shortest path on an unweighted grid?",
    "How do you reconstruct the path after BFS?",
    "What data do you store to backtrack the route?"
  ],
  "1666": [
    "How many connected components exist in the graph?",
    "What edges would connect those components minimally?",
    "Can you pick one representative from each component?"
  ],
  "1667": [
    "What search finds the shortest path in an unweighted graph?",
    "How can you track the parent of each node?",
    "How do you reconstruct the path from parent pointers?"
  ],
  "1668": [
    "Is this graph bipartite?",
    "What happens if a neighbor has the same color as your node?",
    "Which traversal (DFS/BFS) helps assign two teams?"
  ],
  "1669": [
    "How do you detect a cycle in an undirected graph?",
    "How do you record all nodes in that cycle?",
    "Can you track parent edges for reconstruction?"
  ],
  "1194": [
    "How do you manage two simultaneous searches (person vs monsters)?",
    "What is the earliest time monsters can reach each cell?",
    "How does that limit where the person can go?"
  ],
  "1671": [
    "What algorithm finds shortest paths in an unweighted graph?",
    "How can you store distances and parent pointers?",
    "How do you print distances for all nodes?"
  ],
  "1672": [
    "Which algorithm solves weighted single-source shortest paths efficiently?",
    "Why does Dijkstra fit here?",
    "How do you handle large graphs efficiently?"
  ],
  "1673": [
    "Is this a weighted graph with positive edges?",
    "What algorithm finds maximum ‘scores’ via relaxation?",
    "How do you track updates and maintain max distances?"
  ],
  "1195": [
    "Can you use a shortest path with a one-time discount?",
    "How do you represent states for discount used/unused?",
    "What structure helps store two costs per node?"
  ],
  "1197": [
    "How do you detect a cycle in a directed graph?",
    "What marks detect back edges?",
    "How do you stop when a cycle is found?"
  ],
  "1196": [
    "How can you find K shortest routes?",
    "How do you maintain multiple path costs per node?",
    "What structure picks the next best path?"
  ],
  "1678": [
    "Is this cycle detection in a directed graph?",
    "How can DFS color states detect cycles?",
    "How do you output the cycle path?"
  ],
  "1679": [
    "How can you order courses respecting prerequisites?",
    "What ensures prerequisites come first?",
    "Can Kahn’s algorithm or DFS topological sort help?"
  ],
  "1680": [
    "What is the longest simple path in a DAG?",
    "Can you use topological sorting to compute it?",
    "How do you propagate maximum distances?"
  ],
  "1681": [
    "How do you count distinct paths in a DAG?",
    "What DP state tracks path counts?",
    "What happens if the graph has cycles?"
  ],
  "1202": [
    "How can you reconstruct a unique itinerary?",
    "Which structure ensures lexicographically smallest order?",
    "Does this resemble constructing an Eulerian path?"
  ],
  "1750": [
    "Can you answer ancestor queries quickly on a tree?",
    "What preprocessing allows fast parent jumps?",
    "Is binary lifting useful here?"
  ],
  "1160": [
    "How do you answer LCA queries efficiently?",
    "What structure tracks depths and jumps?",
    "Can binary lifting compute ancestors?"
  ],
  "1751": [
    "How can you find cycle lengths in functional graphs?",
    "What happens when you chase pointers?",
    "How do you detect the cycle entry point?"
  ],
  "1675": [
    "Which MST algorithm picks minimal edges?",
    "Does the total weight of the MST solve it?",
    "Use Kruskal or Prim?"
  ],
  "1676": [
    "How do you support dynamic connectivity?",
    "Which structure supports union operations?",
    "Can DSU maintain component counts?"
  ],
  "1682": [
    "How do you check reachability from a source?",
    "What visit array marks reachable nodes?",
    "Does BFS suffice?"
  ],
  "1683": [
    "What combinatorics on graph components?",
    "How many ways to choose a capital per component?",
    "Multiply component sizes modulo?"
  ],
  "1684": [
    "How do you handle incremental connectivity?",
    "What happens when cycles form?",
    "Can DSU track component sizes?"
  ],
  "1686": [
    "What paths maximize collected value?",
    "Can you use DP with graph traversal?",
    "How do you handle revisits?"
  ],
  "1691": [
    "Is this hierarchical grouping by prefixes?",
    "Can a trie represent delivery stops?",
    "How do you sum cost per branch?"
  ],
  "1692": [
    "What graph represents overlapping sequences?",
    "Can you find an Eulerian cycle?",
    "How do you build the sequence from edges?"
  ],
  "1693": [
    "How do you model teleports as edges?",
    "Is the graph weighted or unweighted?",
    "Can BFS find reachable distances?"
  ],
  "1690": [
    "Is this counting unique permutations of flights?",
    "What pruning reduces the search?",
    "Can backtracking with visited flags work?"
  ],
  "1689": [
    "What sequence visits every cell once?",
    "Does Warnsdorff’s heuristic help?",
    "How do you backtrack on dead ends?"
  ],
  "1694": [
    "What path minimizes the maximum bottleneck?",
    "Can binary search on speed work?",
    "How do you check feasibility for a given speed?"
  ],
  "1695": [
    "How do you handle two moving entities?",
    "Can multi-state BFS model their positions?",
    "What state defines both positions?"
  ],
  "1696": [
    "Is this a maximum bipartite matching problem?",
    "Can DFS find augmenting paths?",
    "How do you assign pairs greedily?"
  ],
  "1711": [
    "What DP counts paths in a DAG?",
    "How do you order nodes for DP?",
    "What mod constraint do you apply?"
  ],
  "1068": [
    "What happens to the number when it is odd or even?",
    "Can you simulate the process directly?",
    "When does the loop stop?"
  ],

  "1083": [
    "What should the sum of numbers from 1 to n be?",
    "What information is missing from the input?",
    "Can subtraction help?"
  ],

  "1069": [
    "What matters more: the character or how long it repeats?",
    "Can you solve it in one pass?",
    "What variable should you update continuously?"
  ],

  "1094": [
    "What condition must the array satisfy?",
    "When do you need to increase a value?",
    "How do you count total increments?"
  ],

  "1070": [
    "Why do adjacent numbers cause problems?",
    "Can odd and even numbers be separated?",
    "What order avoids conflicts?"
  ],

  "1071": [
    "What pattern does the spiral follow?",
    "Which direction dominates for a given layer?",
    "Can you compute directly without building the grid?"
  ],

  "1072": [
    "How many ways to place two knights?",
    "When do knights attack each other?",
    "Subtract attacking cases from total?"
  ],

  "1092": [
    "What should the sum of both sets be?",
    "When is it impossible?",
    "How can you construct the sets greedily?"
  ],

  "1617": [
    "How many choices per position?",
    "What operation repeats many times?",
    "Why do you need modulo?"
  ],

  "1618": [
    "How many times does 5 divide factorials?",
    "Why are 2s not limiting?",
    "How do powers of 5 contribute?"
  ],

  "1754": [
    "When can two piles be emptied?",
    "What invariant remains constant?",
    "Can you check with modulo?"
  ],

  "1755": [
    "When can a palindrome be formed?",
    "How many odd-frequency characters are allowed?",
    "How do you place characters symmetrically?"
  ],

  "2205": [
    "How does one-bit change help?",
    "Can recursion generate codes?",
    "What happens when you reflect sequences?"
  ],

  "2165": [
    "What is the minimum number of moves?",
    "Which disk can move when?",
    "How does recursion split the problem?"
  ],

  "1622": [
    "How many unique permutations exist?",
    "What causes duplicates?",
    "Can sorting help?"
  ],

  "1623": [
    "What is the total sum?",
    "How do you divide into two groups?",
    "Can brute force work for small n?"
  ],

  "1624": [
    "What constraints queens?",
    "How do you track attacked columns/diagonals?",
    "Can backtracking explore all possibilities?"
  ],

  "2431": [
    "What is the position of digits?",
    "How many digits are contributed by k-digit numbers?",
    "Can you skip whole blocks?"
  ],

  "1625": [
    "Which moves are allowed?",
    "How do you avoid revisiting cells?",
    "Can pruning reduce search?"
  ],


  //dynamic porgramming;
  "1633": [
    "What is the smallest sum you can form?",
    "If you know ways to form smaller sums, how can you reach a bigger sum?",
    "Does order of dice rolls matter?"
  ],
  "1634": [
    "What is the minimum coins needed for sum 0?",
    "How does adding one coin change the answer?",
    "Can you build the answer bottom-up?"
  ],
  "1635": [
    "Does the order of coins matter here?",
    "What does dp[x] represent?",
    "How do previous sums contribute to the current sum?"
  ],
  "1636": [
    "Does the order of coins matter in this version?",
    "What happens if you process coins one by one?",
    "How do you avoid counting the same combination twice?"
  ],
  "1637": [
    "What is the fastest way to reduce a number to zero?",
    "What choices do you have at each step?",
    "Can dp[n] depend on dp[n - digit]?"
  ],
  "1638": [
    "What is the base case for the grid?",
    "From which directions can you come to a cell?",
    "How do blocked cells affect transitions?"
  ],
  "1158": [
    "What are the constraints on money and books?",
    "What does dp[x] represent?",
    "Is this similar to knapsack?"
  ],
  "1746": [
    "What does dp[i][x] mean?",
    "How does the previous position affect the current?",
    "How do you handle unknown values?"
  ],
  "2413": [
    "What patterns repeat in small widths?",
    "Can you derive a recurrence relation?",
    "How do states transition between levels?"
  ],
  "1639": [
    "What operations are allowed to transform strings?",
    "How does dp[i][j] relate to prefixes?",
    "What is the base case for empty strings?"
  ],
  "1640": [
    "What is the relationship between two sequences?",
    "What does dp[i][j] represent?",
    "How do you extend a common subsequence?"
  ],
  "1744": [
    "What is the simplest rectangle you can cut?",
    "How can one cut reduce the problem size?",
    "Can you try all possible cuts?"
  ],
  "1745": [
    "What is the cost to reach a cell?",
    "From where can you move?",
    "Can you relax values like shortest path?"
  ],
  "1743": [
    "What sums are achievable?",
    "How does adding one coin change reachable sums?",
    "Can you use a boolean DP?"
  ],
  "1097": [
    "What choices do players have?",
    "How does optimal play affect the result?",
    "Can dp[l][r] represent the best score?"
  ],
  "1093": [
    "How does this differ from Two Sets I?",
    "What does dp[x] represent?",
    "How do you avoid double counting?"
  ],
  "1148": [
    "What defines a valid mountain?",
    "Can you split the problem into left and right?",
    "How does DP help count ranges?"
  ],
  "1145": [
    "What is the LIS definition?",
    "Can dp[i] represent LIS ending at i?",
    "Is there a faster method than O(n²)?"
  ],
  "1140": [
    "How do you choose non-overlapping projects?",
    "What happens if you skip or take a project?",
    "Can sorting help simplify transitions?"
  ],
  "1653": [
    "What does a state represent?",
    "Can bitmasking represent taken people?",
    "How do you minimize rides?"
  ],
  "2415": [
    "What patterns repeat across rows?",
    "How do column states interact?",
    "Can you precompute transitions?"
  ],
  "2220": [
    "How do you count numbers with constraints?",
    "Can digit DP help here?",
    "What state tracks tight and previous digits?"
  ],
  "1146": [
    "What does dp[i] represent?",
    "How can you optimize transitions?",
    "Why is patience sorting relevant?"
  ],


  //range queries;
  "1646": [
    "What preprocessing lets you answer range sums in O(1)?",
    "How does prefix sum help subtract a range?",
    "What is the base case?"
  ],
  "1647": [
    "What structure supports fast range minimum queries?",
    "Can preprocessing help avoid recomputation?",
    "How do overlapping intervals help?"
  ],
  "1648": [
    "How can you support point updates efficiently?",
    "Which data structure handles updates + queries?",
    "What does each node store?"
  ],
  "1649": [
    "How do you maintain minimum with updates?",
    "What tree structure helps here?",
    "How do updates propagate?"
  ],
  "1650": [
    "What operation combines subranges?",
    "Why is XOR suitable for prefix technique?",
    "How do you answer queries fast?"
  ],
  "1651": [
    "How do you apply updates lazily?",
    "Can difference arrays help?",
    "How do queries retrieve final values?"
  ],
  "1652": [
    "How do you preprocess a 2D grid?",
    "How does inclusion-exclusion work?",
    "How do you answer rectangle queries?"
  ],
  "1143": [
    "What data structure can assign rooms greedily?",
    "How do you find the first valid position?",
    "How do updates affect future queries?"
  ],
  "1749": [
    "How do you remove elements efficiently?",
    "What structure tracks current positions?",
    "Can Fenwick Tree simulate removals?"
  ],
  "1144": [
    "How do you count values in a range?",
    "What preprocessing helps with dynamic updates?",
    "Can coordinate compression help?"
  ],
  "2166": [
    "What prefix structure supports queries?",
    "How does reversing affect computation?",
    "Can offline queries simplify it?"
  ],
  "2206": [
    "How do distances change after updates?",
    "What structure supports circular ranges?",
    "Can segment tree handle this?"
  ],
  "2169": [
    "What determines visibility?",
    "Can monotonic stacks help?",
    "How do queries reuse preprocessing?"
  ],
  "2216": [
    "How do you merge overlapping intervals?",
    "What structure stores active intervals?",
    "How do queries depend on endpoints?"
  ],
  "1643": [
    "What is the best subarray ending here?",
    "How does prefix min help?",
    "Can you reduce it to max difference?"
  ],
  "1644": [
    "How many subarrays satisfy the condition?",
    "What prefix sums are useful?",
    "Can maps or compression help?"
  ],
  "1734": [
    "How do you track distinct elements?",
    "Can offline queries help?",
    "What does last occurrence store?"
  ],
  "1735": [
    "How do updates affect distinct counts?",
    "What structure tracks frequencies?",
    "Can Mo’s algorithm help?"
  ],
  "2416": [
    "How do values change after each operation?",
    "What structure supports range increments?",
    "How do you answer queries efficiently?"
  ],
  "1739": [
    "How do you answer 2D queries with updates?",
    "What structure splits dimensions?",
    "How do updates propagate?"
  ],
  "1736": [
    "How do you combine range updates and sums?",
    "What does lazy propagation store?",
    "How do queries pull correct values?"
  ],
  "1737": [
    "How do polynomials change under updates?",
    "What extra info must nodes store?",
    "How does lazy propagation extend?"
  ],
  "1738": [
    "How do persistent structures help?",
    "What changes between versions?",
    "How do queries choose versions?"
  ],
  "2187": [
    "What is the smallest missing sum?",
    "How does sorting coins help?",
    "How do queries reuse prefix coverage?"
  ]

};

export default HINTS;


