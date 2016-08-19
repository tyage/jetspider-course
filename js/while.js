function countdown() {
  var a = 4
  while (a) {
    p(a);
    a = a - 1;
  }
  while (0) {
    p(2);
    break;
  }
  while (0) {
    continue;
    p(2);
  }
}

countdown()
