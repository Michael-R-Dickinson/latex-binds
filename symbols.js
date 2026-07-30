[
  // \mid
  // replacement for absolute value in trigger.js
  { trigger: "|", replacement: "\\mid", options: "mA" },

  // Common Fancy Letters - double letter -> fancy
  { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
  { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },
  { trigger: "CC", replacement: "\\mathbb{C}", options: "mA" },
  { trigger: "RR", replacement: "\\mathbb{R}", options: "mA" },
  { trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA" },
  { trigger: "NN", replacement: "\\mathbb{N}", options: "mA" },

  // Symbols
  { trigger: "ooo", replacement: "\\infty", options: "mA" },
  { trigger: "sum", replacement: "\\sum", options: "mA" },
  { trigger: "prod", replacement: "\\prod", options: "mA" },
  { trigger: "lim", replacement: "\\lim_{ ${0:n} \\to ${1:\\infty} } $2", options: "mA" },
  { trigger: "+-", replacement: "\\pm", options: "mA" },
  { trigger: "-+", replacement: "\\mp", options: "mA" },
  { trigger: "...", replacement: "\\dots", options: "mA" },
  { trigger: "nabl", replacement: "\\nabla", options: "mA" },
  { trigger: "del", replacement: "\\nabla", options: "mA" },
  { trigger: "xx", replacement: "\\times", options: "mA" },
  { trigger: "**", replacement: "\\cdot", options: "mA" },
  { trigger: "para", replacement: "\\parallel", options: "mA" },

  { trigger: "===", replacement: "\\equiv", options: "mA" },
  { trigger: "!=", replacement: "\\neq", options: "mA" },
  { trigger: ">=", replacement: "\\geq", options: "mA" },
  { trigger: "<=", replacement: "\\leq", options: "mA" },
  { trigger: ">>", replacement: "\\gg", options: "mA" },
  { trigger: "<<", replacement: "\\ll", options: "mA" },
  { trigger: "simm", replacement: "\\sim", options: "mA" },
  { trigger: "sim=", replacement: "\\simeq", options: "mA" },
  { trigger: "prop", replacement: "\\propto", options: "mA" },


  { trigger: "<->", replacement: "\\leftrightarrow ", options: "mA" },
  { trigger: "->", replacement: "\\to", options: "mA" },
  { trigger: "!>", replacement: "\\mapsto", options: "mA" },
  { trigger: "==>", replacement: "\\Rightarrow", options: "mA" }, // actually the shorter arrow lol
  { trigger: "\\leq>", replacement: "\\iff", options: "mA" }, // actually the shorter arrow lol
  { trigger: "=>", replacement: "\\implies", options: "mA" },
  { trigger: "=<", replacement: "\\impliedby", options: "mA" },

  { trigger: "and", replacement: "\\cap", options: "mA" },
  { trigger: "orr", replacement: "\\cup", options: "mA" },
  { trigger: "inn", replacement: "\\in", options: "mA" },
  { trigger: "notin", replacement: "\\not\\in", options: "mA" },
  { trigger: "\\\\\\", replacement: "\\setminus", options: "mA" },
  { trigger: "sub=", replacement: "\\subseteq", options: "mA" },
  { trigger: "sup=", replacement: "\\supseteq", options: "mA" },
  { trigger: "eset", replacement: "\\emptyset", options: "mA" },
  { trigger: "set", replacement: "\\{ $0 \\}$1", options: "mA" },
  { trigger: "e\\xi sts", replacement: "\\exists", options: "mA", priority: 1 },

  // Dashes
  { trigger: "--", replacement: "–", options: "tA" },
  { trigger: "–-", replacement: "—", options: "tA" },
  { trigger: "—-", replacement: "---", options: "tA" },

  // adds \ before log,exp,ln so log-> \log
  { trigger: /([^\\])(exp|log|ln)/, replacement: "[[0]]\\[[1]]", options: "rmA" },
]
