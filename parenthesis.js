function Parenthesis(s) {
    let stack = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    let char = s[i];
    if (char === "(" || char === "[" || char === "{"){
      stack.push(char);

      console.log("Stack", stack);
    }
    else if(char === ")" || char === "]" || char === "}"){
      if(stack.length === 0){
        return false;
      }
      const last = stack.pop();
      if(last !== "(" && char === ")" || last !== "[" && char === "]" || last !== "{" && char === "}"){

        return false
      }

    }

  }
  if (stack.length === 0) return true;
  else return false;
}

Parenthesis("[");
