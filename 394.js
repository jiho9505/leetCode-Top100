/*
    문자열 스택...
*/

const decodeString = s => {
    const stack = [];
    for (const char of s) {
      if (char !== "]") { stack.push(char); continue; }
      let cur = stack.pop();
      let str = '';
      while (cur !== '[') {
        str = cur + str;
        cur = stack.pop();
      }
      let num = '';
      cur = stack.pop();
      while (!Number.isNaN(Number(cur))) { // 그냥 isNaN 사용 가능 & Number 대신 parseInt 사용 가능
        num = cur + num;
        cur = stack.pop();
      }
      stack.push(cur);
      stack.push(str.repeat(Number(num)));
    }
    return stack.join('');
  };