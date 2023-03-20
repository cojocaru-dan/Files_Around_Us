
import * as fs from 'node:fs';



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