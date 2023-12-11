function loader(buffer) {
  const content = getBase64(buffer);
  return `module.exports = \`${content}\``;
}

loader.raw = true;

const getBase64 = (buffer) => {
  const base64 = buffer.toString("base64");
  return `data:image/jpeg;base64,${base64}`;
};

module.exports = loader;
