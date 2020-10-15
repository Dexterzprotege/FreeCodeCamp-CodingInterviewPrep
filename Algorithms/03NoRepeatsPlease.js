/*Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/

function permutation(prefix, str, arr){
  let n = str.length;
  if(n==0)
    arr.push(prefix);
  else{
    for(let i=0;i<n;i++){
      permutation(prefix+str[i], str.substring(0,i)+str.substring(i+1, n), arr);
    }
  }
}
function check(s){
  for(let i=1;i<s.length;i++)
    if(s[i]==s[i-1])
      return false;
  return true;
}
function permAlone(str) {
  var arr = [];
  permutation("", str, arr);
  let c = 0;
  for(let i=0;i<arr.length;i++){
    let ele = arr[i];
    if(check(ele))
      c++;
  }
  return (c);
}

permAlone('aab');
