// 数字与数字比较
    console.log(7 > 8);
    console.log(7 < 8);
    console.log(7 >= 8);
    console.log(7 <= 8);
    console.log(7 == 8);
    console.log(7 != 8);
    console.log(8 === 8);
    console.log(8 !== 8);

    // 非正常情况1
    // NaN
    console.log(NaN > 8);
    console.log(NaN < 8);
    console.log(NaN >= 8);
    console.log(NaN <= 8);
    console.log(NaN == 8);
    console.log(NaN != 8);
    console.log(NaN === 8);
    console.log(NaN !== 8);
    console.log(NaN > NaN);
    console.log(NaN < NaN);
    console.log(NaN >= NaN);
    console.log(NaN <= NaN);
    console.log(NaN == NaN);
    console.log(NaN != NaN);
    console.log(NaN === NaN);
    console.log(NaN !== NaN);

    // Infinity
    console.log(Infinity > 8);
    console.log(Infinity < 8);
    console.log(Infinity >= 8);
    console.log(Infinity <= 8);
    console.log(Infinity == 8);
    console.log(Infinity != 8);
    console.log(Infinity === 8);
    console.log(Infinity !== 8);
    console.log(Infinity > Infinity);
    console.log(Infinity < Infinity);
    console.log(Infinity >= Infinity);
    console.log(Infinity <= Infinity);
    console.log(Infinity == Infinity); //true
    console.log(Infinity != Infinity);
    console.log(Infinity === Infinity);
    console.log(Infinity !== Infinity);

    // 非正常情况2 （排除字符串与字符串比较）
    console.log(1 == "1");
    console.log(1 == true);
    console.log(0 == false);
    console.log(0 == "");
    console.log(0 == "     ");
    console.log(0 == undefined);
    console.log(0 == null);
    console.log(1 > null);
    console.log(0 >= null);
    console.log(0 <= null);
    console.log(undefined == null);

    // 非正常情况 3 字符串和字符串比较
    console.log(6 < "12");
    console.log("6" < "12");
    console.log("A" < "12");
    console.log("A" < "a");
    console.log("banner" < "banana");

    // 比较顺序，从前往后进行比较，前面得出的结果再与后面比较
    console.log(3 > 2 > 1);
