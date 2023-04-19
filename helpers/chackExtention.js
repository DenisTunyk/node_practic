function checkExtention(filename) {
  const EXTENTIONS = ["js", "txt", "json", "xml", "html", "css"];
  const ext = filename.split(".").pop();
  const result = EXTENTIONS.includes(ext);
  return { ext, result };
}

module.exports = {
  checkExtention,
};
