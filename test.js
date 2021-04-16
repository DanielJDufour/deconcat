const test = require("flug");
const tokenize = require("./deconcat");

test("tokenizing basic variable concats", ({ eq }) => {
  const tokens = tokenize("A+B+C", false);
  eq(tokens, ["A","B","C"]);
});

test("tokenizing strings with variables", ({ eq }) => {
  const tokens = tokenize("A+'B'+C", false);
  eq(tokens, ["A","'B'","C"]);
});

test("tokenizing strings with variables and spaces", ({ eq }) => {
  const str = "'My name is ' + name + '.'"
  const tokens = tokenize(str, false);
  eq(tokens, ["'My name is '", "name", "'.'"]);
});

test("tokenizing variables and strings with double apostrophes", ({ eq }) => {
  const tokens = tokenize("A+\"B'\"+C", false);
  eq(tokens, ["A","\"B'\"","C"]);
});

test("tokenizing backticks", ({ eq }) => {
  const tokens = tokenize("`Alphred B.`+C", false);
  eq(tokens, ["`Alphred B.`","C"]);
});

test("tokenizing strings with + in strings", ({ eq }) => {
  const tokens = tokenize("A+'+B'+C", false);
  eq(tokens, ["A","'+B'","C"]);
});

test("tokenizing numbers", ({ eq }) => {
  const tokens = tokenize("1 + 2 + 3", false);
  eq(tokens, ["1","2","3"]);
});

test("proj example", ({ eq }) => {
  const str = "Ck+' +lat_0=11.25217861111111 +lon_0=-60.68600888888889 +x_0=37718.66159325 +y_0=36209.91512952'+Ee+Ef+Vo+A";
  const tokens = tokenize(str);
  eq(tokens, ["Ck", "' +lat_0=11.25217861111111 +lon_0=-60.68600888888889 +x_0=37718.66159325 +y_0=36209.91512952'", "Ee","Ef","Vo","A"]);
});