export default function replaceElems(oldArr, keyWord, value) {
  let newArr = [];
  for (const elem of oldArr) {
    if (elem === keyWord) {
      newArr.push(value);
    }
    else {
      newArr.push(elem);
    }
  }
  return newArr;
}