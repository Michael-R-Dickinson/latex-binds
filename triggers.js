[
  // Quad to text
  {
    trigger: ",,", replacement: "\\quad\\text{$0}", options: "mA"
  },
  // When we go into quad to text and we just really want a quad
  {
    trigger: /\\quad\\text\{,/,
    triggerAfter: /\}/,
    replacement: "\\quad{$0",
    options: "tA",
    description: "Collapse an empty \\quad\\text{} back to a bare \\quad",
  },

  // Small break
  { trigger: "  ", replacement: "\\;", options: "mA" },

  // Prime
  { trigger: "prr", replacement: "'", options: "mA" },

  // Absolute value
  { trigger: "abs", replacement: "|$0|$1", options: "mA" },
  { trigger: "\\mid\\", replacement: "|$0|$1", options: "mA" },


  // Bold and mathcal
  { trigger: "bf", replacement: "\\mathbf{$0}", options: "mA" },
  { trigger: "cal", replacement: "\\mathcal{$0}", options: "mA" },
  // type ".," after a symbol to make it bold - including greek
  { trigger: "([a-zA-Z]),\\.", replacement: "\\mathcal{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}),\\.", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK})\\.,", replacement: "\\boldsymbol{\\[[0]]}", options: "rmA" },


  // Subscript
  { trigger: "_", replacement: "_{$0}$1", options: "mA" },
  { trigger: ";", replacement: "_\\text{$0}", options: "mA" },
  // Auto letter subscript
  {
    trigger: /(^|[^A-Za-z\\])([A-Za-z])(\d)/,
    replacement: "[[0]][[1]]_{[[2]]}",
    options: "rmA",
    description: "Auto standalone letter subscript",
    priority: -1
  },
  {
    trigger: /(^|[^A-Za-z\\])([A-Za-z])(\d)(\d)/,
    replacement: "[[0]][[1]]_{[[2]]}",
    options: "rmA",
    description: "Auto letter subscript with 2 numbers",
    priority: -1
  },
  {
    trigger: /\\(${GREEK})(\d)/,
    replacement: "\\[[0]]_{[[1]]}",
    options: "rmA",
    description: "Auto Greek letter subscript",
    priority: -1
  },
  // \alpha_{1}2 -> \alpha_{12}
  {
    trigger: /\\(${GREEK})_\{(\d+)\}(\d)/,
    replacement: "\\[[0]]_{[[1]][[2]]}",
    options: "rmA",
    description: "Auto Greek letter subscript, extra digits",
    priority: -1
  },

  // Enter Text environment
  { trigger: "text", replacement: "\\text{$0}$1", options: "mA" },
  { trigger: "\"", replacement: "\\text{$0}$1", options: "mA" },
  { trigger: "\'", replacement: "\\text{$0}$1", options: "mA" },
  // If there's a stray space between the last symbol and the ' trigger,
  // absorb it into the text block so it starts with a leading space instead
  // of leaving a dangling space outside \text{}.
  // e.g. "x '" -> "x\text{ |}"  and  "\alpha '" -> "\alpha\text{ |}"
  {
    trigger: /([A-Za-z0-9]) '/,
    replacement: "[[0]]\\text{ $0}$1",
    options: "rmA",
    priority: 1,
    description: "Start text with a leading space after a symbol + space",
  },
  {
    trigger: "\\\\(${GREEK}|${SYMBOL}) '",
    replacement: "\\[[0]]\\text{ $0}$1",
    options: "rmA",
    priority: 1,
    description: "Start text with a leading space after a Greek/symbol command + space",
  },
  // Mirror case: if we've already closed a \text{} block, and there's a
  // stray space before the next symbol, absorb that space into the end of
  // the text block instead of leaving it dangling outside \text{}.
  // e.g. "\text{foo} x" -> "\text{foo }x"  and  "\text{foo} \alpha" -> "\text{foo }\alpha"
  {
    trigger: /\\text\{([^{}]*)\} ([A-Za-z0-9])/,
    replacement: "\\text{[[0]] }[[1]]",
    options: "rmA",
    priority: 1,
    description: "Absorb trailing space into \\text{} when followed by a symbol",
  },
  {
    trigger: "\\\\text\\{([^{}]*)\\} \\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})",
    replacement: "\\text{[[0]] }\\[[1]]",
    options: "rmA",
    priority: 1,
    description: "Absorb trailing space into \\text{} when followed by a Greek/symbol command",
  },

  // Frac
  { trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA" },
  // Sqrt
  { trigger: "sq", replacement: "\\sqrt{$0}", options: "mA" },


  // Miscelaneous fun stuff ------------------------------
  // Automatically convert standalone letters in text to math (except a, A, I).
  // (Un-comment to enable)
  { trigger: /([^'])\b([B-HJ-Zb-z])\b([\n\s.,?!:'])/, replacement: "[[0]]$[[1]]$[[2]]", options: "tA" },

  // Automatically convert Greek letters in text to math.
  { trigger: "(${GREEK})([\\n\\s.,?!:'])", replacement: "$\\[[0]]$[[1]]", options: "rtAw" },

  // Diacritics -------------
  // hat -> \hat{$0}
  { trigger: "hat", replacement: "\\hat{$0}$1", options: "mA" },
  { trigger: "widehat", replacement: "\\widehat{$0}$1", options: "mA" },
  { trigger: "bar", replacement: "\\bar{$0}$1", options: "mA" },
  { trigger: "dot", replacement: "\\dot{$0}$1", options: "mA", priority: -1 },
  { trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA" },
  { trigger: "cdot", replacement: "\\cdot", options: "mA" },
  { trigger: "tilde", replacement: "\\tilde{$0}$1", options: "mA" },
  { trigger: "und", replacement: "\\underline{$0}$1", options: "mA" },
  { trigger: "vec", replacement: "\\vec{$0}$1", options: "mA" },

  // xhat -> \hat{x}
  { trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA", priority: -1 },
  { trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: -1 },
  { trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 1 },
  { trigger: "([a-zA-Z])tilde", replacement: "\\tilde{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA" },
  { trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA" },

  // More diacritics but for greek letters instead of A-z letters
  // Applies a vector arrow, dot, bar, or hat to the preceding Greek letter or symbol. ie \alphahat -> \hat{\alpha}
  { trigger: "\\\\(${GREEK}|${SYMBOL}) vec", replacement: "\\vec{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) hat", replacement: "\\hat{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) dot", replacement: "\\dot{\\[[0]]}", options: "rmA" },
  { trigger: "\\\\(${GREEK}|${SYMBOL}) bar", replacement: "\\bar{\\[[0]]}", options: "rmA" },

  // Automatically inserts a space when a letter is typed immediately after a
  // Greek-letter or symbol command.
  // Example: \alphax → \alpha x
  { trigger: "\\\\(${GREEK}|${SYMBOL}|${MORE_SYMBOLS})([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA" },

  // Environments  ---------------------
  { trigger: "beg", replacement: "\\begin{gather}\n$0\n\\end{gather}", options: "mA" }, // goated
  { trigger: "cases", replacement: "\\begin{cases}\n$0\n\\end{cases}", options: "mA" },
  { trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}", options: "mA" },
  { trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA" },

  { trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA" },
  { trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA" },
  { trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA" },
  { trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA" },
  { trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA" },
  { trigger: "amat", replacement: "\\left(\\begin{array}{cc|c}\n$0\n\\end{array}\\right) ", options: "MA" },
  { trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA" },

  { trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA" },
  { trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA" },
  { trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA" },
  { trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA" },
  { trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA" },
  { trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA" },


  // Trigonometry ---------
  { trigger: /([^\\])(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)/, replacement: "[[0]]\\[[1]]", options: "rmA", description: "Add backslash before trig funcs" },
  // Add space after trig funcs. Skips letter h to allow sinh, cosh, etc.
  {
    trigger: /\\(arcsin|sin|arccos|cos|arctan|tan|csc|sec|cot)([A-Za-gi-z])/,
    replacement: "\\[[0]] [[1]]", options: "rmA",
  },
  // Add space after hyperbolic trig funcs
  {
    trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
    replacement: "\\[[0]] [[1]]", options: "rmA"
  },

  // Selection based stuff - select text and press a key --------------
  // Wraps the selected expression in an underbrace.
  { trigger: "U", replacement: "\\underbrace{ ${VISUAL} }_{ $0 }", options: "mA" },

  // Wraps the selected expression in an overbrace.
  // $0 places the cursor in the label above the brace.
  // Example: select "a+b", type O → \overbrace{a+b}^{...}
  { trigger: "O", replacement: "\\overbrace{ ${VISUAL} }^{ $0 }", options: "mA" },

  // Places an editable annotation underneath the selected expression.
  // Example: select "x", type B → \underset{...}{x}
  { trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA" },

  // Draws a cancellation line through the selected expression.
  // Example: select "x", type C → \cancel{x}
  { trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA" },

  // Cancels the selected expression with an editable destination value.
  // $0 is where you enter the value that the expression approaches or becomes.
  // Example: select "x", type K → \cancelto{0}{x}
  { trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA" },

  // Places the selected expression inside a square root.
  // Example: select "x+1", type S → \sqrt{x+1}
  { trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA" },

]
