
// 警告する Math メソッドのリスト
const WARN_FUNCTIONS = [
  "acos",
  "acosh",
  "asin",
  "asinh",
  "atan",
  "atanh",
  "atan2",
  "cbrt",
  "cos",
  "cosh",
  "exp",
  "expm1",
  "hypot",
  "log",
  "log1p",
  "log10",
  "log2",
  "pow",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "tanh"
];

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn about the use of Math functions.",
      recommended: false,
    },
    messages: {
      restrictedMethod: "Note that using 'Math.{{ method }}()' may result in different values ​in multiplay environments."
    },
  },

  create(context) {
    return {
      // メンバー式が参照されるときに実行
      MemberExpression(node) {
        // オブジェクトの Identifier チェック
        if (node.object.type !== "Identifier" || node.object.name !== "Math") {
          return; 
        }

        // プロパティの Identifier チェック
        if (node.property.type !== "Identifier") {
          return;
        }
        const methodName = node.property.name;

        // メソッド名が禁止リストに含まれているかチェック
        if (WARN_FUNCTIONS.includes(methodName)) {
          context.report({
            node: node.property,
            messageId: "restrictedMethod",
            data: { method: methodName }
          });
        }
      }
    };
  }
};