const deconcat = (str, debug) => {
  const tokens = [];
  let inString = false;
  let current = '';
  let quotechar = null;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (debug) console.log("char:", char);
    if (char === "+") {
      if (inString) {
        current += char;
      } else if (current !== '') {
        tokens.push(current);
        current = "";
      }
    } else if (char === `'` || char === `"` || char === "`") {
      current += char;
      if (inString) {
        if (char === quotechar && str[i-1] !== "\\") inString = false;
      } else {
        inString = true;
        quotechar = char;
      }
    } else if (char === ` `) {
      if (inString) current += char;
    } else {
      current += char;
    }
  }
  if (current !== '') tokens.push(current);
  return tokens;
}

if (typeof module === "object") module.exports = deconcat;
if (typeof window === "object") window.deconcat = deconcat;
if (typeof self === "object") self.deconcat = deconcat;

