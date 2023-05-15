function nameData(a, b) {
  const c = `${a} ${b} How are you?`;
  return c;
}
let n = nameData;

let sumData = (a, b = 7) => a + b;
let minusData = (a, b = 2) => a - b;

export default n;

export { sumData as summ, minusData as minn };
