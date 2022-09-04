/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const st = [];
  const names = path.split("/");
  for (const name of names) {
    if (name === "..") {
      st.length > 0 && st.pop();
    } else if (name !== "." && name) {
      st.push(name);
    }
  }
  return `/${st.join("/")}`;
};
