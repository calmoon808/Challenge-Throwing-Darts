function scoreCalculator(arr) {
  // do work here
  let isLessThanFive = true;
  let score = 0;
  if (!Array.isArray(arr)){
    return 'parameter must be an array'
  } else {
    for (let i = 0, n = arr.length; i < n; i++){
      if (arr[i] < 1 || arr[i] > 20){
        return 'Scores must be in between 1 and 20'
      }
      if (arr[i] >= 5){
        isLessThanFive = false;
      };
      if (arr[i] >= 5 && arr[i] <= 10){
        score += 5;
      } else if (arr[i] < 5){
        score += 10;
      };
    }
    if (isLessThanFive === true){
      score += 100;
    }
    return score;
  }
}

console.log(scoreCalculator([1, 5, 11]));
console.log(scoreCalculator([1, 2, 1, 4, 4, 2]))

module.exports = scoreCalculator;
