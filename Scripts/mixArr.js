import deleteElem from "./deleteElem";

export default function mixArr(oldArr) {
  let newArr = [...oldArr];
  const mixedArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    const random = Math.floor(Math.random() * newArr.length);
    mixedArr.push(newArr[random]);
    newArr = deleteElem(newArr[random], newArr);
  }
  return mixedArr;
}