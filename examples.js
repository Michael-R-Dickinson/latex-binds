[
  // Snippet replacements can have placeholders.
  { trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA", description: "Taylor expansion" },

  // Snippet replacements can also be JavaScript functions.
  // See the documentation for more information.
  {
    trigger: /iden(\d)/, replacement: (match) => {
      const n = match[1];

      let arr = [];
      for (let j = 0; j < n; j++) {
        arr[j] = [];
        for (let i = 0; i < n; i++) {
          arr[j][i] = (i === j) ? 1 : 0;
        }
      }

      let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
      output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
      return output;
    }, options: "mA", description: "N x N identity matrix"
  },
]
