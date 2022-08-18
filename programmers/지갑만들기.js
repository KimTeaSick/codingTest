function solution(size) {
  var answer = 0
  var w = 0
  var h = 0
  for (i = 0; i < size.length; i++) {
    if (size[i] > size[i + 1]) w = size[i]
    for (j = 0; j < size[i].length; j++) {
      if (size[i][j] > size[i][j + 1]) h = size[j]
      if (w > size[i][j]) {
        w = size[i]
      }
    }
  }
  answer = w * h
  return answer
}

const arr = [[60, 50], [30, 70], [60, 30], [80, 40]]

console.log(solution(arr))