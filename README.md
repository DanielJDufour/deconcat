# deconcat
> Tokenize a Concatenation Expression

# features
🔥 Blazing Fast O(1) Time. 

🌳 Quotes (including backticks) are preserved. 

👾 Spaces are properly ignored. 

🍳 Handles quotes and plus signs inside of strings

# install
```bash
npm install deconcat
```

# usage
Tokenizing String Concatentation
```js
import deconcat from 'deconcat';

const expr = `"My name is " + name + "."`;
const tokens = deconcat(expr);
// tokens are [`"My name is"`, "name", `"."`];
// note: quotes are preserved, but spaces are not
```

Tokenizing Numerical Concatentation
```js
import deconcat from 'deconcat';

const expr = `1 + 2 + 3`;
const tokens = deconcat(expr);
// tokens are ["1", "2", "3"];
```


