export default function runTests (fn, duration) {
  fn();

  return function (tests) {
    setTimeout(() => {
      tests();
    }, duration + 10);
  };
}
