let b = ['f', 'd', 's', 'f', 'a', 's', 'h', 'f', 'g', 's'];
const c = b.reduce((acc, item) => {
  if (acc[item]) {
    acc[item] += 1;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {})
let counter = 0
for (let value of Object.values(c)) {
  if (value > 1) {
    counter++
  }
}

function countDuplicates(str) {
  if (!str) {
    return 0
  }

  let counter = 0;

  const objectRepeater = [...str].reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1;
      return acc
    } else {
      acc[item] = 1;
      return acc
    }
  }, {});

  console.log(objectRepeater);


  for (const value of Object.values(objectRepeater)) {
    if (value > 1) {
      counter++;
    }
  };

  return counter;
}

console.log(countDuplicates('aabbccdd'));
