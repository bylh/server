let input = [{
  id: '1',
  name: '111'
}, {
  id: '2',
  name: '222'
}, {
  id: '3',
  name: '333'
}];

let output = [{
  id: '4',
  name: '444'
}, {
  id: '2',
  name: '222'
}, {
  id: '3',
  name: '333'
}];

let knows = [
  [{
    id: '1',
    name: '111'
  }, {
    id: '2',
    name: '222'
  }],
  [{
    id: '1',
    name: '111'
  }, {
    id: '3',
    name: '333'
  }],
];
// 找到删除的即input中存在，而output中不存在
let deleteArr = input.filter(inputItem =>
   output.findIndex(outputItem => outputItem.id === inputItem.id) === -1);
console.log(deleteArr);

// 找到增加的及output中存在而input中不存在的
let addArr = output.filter(outputItem =>
  input.findIndex(inputItem => inputItem.id === outputItem.id) === -1);
console.log(addArr);

knows.forEach(arr => {
  deleteArr.forEach(dItem => {
    let index = arr.findIndex(item => item.id === dItem.id);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  });
  arr.push(...addArr);
});
console.log(knows);
