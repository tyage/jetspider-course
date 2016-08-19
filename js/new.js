function method() {
  return 25;
}
function klass() {
}
function hoge() {
  var instance = new klass(1, 2);
  instance.prop = 1;
  instance.method = method;
  return instance;
}

p(hoge().prop)
p(hoge().method())
