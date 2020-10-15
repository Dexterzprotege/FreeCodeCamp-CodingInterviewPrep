/*The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.
Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.
Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).*/

function symDiff(first, second) {
    const x = first.filter(x => !second.includes(x));
    const y = second.filter(x => !first.includes(x));
    const difference = x.concat(y);
    return difference;
}
function sym(args) {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    var temp = args[0];
    for(let i=1;i<args.length;i++){
      temp = symDiff(temp, args[i]);
    }
    let uniqueChars = [...new Set(temp)];
    console.log(uniqueChars);
    return uniqueChars;
}

sym([1, 2, 3, 3], [5, 2, 1, 4])
