export default function deleteElem(target, oldArr) {
  let newArr = [];
  let flag = true;
  for (const elem of oldArr) {
    if (flag === true) {
      if (elem === target) {
        flag = false;
        continue;
      }
    }
    newArr.push(elem);
  }
  return newArr;
}