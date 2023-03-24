
import * as fs from 'node:fs';
// 1
fs.readFile('first.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// 2
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataContent = JSON.parse(data);
  console.log(dataContent[0].name);
});

// 3
const dataRead = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataContent = JSON.parse(data);
  console.log(dataContent[0].name);

  const avgNutritionsObject = averageNutritions(dataContent);
  console.log(avgNutritionsObject);

  const orderedFruits = orderById(dataContent);
  console.log(orderedFruits);
};
fs.readFile('data.json', 'utf8', dataRead);

// 4
function averageNutritions(dataArr) {
  const avgNutritionsObj = {
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
    sugar: 0
  };

  for (const fruit of dataArr) {
    avgNutritionsObj.carbohydrates += fruit.nutritions.carbohydrates;
    avgNutritionsObj.protein += fruit.nutritions.protein;
    avgNutritionsObj.fat += fruit.nutritions.fat;
    avgNutritionsObj.calories += fruit.nutritions.calories;
    avgNutritionsObj.sugar += fruit.nutritions.sugar;
  }
  avgNutritionsObj.carbohydrates /= dataArr.length;
  avgNutritionsObj.protein /= dataArr.length;
  avgNutritionsObj.fat /= dataArr.length;
  avgNutritionsObj.calories /= dataArr.length;
  avgNutritionsObj.sugar /= dataArr.length;

  return avgNutritionsObj;
}

// 5
function orderById(fruitsArr) {
  return fruitsArr.sort((firstFruit, secondFruit) => {
    if (firstFruit.id > secondFruit.id) {
      return 1;
    } else if (firstFruit.id < secondFruit.id) {
      return -1;
    } else {
      return 0;
    }
  });
}

// let orderById = (data) => {
//   return data.sort((a, b) => a.id - b.id);
// }

// DON'T MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
  toExport = [
    { name: "averageNutritions", content: averageNutritions, type: "function" },
    { name: "dataRead", content: dataRead, type: "function" }
  ]

} catch (error) {
  toExport = { error: error.message }
}

export { toExport };