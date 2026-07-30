
[
  // Derivatives and integrals

  // Inserts a partial-derivative fraction with editable numerator and denominator variables.
  { trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m" },

  // Regex shortcut: typing something like "payx" produces ∂y/∂x.
  // [[0]] is the first captured letter; [[1]] is the second.
  { trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm" },
  { trigger: /pa([A-Za-z])/, replacement: "\\frac{ \\partial }{ \\partial [[0]] } ", options: "rm" },

  { trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA" },

  // Adds a backslash before "int" when it is not already preceded by one.
  // For example, "xint" becomes "x\\int".
  { trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1 },

  // Expands an existing "\\int" into a full indefinite-integral template.
  // This is separate from the previous rule, which first converts plain "int" to "\\int".
  { trigger: "\\int", replacement: "\\int $0 \\, d${1:x} $2", options: "m" },

  // Definite integral template with default bounds 0 and 1.
  { trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, d${3:x} $4", options: "mA" },

  { trigger: "oint", replacement: "\\oint", options: "mA" },
  { trigger: "iint", replacement: "\\iint", options: "mA" },
  { trigger: "iiint", replacement: "\\iiint", options: "mA" },

  // Integral from 0 to infinity.
  { trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA" },

  // Integral from negative infinity to positive infinity.
  { trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA" },
]
