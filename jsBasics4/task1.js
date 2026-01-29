const handleEven = () => console.log("number is even"); 
const handleOdd = () => console.log("number is odd"); 

function handleNum(num, callback1, callback2){
    if(num %2 === 0) { callback1() }
    else { callback2()} ;
}

handleNum(5, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);

