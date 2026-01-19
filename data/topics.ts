const PROBLEM_TOPICS = {
  //graohs
  "1192": ["dfs", "bfs", "grid", "connected-components"],
  "1193": ["bfs", "grid", "shortest-path", "path-reconstruction"],
  "1666": ["dfs", "connected-components", "graph"],
  "1667": ["bfs", "shortest-path", "parent-tracking"],
  "1668": ["bfs", "dfs", "bipartite-graph"],
  "1669": ["dfs", "cycle-detection", "undirected-graph"],
  "1194": ["bfs", "multi-source-bfs", "grid", "shortest-path"],
  "1671": ["dijkstra", "shortest-path", "priority-queue"],
  "1672": ["floyd-warshall", "all-pairs-shortest-path"],
  "1673": ["bellman-ford", "longest-path", "negative-cycles"],
  "1195": ["dijkstra", "state-graph", "shortest-path"],
  "1197": ["bellman-ford", "cycle-detection", "directed-graph"],
  "1196": ["dijkstra", "k-shortest-paths", "priority-queue"],
  "1678": ["dfs", "cycle-detection", "directed-graph"],
  "1679": ["topological-sort", "dag"],
  "1680": ["dag", "topological-sort", "dp"],
  "1681": ["dag", "dp", "path-counting"],
  "1202": ["dijkstra", "shortest-path", "path-counting"],
  "1750": ["binary-lifting", "functional-graph"],
  "1160": ["binary-lifting", "lca"],
  "1751": ["functional-graph", "cycle-detection"],
  "1675": ["mst", "kruskal", "dsu"],
  "1676": ["dsu", "dynamic-connectivity"],
  "1682": ["dfs", "reachability"],
  "1683": ["dfs", "strongly-connected-components"],
  "1684": ["2-sat", "implication-graph", "scc"],
  "1686": ["scc", "dag", "dp"],
  "1691": ["eulerian-path", "graph"],
  "1692": ["de-bruijn", "eulerian-cycle"],
  "1693": ["eulerian-path", "directed-graph"],
  "1690": ["dp", "bitmask", "hamiltonian-path"],
  "1689": ["backtracking", "heuristics"],
  "1694": ["max-flow", "edmonds-karp"],
  "1695": ["max-flow", "min-cut"],
  "1696": ["bipartite-matching", "dfs"],
  "1711": ["flow", "path-decomposition"],

  // introduction problems
  "1068": ["simulation", "math"],
  "1083": ["math", "array"],
  "1069": ["strings", "two-pointers"],
  "1094": ["greedy", "arrays"],
  "1070": ["constructive-algorithm"],
  "1071": ["math", "pattern"],
  "1072": ["combinatorics", "math"],
  "1092": ["greedy", "math"],
  "1617": ["math", "modular-exponentiation"],
  "1618": ["math", "number-theory"],
  "1754": ["math", "invariants"],
  "1755": ["strings", "frequency-count"],
  "2205": ["recursion", "bit-manipulation"],
  "2165": ["recursion"],
  "1622": ["backtracking", "strings"],
  "1623": ["brute-force", "subset-enumeration"],
  "1624": ["backtracking"],
  "2431": ["math", "binary-search"],
  "1625": ["backtracking", "grid"],

  // searching sorting 
  "1621": ["sorting", "set", "distinct-elements"],
  "1074": ["sorting", "median", "greedy"],
  "2183": ["sorting", "greedy"],

  "1084": ["two-pointers", "greedy", "sorting"],
  "1090": ["two-pointers", "greedy"],
  "1640": ["two-pointers", "hashing"],
  "1641": ["two-pointers", "sorting"],
  "1642": ["meet-in-the-middle", "hashing"],

  "1091": ["multiset", "binary-search"],
  "1073": ["multiset", "greedy"],
  "1163": ["set", "intervals"],

  "1619": ["sweep-line", "events"],
  "1164": ["sweep-line", "priority-queue"],

  "1629": ["greedy", "interval-scheduling"],
  "1632": ["greedy", "multiset"],

  "1141": ["sliding-window", "two-pointers"],
  "3420": ["sliding-window", "frequency"],
  "2428": ["sliding-window", "frequency"],

  "1660": ["prefix-sum", "hashing"],
  "1661": ["prefix-sum", "hashing"],
  "1662": ["prefix-sum", "modulo"],

  "1643": ["kadane", "maximum-subarray"],
  "1644": ["prefix-sum", "deque"],

  "1630": ["greedy", "sorting"],
  "1631": ["greedy"],

  "1620": ["binary-search", "search-on-answer"],
  "1085": ["binary-search", "partitioning"],

  "1645": ["monotonic-stack"],

  "2216": ["simulation", "ordering"],
  "2217": ["simulation", "segment-tree"],

  "2162": ["simulation", "queue"],
  "2163": ["order-statistics-tree"],

  "2168": ["sorting", "range-queries"],
  "2169": ["sorting", "fenwick-tree"],

  "3421": ["dp", "frequency"],

  //dp 
  "1633": ["dp", "dice-dp", "combinatorics"],
  "1634": ["dp", "knapsack", "minimization"],
  "1635": ["dp", "knapsack", "order-matters"],
  "1636": ["dp", "knapsack", "order-does-not-matter"],
  "1637": ["dp", "digit-dp"],

  "1638": ["dp", "grid", "paths"],
  "1158": ["dp", "0-1-knapsack"],
  "1746": ["dp", "state-dp", "constraints"],
  "2413": ["dp", "state-dp", "combinatorics"],

  "1639": ["dp", "strings", "edit-distance"],
  "3403": ["dp", "strings", "lcs"],

  "1744": ["dp", "interval-dp"],
  "3359": ["dp", "grid", "path-optimization"],
  "1745": ["dp", "subset-sum"],

  "1097": ["dp", "game-dp", "interval-dp"],
  "1093": ["dp", "subset-sum", "combinatorics"],
  "3314": ["dp", "range-dp"],

  "1145": ["dp", "lis", "binary-search"],
  "1140": ["dp", "weighted-interval-scheduling"],

  "1653": ["dp", "bitmask", "state-compression"],
  "2181": ["dp", "bitmask", "tiling"],
  "2220": ["dp", "digit-dp"],

  "1748": ["dp", "lis", "segment-tree"],
  // trees; 
  "1674": ["tree", "dfs", "subtree-size"],
  "1130": ["tree", "dp", "matching"],
  "1131": ["tree", "dfs", "diameter"],
  "1132": ["tree", "dfs", "distance"],
  "1133": ["tree", "dfs", "rerooting"],

  "1687": ["tree", "binary-lifting", "lca"],
  "1688": ["tree", "binary-lifting", "lca"],
  "1135": ["tree", "lca", "distance"],

  "1136": ["tree", "prefix-sum", "dfs"],
  "1137": ["tree", "subtree", "flattening"],
  "1138": ["tree", "segment-tree", "flattening"],
  "2134": ["tree", "heavy-light-decomposition"],

  "1139": ["tree", "dsu-on-tree", "frequency"],
  "2079": ["tree", "centroid"],
  "2080": ["tree", "centroid-decomposition"],
  "2081": ["tree", "centroid-decomposition"],


  //maths 
  "2164": ["math", "josephus", "recursion"],
  "1095": ["math", "modular-exponentiation"],
  "1712": ["math", "modular-exponentiation", "fermat"],
  "1713": ["math", "divisors", "number-theory"],
  "1081": ["math", "gcd", "number-theory"],
  "1082": ["math", "divisors", "number-theory"],
  "2182": ["math", "prime-factorization", "number-theory"],
  "2185": ["math", "inclusion-exclusion", "primes"],
  "2417": ["math", "mobius", "number-theory"],
  "3396": ["math", "primes", "sieve"],

  "1079": ["math", "binomial-coefficients", "combinatorics"],
  "1715": ["math", "combinatorics", "factorials"],
  "1716": ["math", "stars-and-bars", "combinatorics"],
  "1717": ["math", "derangements", "combinatorics"],
  "3397": ["math", "permutations"],
  "3398": ["math", "permutations", "simulation"],

  "2064": ["math", "dp", "brackets"],
  "2187": ["math", "dp", "brackets"],
  "2209": ["math", "burnside", "combinatorics"],
  "2210": ["math", "matrix-exponentiation", "combinatorics"],

  "1722": ["math", "matrix-exponentiation", "fibonacci"],
  "1096": ["math", "probability", "dp"],
  "1723": ["math", "matrix-exponentiation", "graphs"],
  "1724": ["math", "matrix-exponentiation", "graphs"],
  "3154": ["math", "linear-algebra"],
  "3355": ["math", "number-theory", "sums-of-squares"],
  "3406": ["math", "number-theory", "triangular-numbers"],

  "1725": ["probability", "dp"],
  "1726": ["probability", "markov"],
  "1727": ["probability", "expected-value"],
  "1728": ["probability", "expected-value"],

  "1729": ["game-theory", "dp"],
  "1730": ["game-theory", "nim"],
  "1098": ["game-theory", "nim"],
  "1099": ["game-theory", "dp"],
  "2207": ["game-theory", "grundy"],
  "2208": ["game-theory", "grundy"],

  //bit manipulation 
  "1146": ["bit", "dp", "counting-bits"],

  "1655": ["bit", "xor", "prefix-xor", "trie"],
  "3191": ["bit", "xor", "linear-basis"],
  "3211": ["bit", "xor", "linear-basis"],
  "3192": ["bit", "xor", "linear-basis"],
  "3233": ["bit", "xor", "prefix-xor"],

  "2419": ["bit", "xor", "dp"],
  "3194": ["bit", "xor", "dp"],
  "3195": ["bit", "xor", "dp"],

  "1654": ["bit", "sos-dp"],
  "3141": ["bit", "and", "sos-dp"],

  //segment trees;

  "1646": ["prefix-sum", "static-range-sum"],
  "1647": ["sparse-table", "static-rmq"],

  "1648": ["segment-tree", "point-update", "range-sum"],
  "1649": ["segment-tree", "point-update", "range-min"],
  "1650": ["segment-tree", "range-xor"],

  "1651": ["fenwick-tree", "range-update", "point-query"],
  "1652": ["prefix-sum", "2d-prefix-sum"],

  "1143": ["segment-tree", "binary-search"],
  "1749": ["segment-tree", "order-statistics"],
  "1144": ["segment-tree", "coordinate-compression"],

  "2166": ["prefix-sum", "range-sum"],
  "2206": ["segment-tree", "nearest-value"],
  "3304": ["segment-tree", "monotonic-stack"],

  "3163": ["segment-tree", "range-interval"],
  "1190": ["segment-tree", "maximum-subarray"],
  "3226": ["segment-tree", "maximum-subarray"],

  "1734": ["mo-algorithm", "offline-queries"],
  "3356": ["persistent-segment-tree"],

  "2416": ["segment-tree", "greedy"],
  "1664": ["segment-tree", "binary-search"],

  "1739": ["2d-segment-tree"],
  "1735": ["segment-tree", "lazy-propagation"],
  "1736": ["segment-tree", "lazy-propagation", "polynomial"],
  "1737": ["persistent-segment-tree"],

  "2184": ["prefix-sum", "greedy"],

  //strings 
  "1731": ["dp", "trie", "string-dp"],

  "1753": ["string-matching", "kmp"],
  "1732": ["prefix-function", "borders"],
  "1733": ["prefix-function", "periods"],

  "1110": ["booth-algorithm", "lexicographically-minimal-rotation"],

  "1111": ["manacher", "palindrome"],
  "3138": ["manacher", "palindrome"],

  "1112": ["automaton", "dp", "string-matching"],

  "2420": ["hashing", "palindrome-queries"],

  "2102": ["aho-corasick"],
  "2103": ["aho-corasick", "counting"],
  "2104": ["aho-corasick", "positions"],

  "2105": ["suffix-array", "lcp"],
  "1149": ["dp", "distinct-subsequences"],

  "2106": ["suffix-array", "binary-search"],

  "2107": ["string-algorithms"],

  "3225": ["suffix-array"],

  "1113": ["edit-distance", "dp"],

  "2108": ["suffix-array", "order-statistics"],
  "2109": ["suffix-array", "order-statistics"],
  "2110": ["suffix-array", "frequency"],


  //geometry 

  "2189": ["geometry", "orientation", "cross-product"],
  "2190": ["geometry", "line-segment-intersection"],
  "2191": ["geometry", "polygon-area", "shoelace"],
  "2192": ["geometry", "point-in-polygon"],
  "2193": ["geometry", "pick-theorem"],
  "2194": ["geometry", "closest-pair", "divide-and-conquer"],
  "2195": ["geometry", "convex-hull"],

  "3410": ["geometry", "manhattan-distance"],
  "3411": ["geometry", "manhattan-distance", "transform"],

  "1740": ["geometry", "line-intersection"],
  "3427": ["geometry", "sweep-line"],
  "3428": ["geometry", "sweep-line"],
  "3429": ["geometry", "li-chao-tree"],
  "3430": ["geometry", "li-chao-tree"],

  "1741": ["geometry", "sweep-line", "area-union"],
  "1742": ["geometry", "simulation"],

  //adv section 
  "1628": ["meet-in-the-middle", "subset-sum"],
  "2136": ["bit-manipulation", "hamming-distance"],
  "3360": ["grid", "prefix-sum"],
  "2137": ["grid", "prefix-sum", "counting"],
  "2138": ["graph", "dfs", "reachability"],
  "2143": ["graph", "reachability", "offline-queries"],
  "2072": ["data-structures", "rope"],
  "2073": ["data-structures", "rope"],
  "2074": ["data-structures", "segment-tree"],
  "2076": ["graph", "bridges"],
  "2077": ["graph", "articulation-points"],
  "2078": ["graph", "eulerian", "combinatorics"],
  "2084": ["dp", "game-dp"],
  "2085": ["dp", "game-dp"],
  "2086": ["math", "prefix-sum"],
  "2087": ["dp", "optimization"],
  "2088": ["dp", "knuth-optimization"],
  "2111": ["combinatorics", "dp"],
  "2112": ["bit-manipulation", "combinatorics"],
  "2113": ["fft", "convolution"],
  "2101": ["graph", "dsu"],
  "2133": ["graph", "dynamic-connectivity", "dsu"],
  "2121": ["graph", "shortest-path"],
  "2129": ["greedy", "matching"],
  "2130": ["graph", "flow"],

  //sliding windows;
  "3220": ["sliding-window", "prefix-sum"],
  "3221": ["sliding-window", "monotonic-queue"],
  "3426": ["sliding-window", "bit-manipulation"],
  "3405": ["sliding-window", "bit-manipulation"],
  "3222": ["sliding-window", "frequency-map"],
  "3224": ["sliding-window", "frequency-map", "mode"],
  "3219": ["sliding-window", "mex", "frequency-map"],
  "1076": ["sliding-window", "order-statistics"],
  "1077": ["sliding-window", "order-statistics"],
  "3223": ["sliding-window", "fenwick-tree", "inversions"],
  "3227": ["sliding-window", "deque", "optimization"],

  //interactive;
  "3112": ["interactive", "binary-search"],
  "3139": ["interactive", "permutation-reconstruction"],
  "3305": ["interactive", "order-statistics"],
  "3228": ["interactive", "combinatorics"],
  "3273": ["interactive", "greedy"],
  "3140": ["interactive", "sorting", "inversions"],


  // additonal topics
  "2214": ["combinatorics", "inversions"],
  "2215": ["dp", "monotone-subsequences"],
  "3422": ["combinatorics", "permutations"],
  "3423": ["combinatorics", "number-theory"],
  "1697": ["binary-search", "greedy"],
  "3424": ["dp", "grid", "set"],
  "2423": ["dp", "tiling"],
  "2418": ["constructive", "grid"],


  // adv graphs section
  "3303": ["graph", "multi-source-bfs"],
  "1134": ["trees", "prufer-code"],
  "1702": ["trees", "traversals"],
  "1757": ["graph", "topological-sort"],
  "1756": ["graph", "dag"],
  "2177": ["graph", "scc", "tarjan"],
  "2179": ["graph", "degree-parity"],
  "1707": ["graph", "bfs", "shortest-cycle"],
  "3357": ["graph", "matrix-exponentiation"],
  "3111": ["graph", "dp"],
  "3407": ["mst", "dsu"],
  "3408": ["mst", "dsu"],
  "3409": ["mst", "dsu"],
  "1677": ["graph", "dynamic-connectivity", "dsu"],
  "3114": ["tree-dp"],
  "3149": ["tree-dp"],
  "1700": ["trees", "isomorphism"],
  "1701": ["trees", "isomorphism"],
  "1699": ["graph", "flow"],
  "1703": ["graph", "articulation-points"],
  "1203": ["graph", "bitmask-dp"],
  "3308": ["graph", "coloring"],
  "3158": ["graph", "shortest-path"],
  "3358": ["graph", "path-decomposition"],
  "1704": ["graph", "tree-restructuring"],
  "1705": ["graph", "shortest-path"],
  "1752": ["graph", "binary-search"],
  "1685": ["graph", "reachability"],

  //combinaotics dp.
  "3413": ["grid", "prefix-sum", "counting"],
  "3414": ["grid", "prefix-sum", "counting"],
  "3415": ["grid", "prefix-sum", "bitmask"],
  "3416": ["grid", "prefix-sum", "bitmask"],
  "3417": ["grid", "prefix-sum", "border"],
  "3418": ["grid", "prefix-sum", "border"],
  "3400": ["dp", "game-dp"],
  "1080": ["dp", "strings"],
  "2229": ["dp", "inversions"],
  "2176": ["dp", "diagonals", "combinatorics"],
  "2228": ["dp", "state-dp", "combinatorics"],
  "1078": ["dp", "grid", "state-dp"],
  "1075": ["dp", "combinatorics", "permutations"],
  "2429": ["dp", "grid", "bitmask"],
  "2421": ["dp", "combinatorics"],
  "3232": ["combinatorics", "tournament-graphs"],
  "3157": ["combinatorics", "distributions"],
  "2415": ["combinatorics", "functional-graphs"],

  //add 1;
  "1087": ["greedy", "subsequence"],
  "3150": ["prefix-sum", "set"],
  "3190": ["prefix-sum", "distinct-elements"],
  "1670": ["bfs", "state-graph"],
  "3175": ["constructive", "permutations"],
  "2422": ["binary-search", "math"],
  "3151": ["sorting", "simulation"],
  "3152": ["sorting", "simulation"],
  "3306": ["binary-search", "distance"],
  "3307": ["binary-search", "distance"],
  "1142": ["monotonic-stack", "largest-rectangle"],
  "2186": ["strings", "prefix-sum"],
  "3169": ["number-theory", "dp"],
  "3193": ["bitmask", "dp"],
  "3294": ["prefix-sum", "two-pointers"],
  "3213": ["simulation"],
  "3214": ["simulation", "segment-tree"],
  "2425": ["greedy", "stack"],
  "3301": ["binary-search", "prefix-sum"],
  "3302": ["dp", "subset-sum"],
  "3361": ["binary-search", "prefix-sum"],
  "1747": ["greedy", "two-pointers"],
  "3404": ["dp", "subsequence"],
  "1188": ["segment-tree", "bitwise"],
  "1086": ["digit-dp"],
  "2427": ["game-dp"],
  "1147": ["dp", "monotonic-stack"],
  "1162": ["sorting", "analysis"],
  "1191": ["prefix-sum", "two-pointers"],
  "2414": ["meet-in-the-middle", "subset-sum"],

  //add 2;
  "3215": ["simulation", "math"],
  "3216": ["cycle-detection", "simulation"],
  "3218": ["graph", "bfs", "knight-moves"],
  "3108": ["meet-in-the-middle", "subset-sum"],
  "3109": ["meet-in-the-middle", "subset-sum"],
  "2132": ["greedy", "prefix-sum"],
  "1189": ["greedy", "two-pointers"],
  "1698": ["sorting", "simulation"],
  "2430": ["dp", "binary-strings"],
  "1706": ["greedy", "interval-scheduling"],
  "1709": ["dp", "grid"],
  "3312": ["dp", "grid-coloring"],
  "2426": ["greedy", "sorting"],
  "2174": ["dp", "digit-dp"],
  "2180": ["math", "greedy"],
  "3159": ["math", "simulation"],
  "2432": ["backtracking", "grid"],
  "2131": ["backtracking", "grid"],
  "2115": ["bit-manipulation", "strings"],
  "2075": ["sorting", "greedy"],
  "1159": ["dp", "knapsack"],
  "3161": ["number-theory", "dp"],
  "3402": ["greedy", "matching"],
  "3425": ["meet-in-the-middle", "subset-sum"],
  "1157": ["grid", "mex", "queries"],
  "1148": ["dp", "monotonic-stack"],
  "1161": ["greedy", "priority-queue"],
  "3401": ["math", "greedy"],
  "1665": ["dp", "combinatorics"],
  "2402": ["simulation", "stack"]
};

export default PROBLEM_TOPICS;




