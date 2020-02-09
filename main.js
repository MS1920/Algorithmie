function displayPyramid(n) {
  for (var i = 0; i < 25; i++) {
    var str = '';
    for (var j = 1; j < 25-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    console.log(str);
  }
}
