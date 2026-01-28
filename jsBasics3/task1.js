
function area1 (widht, height){
   let area = widht * height;
   return "area = " + area + " ( function declaration)"; 
}

const area2 = function (widht, height){
   let area = widht * height;
   return "area = " + area + " ( function expression)"; 
}

const area3 = (widht, height) => {
   const area = widht * height;
   return "area = " + area + " ( Arrow function)"; 
}


console.log(area1(5,10))
console.log(area2(5,10))
console.log(area3(5,10))




