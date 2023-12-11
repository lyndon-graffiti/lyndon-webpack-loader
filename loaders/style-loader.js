// webpack 基于 node，所以使用 CommonJS 模块化
// 打包过程不执行 JS，但是会进行 AST 分析，无法解析的代码，直接抛出错误
module.exports = (sourceCode) => {
  const code = `
    const styleElement = document.createElement("style");
    styleElement.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(styleElement);
    module.exports = \`${sourceCode}\`;
  `;
  return code;
};
