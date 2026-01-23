function checkOrder (available, ordered){
    if(available < ordered) return "Your order is too large, we dont have enough goods.";
    if(ordered == 0) return "Your order is empty"; // по логіці спочатку повинна йти перевірка на 0, але так як вона йде другою умовою, зробив як в ТЗ
    return "Your order is accepted";
}

console.log(checkOrder(20,21));
console.log(checkOrder(20,0));
console.log(checkOrder(22,21))