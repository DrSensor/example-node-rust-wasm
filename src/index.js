async function calculator() {
  return {
    add: (a, b) => a + b,
    div: (a, b) => a / b
  };
}

calculator().then(({ add, div }) => {
  console.log(add(1, 2));
  console.log(div(4, 2));
});

export default calculator;
