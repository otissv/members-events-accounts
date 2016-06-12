export default function functionalPipe () {
  const args = Array.from(arguments);

  return function (data) {
    const reducer = (value, fn) => Array.isArray(value) ? value.map((el) => fn(el)) : fn(value);
    const pipe = (fns) => (current) => fns.reduce(reducer, current);

    return pipe(args)(data);
  };
}
