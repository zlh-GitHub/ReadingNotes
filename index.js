function foo() {
  console.log(this);
}

foo.call(undefined, 1, 2, 3);