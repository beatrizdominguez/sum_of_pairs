
function sum_pairs( array, solution) {
    let num1;
    let num2;
    let indexSum = array.length;
  for(let i = 0; i < array.length; i++) {

    for (let j = i+1; j < array.length; j++){
      // console.log('number 1 : '  + array[i] + ' index '  + i);
      //       console.log('number 2 : '  + array[j] + ' index '  + j);
      //       console.log(array[i] + array[j]);
      if(array[j] + array[i] === solution && j !== i){

        //   console.log('indexSum before if' + indexSum);
          if ((Math.abs(j - i)) < indexSum) {
            //   console.log('yes 2');
            //   console.log({j});
            //   console.log({i});
              indexSum = j - i;
              num1 = array[i];
              num2 = array[j];
            }
          indexSum = Math.abs(j - i);
        //   console.log('indexSum after if' + indexSum);


      }
    }
  }
  console.log('solution: ' + num1 + ' and ' + num2)
  return num1 ? [num1, num2] : undefined;
}

console.log(sum_pairs([11, 3, 7, 5],         10))
// #              ^--^      3 + 7 = 10
// == [3, 7]

console.log(sum_pairs([4, 3, 2, 3, 4],         6))
// // #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// // #             ^-----^      3 + 3 = 6, indices: 1, 3
// // #                ^-----^   2 + 4 = 6, indices: 2, 4
// // #  * entire pair is earlier, and therefore is the correct answer
// // == [4, 2]


console.log(sum_pairs([0, 0, -2, 3], 2))
// // #  there are no pairs of values that can be added to produce 2.
// // == None/nil/undefined (Based on the language)

console.log(sum_pairs([10, 5, 2, 3, 7, 5],         10))

// // #              ^-----------^   5 + 5 = 10, indices: 1, 5
// // #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// // #  * entire pair is earlier, and therefore is the correct answer
// // == [3, 7]
console.log(sum_pairs([5, 5, 2, 3, 4, 6],         10))

// // == [5, 5]