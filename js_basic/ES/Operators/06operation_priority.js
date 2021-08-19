// () → 一元 → 算术 → 比较 → 逻辑 → 赋值
var a = 4;
var num = 1 * (2 + 3) && ++a || 5 > 6 && 7 < 8 || !9;
// num = 1 * 5 && ++a || 5 > 6 && 7 < 8 || !9
// num = 1 * 5 && 5 || 5 > 6 && 7 < 8 || false
// num = 5 && 5 || 5 > 6 && 7 < 8 || false
// num = 5 && 5 || false && true || false
// num = 5 || false || false
// num = 5
console.log(num);